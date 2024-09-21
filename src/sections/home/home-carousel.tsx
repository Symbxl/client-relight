import React, { useState, useEffect } from 'react';
import { Card, CardMedia, Box } from '@mui/material';

const images = [
  'https://framerusercontent.com/images/wLje8qwBe008yFn2ia6gkCEMs.webp?scale-down-to=1024',
  'https://framerusercontent.com/images/wLje8qwBe008yFn2ia6gkCEMs.webp?scale-down-to=1024',
  'https://framerusercontent.com/images/wLje8qwBe008yFn2ia6gkCEMs.webp?scale-down-to=1024',
  'https://framerusercontent.com/images/wLje8qwBe008yFn2ia6gkCEMs.webp?scale-down-to=1024',
  'https://framerusercontent.com/images/wLje8qwBe008yFn2ia6gkCEMs.webp?scale-down-to=1024'
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };



  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', margin: 'auto', marginBottom: '1rem' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: 585,
          transition: 'transform 0.5s ease',
          transform: `translateX(-${(currentIndex - 1) * 33.333}%)`, // Adjust for centering the middle image
          flex: '0 0 100%',
          marginTop: '5rem'
        }}
      >
        {images?.map((image, index) => (
          <Card
            key={index}
            sx={{
              flex: '0 0 33.333%', // Show three cards at a time
              height: 550,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.5s ease',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
              zIndex: index === currentIndex ? 1 : 0,
              cursor: 'pointer', // Pointer cursor on hover
              margin: '0 0.5rem', // Spacing between cards
            }}
            onClick={() => handleClick(index)}
          >
            <CardMedia
              component="img"
              image={image}
              alt={`Slide ${index + 1}`}
              sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;