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
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import { Player } from "./Player";

export const Starter = ({ handlePlayerChange }) => {
  const players = ["|", "||", "|||", "IV"].map((e, i) => (
    <Player
      key={i}
      id={e}
      name={`player${i + 1}`}
      handlePlayerChange={handlePlayerChange}
    />
  ));

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "calc(100vh - 2rem)" }}
    >
      <Grid
        container
        item
        alignItems="center"
        direction="column"
        xs={12}
        sm={8}
        md={6}
        lg={4}
      >
        <Typography color="secondary" variant="h3" gutterBottom={true}>
          JOKER
        </Typography>
        <form>
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
            <Button
              endIcon={<KeyboardArrowRightIcon />}
              color="secondary"
              size="large"
              variant="contained"
              type="submit"
              component={Link}
              to="/game"
            >
              {/* <Link to="/game">თამაშის დაწყება</Link> */}
              თამაშის დაწყება
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
