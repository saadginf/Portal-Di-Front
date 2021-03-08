import React from "react";
import "./App.css";
import Home from "./containers/home/Home";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authactions";
import setAuthToken from "./actions/setAuthToken.js";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Calendrier from "./containers/calender/Calender";
import Biblio from "./containers/Biblio/Biblio";
import DetailOuv from "./containers/DetailOuv/DetailOuv";
import BiblioInsp from "./containers/BiblioInsp/BiblioInsp";
import SerachInsp from "./containers/SearchInsp/SearchInsp";
import Archive from "./containers/Archive/Archive";
import HomeFormation from "./containers/Formation/HomeFormation";
import RhPage from "./containers/Formation/RhPage";
import ProfilePAge from "./containers/Formation/ProfilePAge";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import GesFormation from "./containers/Formation/GesFormation";
import DetailsFormationPage from "./containers/Formation/DetailsFromationPage";
import PlanificationSession from "./containers/Formation/PlanificationSession";
import SessionDetails from "./containers/Formation/SessionDetails";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Formation/Dashboard";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decode = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decode));
  const currentTime = Date.now() / 1000;
  console.log(currentTime);
  console.log(decode.exp - currentTime);
  if (decode.exp < currentTime) {
    store.dispatch(logoutUser());
  }
}
const App = () => {
  let links;
  if (!store.getState().auth.isAuth) {
    links = (
      <Switch>
        <Route path="/biblio" exact component={Biblio} />
        <Route path="/detailsOuvrage/:id" exact component={DetailOuv} />
        <Route path="/search" exact component={SerachInsp} />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  } else {
    if (store.getState().auth.user.roles[0] === "giunite") {
      links = (
        <Switch>
          <Route path="/biblio" exact component={Biblio} />
          <Route path="/detailsOuvrage/:id" exact component={DetailOuv} />
          <Route path="/search" exact component={SerachInsp} />
          <Route
            path={"/unite/" + store.getState().auth.user.unite}
            exact
            component={BiblioInsp}
          />
          <Route path="/" exact component={Home} />
          <Route path="/formation" exact component={HomeFormation} />
          <Route path="/rh" exact component={RhPage} />
          <Route path="/profile/:id" exact component={ProfilePAge} />
          <Route
            path="/planification/:id"
            exact
            component={PlanificationSession}
          />
          ß<Redirect to="/" />
        </Switch>
      );
    }
    if (store.getState().auth.user.roles[0] === "pdi") {
      links = (
        <Switch>
          <Route path="/biblio" exact component={Biblio} />
          <Route path="/unite/:unit" exact component={BiblioInsp} />
          <Route path="/detailsOuvrage/:id" exact component={DetailOuv} />
          <Route path="/calendrier" exact component={Calendrier} />
          <Route path="/search" exact component={SerachInsp} />
          <Route path="/archive" exact component={Archive} />
          <Route path="/formation" exact component={HomeFormation} />
          <Route path="/formation/:id" exact component={DetailsFormationPage} />
          <Route
            path="/planification/:id"
            exact
            component={PlanificationSession}
          />
          <Route path="/session/:id" exact component={SessionDetails} />
          <Route path="/" exact component={Home} />
          <Route path="/rh" exact component={RhPage} />
          <Route path="/gesFormations" exact component={GesFormation} />
          <Route path="/profile/:id" exact component={ProfilePAge} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      );
    }
  }

  return (
    <Provider store={store}>
      <Router>
        <Layout
          isAuth={store.getState().auth.isAuth}
          user={store.getState().auth.user.username}
          lout={() => {
            store.dispatch(logoutUser());
          }}
        >
          {links}
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
