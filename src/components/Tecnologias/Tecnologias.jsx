import './Tecnologias.css';

import React from 'react';
import { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { technologies } from '../../data/object.tecnologias';
import handleTechnologyUpdateResponse from '../../hooks/useSaveTecnologia';
import { getUserById, updateTecnologia } from '../../services/API_proyect/user.service';
import ToggleTech from '../Toggle tecnologies/Toggle';

const Tecnologias = () => {
  const [arrayTecn, setArrayTecn] = useState(() => []);
  const [send, setSend] = useState(false);
  const [res, setRes] = useState(null);
  const [resInit, setResInit] = useState(null);
  const { user } = useAuth();

  const handleServiceAdd = async () => {
    setSend(true);
    const updateRes = await updateTecnologia({ technologies: arrayTecn });
    setRes(updateRes);
    handleTechnologyUpdateResponse(updateRes);
    setSend(false);
  };

  const userById = async () => {
    setSend(true);
    setResInit(await getUserById(user._id));
    setSend(false);
  };

  useEffect(() => {
    if (resInit == null) userById();
  }, []);

  useEffect(() => {
    if (resInit?.status == 200) {
      setArrayTecn(resInit.data.technologies);
    }
  }, [resInit]);

  useEffect(() => {
    console.log(arrayTecn);
  }, [arrayTecn]);

  useEffect(() => {
    if (res?.status == '200') {
      setArrayTecn(res.data.newUser.technologies);
    }
  }, [res]);

  return (
    <>
      <section className="choose_technologies-container-choose-padre">
        <p className="choose_technologies-container-choose">Selecciona tus tecnologías</p>
        <div className="father-container-technologies">
          {technologies.map((technology, index) => (
            <figure key={index} className="tecnologia-item" id={technology.name}>
              <div className="image-container">
                <img
                  className="tech-image"
                  src={technology.image}
                  alt={technology.name}
                />
              </div>

              <p className="tech-image-text">{technology.name}</p>
              <ToggleTech setArrayTecn={setArrayTecn} arrayTecn={arrayTecn} />
            </figure>
          ))}
        </div>
        <button
          className="btn_profile_general btn_profile_general_tech"
          onClick={() => handleServiceAdd()}
          disabled={send}
        >
          {' '}
          GUARDAR MIS TECH
        </button>
      </section>
    </>
  );
};

export default Tecnologias;
