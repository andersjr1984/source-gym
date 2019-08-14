import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Navigator } from '../navigation/Navigator';
import { Home } from '../home/Home';
import { Profile } from '../profile/Profile';

export const PageDisplay = () => {
  return (
    <main>
      <Router>
        <Route
          path='/'
          component={Navigator}
        />
        <div className="content">
          <Switch>
            <Route
              exact={true}
              path='/Profile'
              component={Profile}
            />
            <Route 
              exact={true}
              path='/' 
              component={Home}
            />
          </Switch>
        </div>
      </Router>
    </main>
  )
}