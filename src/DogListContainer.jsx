// @ts-check
import React, { useState } from 'react';
import { useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect';


export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
      const breedsArray = Object.keys(data.message);
      // @ts-ignore
      setBreeds(breedsArray);
    })
  }, [])

  // @ts-ignore
  const handleSelectChange = (selectedBreed) => {
    setSelectedBreed(selectedBreed)
  }

  const displayCheck = () =>{
    if (selectedBreed) {
      displayList(selectedBreed);
    }
    else {
      alert("犬種を選択してください");
    }
  }

  const [dogUrl, setDogUrl] = useState([]);
  // @ts-ignore
  const displayList = (Breed) =>{
    fetch(`https://dog.ceo/api/breed/${Breed}/images`)
    .then(response => response.json())
    .then(json => setDogUrl(json.message))
    // console.log(dogUrl);
}

  return (
    <div className='list-container'>
      <BreedsSelect
       breeds={breeds}
       selectedBreed={selectedBreed}
       setSelectedBreed={handleSelectChange}
      />
      <button className='display-btn' onClick={displayCheck}>表示</button>
      <div>
        {dogUrl.map((url) => {
          return <img src={url} alt="dog" />;
        })}
      </div>
    </div>
  )
}

export default DogListContainer
