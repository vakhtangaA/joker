import React from "react";
import { Grid, TextField } from "@material-ui/core";

export const Player = props => (
  <TextField
    placeholder={`${props.id} player`}
    type="text"
    name={props.name}
    required
    variant="filled"
    fullWidth
    autoComplete="off"
  />
);