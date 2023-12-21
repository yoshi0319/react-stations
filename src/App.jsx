// DO NOT DELETE

import './App.css';
import {Header} from './Header.jsx';
import {Description} from './Description';'./Description.jsx';
import {DogImage} from './DogImage.jsx';
import React, { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  const btnClick = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(json => setDogUrl(json.message))
}

  return (
    <><Header />
    <div>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} />
      <button onClick={btnClick}>更新</button>
    </div></>
  )
}
