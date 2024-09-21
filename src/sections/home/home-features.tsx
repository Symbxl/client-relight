import type { FC } from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LinkExternal01Icon from '@untitled-ui/icons-react/build/esm/LinkExternal01';

interface Feature {
  id: string;
  title: string;
  description: string;
  imageDark: string;
  imageLight: string;
}

const features: Feature[] = [
  {
    id: 'Accent Lighting',
    title: 'Accent Lighting',
    description: 'All of the code follows MUI best practices, it’s written by our in-house team of experts.',
    imageDark: 'https://framerusercontent.com/images/syG1Lx8V7godxgeio5OukDhEkks.webp',
    imageLight: 'https://framerusercontent.com/images/syG1Lx8V7godxgeio5OukDhEkks.webp'
  },
  {
    id: 'Holiday Lighting',
    title: 'Holiday Lighting',
    description: 'We\'ve included the source Figma files to Plus & Extended licenses so you can get creative! Build layouts with confidence.',
    imageDark: 'https://framerusercontent.com/images/QgR67iGl7v2MqarT07ikjKa1hLE.webp?scale-down-to=512',
    imageLight: 'https://framerusercontent.com/images/QgR67iGl7v2MqarT07ikjKa1hLE.webp?scale-down-to=512'
  },
  {
    id: 'Security Lighting',
    title: 'Security Lighting',
    description: 'Each template is a well-structured CRA & Next.js project, giving you a codebase that’s productive and enjoyable to work in.',
    imageDark: 'https://framerusercontent.com/images/2tuUvfSINeF9nvtfJpAHgJnhHK8.webp?scale-down-to=512',
    imageLight: 'https://framerusercontent.com/images/2tuUvfSINeF9nvtfJpAHgJnhHK8.webp?scale-down-to=512'
  },
  {
    id: 'GameDay Lighting',
    title: 'GameDay Lighting',
    description: 'Everything is styled using global theme overrides, just open the theme file in your editor and change whatever you want.',
    imageDark: 'https://framerusercontent.com/images/ETVoKRP6J6fm6muP2Xs7J4WWKzU.webp?scale-down-to=512',
    imageLight: 'https://framerusercontent.com/images/ETVoKRP6J6fm6muP2Xs7J4WWKzU.webp?scale-down-to=512'
  },
];

export const HomeFeatures: FC = () => {
  const theme = useTheme();
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const feature = features[activeFeature];
  const image = theme.palette.mode === 'dark' ? feature?.imageDark : feature?.imageLight;

  return (
    <Box
      sx={{
        backgroundColor: 'inherit',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        color: 'inherit',
        py: '120px'
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          sx={{ mb: 8 }}
        >
          <Typography
            align="center"
            color="inherit"
            variant="h3"
          >
            Illuminate your home for every occasion!
          </Typography>
          <Typography
            align="center"
            color="inherit"
            variant="subtitle2"
          >
            The all-in-one outdoor lighting solution, perfect for Companies, Homeowners & HOAs
          </Typography>
        </Stack>
        <Grid
          alignItems="center"
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={2}>
              {features.map((feature, index) => {
                const isActive = activeFeature === index;

                return (
                  <Box
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    sx={{
                      borderRadius: 2.5,
                      color: 'inherit',
                      cursor: 'pointer',
                      p: 3,
                      transition: (theme) => theme.transitions.create(
                        ['background-color, box-shadow', 'color'],
                        {
                          easing: theme.transitions.easing.easeOut,
                          duration: theme.transitions.duration.enteringScreen
                        }
                      ),
                      ...(isActive && {
                        backgroundColor: 'primary.alpha12',
                        boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
                        color: 'inherit'
                      }),
                      '&:hover': {
                        ...(!isActive && {
                          backgroundColor: 'primary.alpha4',
                          boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
                        })
                      }
                    }}
                  >
                    <Typography
                      color="inherit"
                      sx={{ mb: 1 }}
                      variant="h6"
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      color="inherit"
                      variant="body2"
                    >
                      {feature.description}
                    </Typography>
                    {feature.id === 'More' && (
                      <Box sx={{ mt: 3 }}>
                        <Button
                          color="success"
                          component="a"
                          endIcon={(
                            <SvgIcon fontSize="small">
                              <LinkExternal01Icon />
                            </SvgIcon>
                          )}
                          href="https://www.figma.com/file/xrx6uDljzsWuDZiuz3ITCp/Devias-Kit-Pro-UI-6.0-Master"
                          size="small"
                          target="_blank"
                          variant="contained"
                        >
                          view more use cases
                        </Button>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Box
              sx={{
                '& img': {
                  width: '100%',
                  borderRadius: 2.5,
                }
              }}
            >
              <img src={image} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
