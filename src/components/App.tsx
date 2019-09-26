import React from 'react';
import {Header} from "./Header";
import {Route, Switch} from "wouter";
import Home from "./Home";
import Login from "./Login";

const App: React.FC = () => {

  return (
    <div className="App">
      <Header/>
        <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/:rest*">
                <Home/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;

