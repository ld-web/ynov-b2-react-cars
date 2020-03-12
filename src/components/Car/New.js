import React from "react";
import { Container, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import { urls } from "../../utils/constants";
import CarForm from "./CarForm";
import getInstance from "../../utils/request-utils";

const New = () => {
  const onSubmit = data => {
    const instance = getInstance();
    instance.post('/api/car', data)
    .then(res => alert('Voiture créée'))
    .catch(err => alert('Une erreur est survenue'));
  };

  return (
    <Container>
      <h1>Nouvelle voiture</h1>
      <Link component={RouterLink} to={urls.car.list}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<ArrowBackIcon />}
        >
          Retour à la liste
        </Button>
      </Link>
      <CarForm onSubmit={onSubmit} />
    </Container>
  );
};

export default New;
