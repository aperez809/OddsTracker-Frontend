import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { gamePath, homepagePath } from '../../constants/path-names'

import GameHistory from "../GameHistory"
import HomePage from "../HomePage";
import PageNotFound from "../PageNotFound"
import React from 'react';
import { connect } from 'react-redux'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${homepagePath}`} component={HomePage} />
        <Route exact path={`${gamePath}/:id`} component={GameHistory} />
        {/* <Redirect to="/404" component={PageNotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(App)