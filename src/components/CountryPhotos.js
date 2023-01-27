import React, { useEffect, useState } from 'react';
import "./CountryPhotos.css";
import Carousel from 'react-bootstrap/Carousel';
const CountryPhotos = ({ inputValue }) => {
  const [photos, setPhotos] = useState([]);


  useEffect(() => {
    getPhotos();
    console.log(photos);
  }, [inputValue]);

  const getPhotos = async () => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${inputValue}&client_id=${process.env.REACT_APP_UNSPLASH_KEY} `)
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
        {/* <Carousel.Item className='carouselInner'>
        <Carousel.Caption>
            <h4>Photos All Around The World</h4>
          </Carousel.Caption>
          <img
            className="d-block "
            src="https://picsum.photos/200"
            alt="Second slide"
          />
        </Carousel.Item >
        <Carousel.Item className='carouselInner'>
          <img
            className="d-block"
            src="https://picsum.photos/200"
            alt="Third slide"
          />
        </Carousel.Item> */}
      </Carousel>
    </div>
  )
}

export default CountryPhotos
