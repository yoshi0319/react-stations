// @ts-check
import React, { useState } from 'react';
import DogImage from './DogImage';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  const btnClick = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(json => setDogUrl(json.message))
}

  return (
    <div className="description">
      <div className='message-image'>
        <p>犬の画像を表示するサイトです。</p>
        <DogImage url={dogUrl}/>
      </div>
      <button onClick={btnClick} className='update-btn'>更新</button>
    </div>
  )
}

export default Description
