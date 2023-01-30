import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./getDetail.css"


const GetDetail = () => {
  const { id } = useParams();
  const countryURL = `https://www.travel-advisory.info/api?countrycode=${id}`;
  const [countryInfo, setCountryInfo] = useState([]);


  const getDetail = async () => {
    try {
      const response = await fetch(countryURL);
      const data = await response.json();
      setCountryInfo(Object.values(Object.values(data)[1]));
      console.log("all", data);
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getDetail()
  }, []);


  return (
    <div className='detailBox'>
      <h2>Travel Advice</h2>

      <div className='detailContent'>
        {console.log(countryInfo[0])}
        {countryInfo.length > 0 &&
          (
            <ul>
              <li>Country: {countryInfo[0].name}</li>
              <li>Travel Activity: {countryInfo[0].advisory.sources_active}</li>
              <li>{countryInfo[0].name}</li>
              <li>Travel Advice: {countryInfo[0].advisory.message}</li>
              <li>Travel Risk: {countryInfo[0].advisory.score}</li>
            </ul>
          )
        }
      </div>
    </div >
  )
}

export default GetDetail
