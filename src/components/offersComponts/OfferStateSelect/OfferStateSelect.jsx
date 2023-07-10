import './OfferStateSelect.css';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const OfferStateSelect = ({ valueOfferState, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="OfferStateSelect-label">Offer State</InputLabel>
      <Select
        labelId="OfferStateSelect-label"
        id="OfferStateSelect-select"
        value={valueOfferState}
        label="Offer State"
        onChange={onChange}
      >
        <MenuItem value={'All'}>All</MenuItem>
        <MenuItem value={'Open'}>Open</MenuItem>
        <MenuItem value={'Suspended'}>Suspended</MenuItem>
        <MenuItem value={'Close'}>Close</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OfferStateSelect;
