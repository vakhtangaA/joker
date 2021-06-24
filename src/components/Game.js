import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import DataGrid from "react-data-grid";
import { Link } from "react-router-dom";

import clsx from "clsx";

const useStyles = makeStyles({
  btn: {
    width: "10rem",
  },
  stopButton: {
    background: red[400],
    color: "#fff",
    "&:hover": {
      background: red[400],
    },
  },
});

export default function Game({ players }) {
  const myContainer = useRef(null);
  const { player1, player2, player3, player4 } = players;

  const columns = [
    { key: "title", name: "#", width: 50 },
    { key: "player1", name: player1 },
    { key: "player2", name: player2 },
    { key: "player3", name: player3 },
    { key: "player4", name: player4 },
  ];

  const rows = [
    { id: 0, title: 0 },
    { id: 1, title: 1 },
    { id: 2, title: 2 },
    { id: 3, title: 3 },
    { id: 4, title: 4 },
    { id: 5, title: 5 },
    { id: 6, title: 6 },
    { id: 7, title: 7 },
    { id: 8, title: 8 },
    { id: 9, title: 9 },
  ];

  const classes = useStyles();
  // console.log(myContainer);

  return (
    <div id="wrapper">
      <DataGrid columns={columns} rows={rows} resizable />
      <Link to="/">
        <Button
          className={clsx(classes.stopButton, classes.btn)}
          variant="contained"
        >
          შეწყვეტა
        </Button>
      </Link>
      <Button color="default" className={classes.btn} variant="contained">
        შედეგი
      </Button>
    </div>
  );
}
