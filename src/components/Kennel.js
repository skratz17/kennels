import React from 'react';

import { Header } from './header/Header';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './ApplicationViews';
import './Kennel.css';

export const Kennel = () => (
  <>
    <Header />
    <NavBar />
    <ApplicationViews />
  </>
);