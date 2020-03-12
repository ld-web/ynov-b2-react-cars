import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Transmission from "./Transmission";

const CarList = ({ cars }) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nom</TableCell>
          <TableCell align="right">Date de sortie</TableCell>
          <TableCell align="right">Km</TableCell>
          <TableCell align="right">Transmission</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cars.map(car => (
          <TableRow key={car.id}>
            <TableCell component="th" scope="row">
              {car.name}
            </TableCell>
            <TableCell align="right">{car.releaseYear}</TableCell>
            <TableCell align="right">{car.kilometers}</TableCell>
            <TableCell align="right">
              <Transmission type={car.transmission} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default CarList;
