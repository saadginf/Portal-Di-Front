import React from 'react';
import './App.css';
import Home from './containers/home/Home'
import Layout from './layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Calendrier from './containers/calender/Calender'
import Biblio from './containers/Biblio/Biblio'
import DetailOuv from './containers/DetailOuv/DetailOuv'
import BiblioInsp from "./containers/BiblioInsp/BiblioInsp"
import SerachInsp from './containers/SearchInsp/SearchInsp'
import Archive from './containers/Archive/Archive'
import HomeFormation from './containers/Formation/HomeFormation'
import RhPage from './containers/Formation/RhPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Provider} from "react-redux" 
import store from "./store"
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Layout>
      <Switch>
      <Route path="/biblio" exact component={Biblio}/>
      <Route path="/unite/:unit/:rayonId" exact component={BiblioInsp}/>
      <Route path="/unite/:unit" exact component={BiblioInsp}/>
      <Route path="/detailsOuvrage/:id" exact component={DetailOuv}/>
      <Route path="/calendrier" exact component={Calendrier}/>
      <Route path="/search" exact component={SerachInsp}/>
      <Route path="/archive" exact component={Archive}/>
      <Route path="/formation" exact component={HomeFormation}/>
      <Route path="/" exact component={Home}/>
      <Route path="/rh" exact component={RhPage}/>
          <Redirect to="/"/>
        </Switch>
      </Layout>
  </Router>
  </Provider>
  );
}

export default App;
