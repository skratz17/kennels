import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Header } from './header/Header';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './ApplicationViews';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import './Kennel.css';

export const Kennel = () => (
  <>
    <Route render={() => {
      if(localStorage.getItem('kennel_customer')) {
        return (
          <>
            <Header />
            <NavBar />
            <ApplicationViews />
          </>
        );
      }
      else {
        return <Redirect to="/login" />;
      }
    }} />

    <Route path="/login" render={props => <Login {...props} />} />
    <Route path="/register" render={props => <Register {...props} />} />
  </>
);