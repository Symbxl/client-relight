import type { FC } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';

export const HomeCta: FC = () => (
  <Box
    sx={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundImage: 'url("/assets/gradient-bg.svg")',
      color: 'inherit',
      py: '120px'
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Typography
          align="center"
          color="inherit"
          variant="h3"
        >
          Professional Installation
        </Typography>
        <Typography
          align="center"
          color="inherit"
          variant="subtitle2"
        >
          Every home is serviced by the trained professionals to make sure you're lighting is perfect.
        </Typography>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Box
          sx={{
            '& img': {
              width: '100%',
              borderRadius: 2.5,
            }
          }}
        >
          <img src="https://framerusercontent.com/images/6C149iYRFXIpVognqz1kfkDI5E.webp?scale-down-to=1024" />
        </Box>
      </Stack>
    </Container>
  </Box>
);
