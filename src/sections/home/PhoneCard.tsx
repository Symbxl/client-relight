import React from 'react';
import { Box } from '@mui/material';

interface Props {
  img?: string;
  url?: string;
  small?: boolean;
}
const PhoneCard = ({ small, url }: Props) => {
  return (
    <Box
      sx={{
        width: '390px',
        height: small ? "300px" : "844px",
        borderRadius: '50px',
        backgroundColor: '#000',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '45px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={url}
          alt="iPhone Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '45px',
          }}
        />
      </Box>
      <Box
        sx={{
          width: '60px',
          height: '6px',
          borderRadius: '3px',
          backgroundColor: '#333',
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </Box>
  );
};

export default PhoneCard;