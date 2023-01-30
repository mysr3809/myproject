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
        {countryInfo !== null &&
          (
            <div>
              <h3>{countryInfo[0].name}</h3>
              <h3>{countryInfo[0].advisory.message}</h3>
              <h3>{countryInfo[0].name}</h3>
            </div>
          )
        }
      </div>
    </div >
  )
}

export default GetDetail
