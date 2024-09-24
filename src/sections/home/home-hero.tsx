import type { FC } from 'react';
import EyeIcon from '@untitled-ui/icons-react/build/esm/Eye';
import LayoutBottomIcon from '@untitled-ui/icons-react/build/esm/LayoutBottom';
import { Box, Button, Container, Rating, Stack, SvgIcon, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';
import { HomeCodeSamples } from './home-code-samples';

export const HomeHero: FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '120px'
      }}
    >
      <Container maxWidth="xl">
        <Box maxWidth="sm">
          <Typography
            variant="h1"
            sx={{ mb: 2, fontSize: "60px !important" }}
          >
            Live Brighter with&nbsp;
            <Typography
              component="span"
              color="primary.main"
              variant="inherit"
            >
              ReLight Exterior Lighting
            </Typography>
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 20,
              fontWeight: 500
            }}
          >
          </Typography>
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            spacing={1}
            sx={{ my: 3 }}
          >
            <Rating
              readOnly
              value={4.7}
              precision={0.1}
              max={5}
            />
            <Typography
              color="text.primary"
              variant="caption"
              sx={{ fontWeight: 700 }}
            >
              4.7/5
            </Typography>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              based on (100+ reviews)
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Button
              component={RouterLink}
              href={paths.contact}
              startIcon={(
                <SvgIcon fontSize="small">
                  <EyeIcon />
                </SvgIcon>
              )}
              sx={(theme) => theme.palette.mode === 'dark'
                ? {
                  backgroundColor: 'neutral.50',
                  color: 'neutral.900',
                  '&:hover': {
                    backgroundColor: 'neutral.200'
                  }
                }
                : {
                  backgroundColor: 'neutral.900',
                  color: 'neutral.50',
                  '&:hover': {
                    backgroundColor: 'neutral.700'
                  }
                }
              }
              variant="contained"
            >
              Get a quote
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            pt: '120px',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              width: '100%',
              fontSize: 0,
              mt: -2, // hack to cut the bottom box shadow
              mx: -2,
              pt: 2,
              px: 2,
              '& img': {
                borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2.5,
                borderTopRightRadius: (theme) => theme.shape.borderRadius * 2.5,
                boxShadow: 16,
                width: '100%'
              }
            }}
          >
            <video
              src="https://framerusercontent.com/assets/ft2iKY1K0qOfCpm8003q4eoJJc.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', borderRadius: "12px" }}
            />

          </Box>

        </Box>
      </Container >
    </Box >
  );
};