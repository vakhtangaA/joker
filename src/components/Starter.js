import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  FormControlLabel,
  Button,
} from "@material-ui/core";

import { Player } from "./Player";

export const Starter = props => {
  const players = ["|", "||", "|||", "IV"].map((e, i) => (
    <Player key={i} id={e} name={`player${i + 1}`} />
  ));

  return (
    <Grid container justify="center" alignItems="center">
      <Grid
        container
        item
        alignItems="center"
        direction="column"
        xs={12}
        sm={8}
        md={6}
      >
        <Typography color="secondary" variant="h3">
          JOKER
        </Typography>
        <form onSubmit={props.handleSubmit}>
          <Box>{players}</Box>
          <FormControl fullWidth margin="normal" color="secondary">
            <InputLabel>აირჩიეთ თამაშის ტიპი</InputLabel>
            <Select autoWidth>
              <MenuItem value="სტანდარტული">სტანდარტული</MenuItem>
              <MenuItem value="ცხრიანები">ცხრიანები</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense" color="secondary">
            <InputLabel>აირჩიეთ ხიშტი</InputLabel>
            <Select autoWidth>
              <MenuItem value={200}>200</MenuItem>
              <MenuItem value={500}>500</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            control={<Switch color="secondary" />}
            label="წყვილები"
            labelPlacement="start"
            color="secondary"
          />
          <FormControlLabel
            control={<Switch color="secondary" />}
            label="მოშლა"
            labelPlacement="start"
          />

          <Grid container justify="center">
            <Link to="/game">
              <Button
                color="secondary"
                size="large"
                variant="contained"
                type="submit"
              >
                თამაშის დაწყება
              </Button>
            </Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
