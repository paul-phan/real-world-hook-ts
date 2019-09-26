import React from 'react';
import {Header} from "./Header";
import {Route, Switch} from "wouter";
import Home from "./Home";
import Login from "./Login";
import {useUser} from "../store/user";

const App: React.FC = () => {
    const {user} = useUser()
  return (
    <div className="App">
        <Header user={user}/>
        <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/:rest*">
                <Home user={user}/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;

