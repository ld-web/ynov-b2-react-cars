import React, { useEffect, useState } from "react";
import { getCars } from "../../services/CarService";
import Circle from "better-react-spinkit/dist/Circle";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CarList from "./List";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import { urls } from "../../utils/constants";

const ListContainer = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    getCars().then(res => {
      setCars(res.data.cars);
    });
  }, []);

  return cars ? (
    <Container>
      <h1>Mes belles voitures</h1>
      <Link component={RouterLink} to={urls.car.new}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Link>
      <CarList cars={cars} />
    </Container>
  ) : (
    <Box display="flex" justifyContent="center">
      <Circle />
    </Box>
  );
};

export default ListContainer;
