import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Navigator } from '../navigation/Navigator';
import { Home } from '../home/Home';
import { Profile } from '../profile/Profile';
import { LogIn } from '../login/LogIn';

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
              path='/LogIn' 
              component={LogIn}
            />
            <Route 
              exact={true}
              path='/' 
              component={Home}
            />
          </Switch>
          <small>Website by the green owl.</small>
        </div>
      </Router>
    </main>
  )
}