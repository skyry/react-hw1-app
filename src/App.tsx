import React, { useState } from 'react'
import Button from './components/Button'

const App = () => {

  const images = [
    '/img/pic1.jpg',
    '/img/pic2.jpg',
    '/img/pic3.jpg',
    '/img/pic4.jpg',
    '/img/pic5.jpg',
  ];
  const [bg, setBg] = useState<string>("/img/pic1.jpg");
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  const randomPictures = () => {
    let randomIndex = Math.floor(Math.random() * images.length);

    if (images.length > 1) {
      while (randomIndex === prevIndex) {
        randomIndex = Math.floor(Math.random() * images.length);
      }
    }
    const imagePath = images[randomIndex];
    setBg(imagePath);
    setPrevIndex(randomIndex);
  };

  return (
    <div
      className="btn-background"
      style={bg ? { backgroundImage: `url(${bg})` } : {}}>

      <Button onClick={randomPictures}>Change background</Button>
    </div>
  );
}

export default App