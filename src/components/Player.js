import React from "react";
import { TextField } from "@material-ui/core";

export const Player = ({ id, name, handlePlayerChange }) => (
  <TextField
    placeholder={`${id} player`}
    type="text"
    name={name}
    required
    variant="filled"
    fullWidth
    autoComplete="off"
    onChange={handlePlayerChange(name)}
  />
);
