import type { FC } from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { PhoneContainer } from './PhoneContainer';
import Compatible from './AppCompatibility';
import { wrap } from 'module';
import Carousel from './home-carousel';
import PhoneCard from './PhoneCard';

export const HomeApp: FC = () => (
  <Box sx={{
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundImage: 'url("/assets/gradient-bg.svg")',
    pt: '120px',
  }}>
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Typography
          align="center"
          color="inherit"
          variant="h3"
        >
          Download Mobile App!
        </Typography>

      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Button
          component="a"
          href="https://apps.apple.com/us/app/jellyfish-designer-cloud/id1612868160"
          target="_blank"
          variant="contained"
        >
          Download Mobile IOS
        </Button>
        <Button
          component="a"
          href="https://play.google.com/store/apps/details?id=com.jellyfish_cloud&hl=en_US&pli=1"
          target="_blank"
          variant="contained"
        >
          Download Mobile Android
        </Button>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <PhoneCard url="https://framerusercontent.com/images/BzFcQ6E4kSLCxqDCW5lcozO5c.jpeg?scale-down-to=2048" />
      </Stack>

    </Container>
  </Box>
);
