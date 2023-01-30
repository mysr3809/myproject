import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./getDetail.css";
import Button from '@mui/material/Button';


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
      <div className='detailHeader'>
        <h1>Travel Advice</h1>
        <Link to="/">
          <Button className='homeBtn' variant="contained">Go Home</Button>
        </Link>
      </div>
      <div className='detailContent'>
        {console.log(countryInfo[0])}
        {countryInfo.length > 0 &&
          (
            <ul>
              <li><span className='questions'>Country </span> : {countryInfo[0].name}</li>
              <li><span className='questions'>Travel Activity </span> : {countryInfo[0].advisory.sources_active}(point)/10</li>
              <li><span className='questions'>Travel Advice </span> : {countryInfo[0].advisory.message}</li>
              <li><span className='questions'>Travel Score </span> : {countryInfo[0].advisory.score}/5</li>
              <li><span className='questions'>Last Update </span> : {countryInfo[0].advisory.updated}</li>
              <Button className='moreDetailBtn' variant="contained"><a href={countryInfo[0].advisory.source} target="_blank" rel="noreferrer">See More Detail</a></Button>
            </ul>
          )
        }
      </div>
    </div >
  )
}

export default GetDetail
