import React from 'react';

export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  const handleChange = (event) => {
    setSelectedBreed(event.target.value);
    console.log(event.target.value);
  };

  return (
    <select value={selectedBreed} onChange={handleChange}>
      <option value="">Select a breed</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
};

export default BreedsSelect
