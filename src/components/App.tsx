import React from 'react';
import {Header} from "./Header";
import {Route} from "wouter";
import Home from "./Home";
import {useToken} from "../store/token";

const App: React.FC = () => {

  const {token} = useToken()
  return (
    <div className="App">
      <Header/>
      <Route path="/">
        <Home token={token}/>
      </Route>
    </div>
  );
}

export default App;
