import React, { useState } from 'react';
import myLogo from './assets/img/my_logo.png'
import './App.css';

import axios from 'axios'

function App() {

  const [countryName, setCountryName] = useState('')

  const getUniversityList = () => {

    console.log('countryName: ', countryName)

    axios.get(`http://universities.hipolabs.com/search?country=${countryName}`)
    .then(response => {
      console.log('res: ', response.data)
    })
    .catch(err => {
      console.log('err: ', err)
    })
  }

  const getCountryName = (element) => {
    const countryNameByUser = element.target.value
    setCountryName(countryNameByUser)
  }


  return (
    <div className="App">

      <input type="text" onChange={getCountryName} />

      <button onClick={getUniversityList}>
        Get University List
      </button>
    </div>
  );
}

export default App;
