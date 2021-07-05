import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Noticias from "./components/Noticias";
import Estadisticas from "./components/Estadisticas";
import Plantilla from "./components/Plantilla";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import {userContext, setUserContext} from './components/user';

function App() {

  const [user, setUser] = React.useState({});

  return (
    <Router>
      <userContext.Provider value={user} >
        <setUserContext.Provider value={setUser} >
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Login" exact component={Login} />
              <Route path="/Register" exact component={Register} />
              <Route path="/Noticias" exact component={Noticias} />
              <Route path="/Estadisticas" exact component={Estadisticas} />
              <Route path="/Plantilla" exact component={Plantilla} />
            </Switch>
          </div>
        </setUserContext.Provider>
      </userContext.Provider>
    </Router>
  );
}

export default App;
