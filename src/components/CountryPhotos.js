import React, { useEffect, useState } from 'react';
import "./CountryPhotos.css";
import Carousel from 'react-bootstrap/Carousel';

const CountryPhotos = ({ countryName }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, [countryName]);

  const getPhotos = async () => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${countryName}&client_id=${process.env.REACT_APP_UNSPLASH_KEY} `)
    const data = await response.json();
    setPhotos(data.results);
  }

  return (
    <div>
      <Carousel>
        {photos.map((photo, index) => {
          return <Carousel.Item className='carouselInner' key={index}>
            <img
              className="d-block "
              src={photo.urls.regular}
              alt="First slide"
            />
          </Carousel.Item >
        })}
      </Carousel>
    </div>
  )
}

export default CountryPhotos
