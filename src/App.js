import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Starter } from "./components/Starter";
import { Game } from "./components/Game";

const App = () => {
  const [info, setInfo] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const gameInfo = {};

    for (let key in e.target.elements) {
      if (key < 8) {
        const element = e.target.elements[key];
        if (element.type !== "checkbox") {
          const name = element.getAttribute("name");
          gameInfo[name] = element.value;
        } else if (element.type === "checkbox") {
          const name = element.getAttribute("name");
          element.checked ? (gameInfo[name] = true) : (gameInfo[name] = false);
        }
      }
    }

    setInfo(gameInfo);
    console.log(info);
  }
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Starter handleSubmit={handleSubmit} name="Vakhtanga" />
        </Route>
        <Route path="/game" component={Game} />
      </Switch>
    </div>
  );
};

export default App;
