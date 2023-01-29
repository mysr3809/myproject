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



      </div>

    </div>
  )
}

export default CountryInfo
