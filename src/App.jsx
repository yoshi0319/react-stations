// DO NOT DELETE

import './App.css';
import {Header} from './Header.jsx';
import {Description} from './Description.jsx';
import DogListContainer from './DogListContainer';
import {DogImage} from './DogImage.jsx'
import React, { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <><Header />
    <Description />
    <hr />
    <DogListContainer />
    </>
  )
}
