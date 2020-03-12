import React from 'react';
import { transmission } from '../../utils/constants';
import Chip from '@material-ui/core/Chip';

const Transmission = ({ type }) => {
  let lbl;

  switch (type) {
    case transmission.auto:
      lbl = "Automatique";
      break;
    case transmission.manual:
      lbl = "Manuelle";
      break;
    case transmission.hybrid:
      lbl = "Hybride";
      break;
    default:
      lbl = "Non renseigné";
  }

  return (
    <Chip label={lbl} variant="outlined" />
  );
};

export default Transmission;