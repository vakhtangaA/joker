import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Starter } from "./components/Starter";
import Game from "./components/Game";

const App = () => {
  const [players, setPlayer] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
  });

  const handlePlayerChange = name => event => {
    setPlayer({ ...players, [name]: event.target.value });
  };

  console.log(players);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Starter handlePlayerChange={handlePlayerChange} />
        </Route>
        <Route path="/game">
          <Game players={players} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
