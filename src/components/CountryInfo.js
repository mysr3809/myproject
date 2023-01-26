import React, { useState, useEffect } from 'react'

const CountryInfo = ({ countryData }) => {
  const [countryInfo, setCountryInfo] = useState([])
  const [flag, setFlag] = useState(false);

  if (countryData) {
    setCountryInfo(countryData)
    setFlag(true);
  }


  return (
    <div>
      <div>
        {countryInfo.length > 0 && (<div><h2>{countryInfo[0].area}</h2>
          <img src={countryInfo[0].flags.png} alt="flag" />
          <h2>{countryInfo[0].altSpellings[2]}</h2></div>)}


      </div>

    </div>
  )
}

export default CountryInfo
