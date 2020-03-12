import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import { transmission } from "../../utils/constants";

const CarForm = ({ onSubmit }) => {
  const [transmissionSelect, setTransmission] = useState(transmission.auto);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("transmission", transmission.auto);
  }, [setValue]);

  const handleChange = event => {
    setValue("transmission", event.target.value);
    setTransmission(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "3em" }}>
      <div>
        <TextField
          label="Nom"
          name="name"
          inputRef={register({ required: true })}
        />
      </div>
      <div>
        <TextField
          label="Année de sortie"
          name="releaseYear"
          type="number"
          inputRef={register({ required: true })}
        />
      </div>
      <div>
        <TextField
          label="Kilomètres"
          name="kilometers"
          type="number"
          inputRef={register({ required: true })}
        />
      </div>
      <FormControl style={{ marginTop: "1em" }}>
        <input
          type="hidden"
          name="transmission"
          ref={register({ required: true })}
        />
        <InputLabel id="transmission-select-label">Transmission</InputLabel>
        <Select
          labelId="transmission-select-label"
          value={transmissionSelect}
          onChange={handleChange}
          style={{ minWidth: "120px" }}
        >
          <MenuItem value={transmission.auto}>Auto</MenuItem>
          <MenuItem value={transmission.manual}>Manuelle</MenuItem>
          <MenuItem value={transmission.hybrid}>Hybride</MenuItem>
        </Select>
      </FormControl>

      <div style={{ marginTop: "2em" }}>
        <Button variant="contained" color="primary" type="submit">
          Enregistrer
        </Button>
      </div>
    </form>
  );
};

export default CarForm;
