import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { gamePath, homepagePath } from '../../constants/path-names'

import HomePage from "../HomePage";
import React from 'react';
import { connect } from 'react-redux'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${homepagePath}`} component={HomePage} />
        {/* <Route exact path={`${gamePath}/:id/odds`} component={GameHistory} /> */}
        <Redirect to={`${homepagePath}`} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(App)