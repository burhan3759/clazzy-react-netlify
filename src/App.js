import React, { useState } from 'react';
import './University.css';

import axios from 'axios'

function App() {

  const [countryName, setCountryName] = useState('')
  const [universities, setUniversities] = useState([])

  const getUniversityList = () => {

    console.log('countryName: ', countryName)

    axios.get(`http://universities.hipolabs.com/search`, {
      params: {
        country: countryName,
      }
    })
    .then(response => {
      console.log('res: ', response.data)
      setUniversities(response.data)
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
    <div className="main-container">

      <input type="text" onChange={getCountryName} />

      <button onClick={getUniversityList} className="search-btn">
        Get University List
      </button>

      <div className="unilist-style">
        {/* Loop the results */}
        { universities.map((eachUni, key) => (
            <div key={key} className="unilist-container-style">
              {/* University Name */}
              <span>{key+1}.</span>
              <p>{eachUni.name}</p>
              {
                eachUni.web_pages.map((eachWebPage, key) => (
                  <a href={eachWebPage} target="_blank" rel="noreferrer">{eachWebPage}</a>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
