import type { FC } from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import { MdOutlinePattern } from "react-icons/md";
import { PiCirclesThreeDuotone } from "react-icons/pi";
import { MdPhoneIphone } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaHammer } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { Box, Typography, Stack } from '@mui/material';
import { Container } from '@mui/system';

const data = [
  { id: 1, imageDark: <VisibilityOffIcon />, imageLight: <VisibilityOffIcon />, title: "Discreet from the street.", description: "Installed under eaves and behind trim, JellyFish Lighting blends with a matching track color. Wires are enclosed in this track with attic jumps and no exterior power supplies, ensuring a nearly invisible look from the street." },
  { id: 2, imageDark: <AppShortcutIcon />, imageLight: <AppShortcutIcon />, title: "Customize your lighting to perfection", description: "Command each light individually, effortlessly curating the perfect ambiance for your home. Precisely design colors, including a myriad of whites, to create a personalized, sophisticated atmosphere." },
  { id: 3, imageDark: <MdOutlinePattern />, imageLight: <MdOutlinePattern />, title: "Get creative with patterns.", description: "Select from over 16 million colors, crafting dynamic patterns with 20 unique movements and effects. Choose from 102 preset patterns inspired by customer recommendations for a mesmerizing lighting experience." },
  { id: 4, imageDark: <PiCirclesThreeDuotone />, imageLight: <PiCirclesThreeDuotone />, title: "Introducing zoning", description: "Redefine your space with the ability to selectively illuminate specific sections. Whether it's the front or back of your home, control each section independently, transforming your environment with distinct lighting schemes." },
  { id: 5, imageDark: <MdPhoneIphone />, imageLight: <LuLeaf />, title: "An app built for your smart home.", description: "Integrate your JellyFish app with Alexa, Google Home, and Control4, putting control in your hands from anywhere. Tailor your lighting experience to work with the systems you already know." },
  { id: 6, imageDark: <SlCalender />, imageLight: <SlCalender />, title: "Your schedule, perfectly timed.", description: "Save nightly, weekly, holiday, and special event schedules effortlessly, allowing your Jellyfish Lighting to adapt to your lifestyle." },
  { id: 7, imageDark: <FaHammer />, imageLight: <FaHammer />, title: "Powered by quality.", description: "Our lighting manufactures and develops our patented lights and app in-house to ensure the highest quality product." },
  { id: 8, imageDark: <LuLeaf />, imageLight: <LuLeaf />, title: "Bright & energy efficient.", description: "Using less than one watt per light at the brightest white and fully dimmable, experience brightness without compromising on energy efficiency." },
];

export default function HomeInfo() {
  const theme = useTheme();
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const feature = data[activeFeature];
  const image = theme.palette.mode === 'dark' ? feature?.imageDark : feature?.imageLight;

  return (
    <Box
      sx={{
        backgroundColor: 'neutral.800',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        color: 'neutral.100',
        py: '120px'
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          spacing={2}
          sx={{ mb: 8 }}
        >
          <Typography
            align="center"
            color="inherit"
            variant="h3"
          >
            Next-Level Lighting
          </Typography>
          <Typography
            align="center"
            color="inherit"
            variant="subtitle2"
          >
            Immerse yourself in the future of lighting with our state-of-the-art LED fixtures, meticulously a for optimal brightness and energy efficiency.

          </Typography>
        </Stack>
        {data.map((feature, index) => {
          const isActive = index === activeFeature;
          const image = theme.palette.mode === 'dark' ? feature.imageDark : feature.imageLight;
          const color = theme.palette.mode === 'dark' ? "common.black" : "common.white";

          return (
            <Box
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              sx={{
                width: "500px",
                borderRadius: 2.5,
                color: 'neutral.400',
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
                  color: 'common.white'
                }),
                '&:hover': {
                  ...(!isActive && {
                    backgroundColor: 'primary.alpha4',
                    boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
                    color: 'common.white'
                  })
                }
              }}
            >
              <Typography
                color="inherit"
                sx={{ mb: 1 }}
                variant="h6"
              >
                <Box component="span" sx={{ padding: "1rem" }}>{image}</Box>
                {feature.title}
              </Typography>
              <Typography
                color="inherit"
                variant="body2"
              >
                {feature.description}
              </Typography>
            </Box>
          );
        })}
      </Container>
    </Box >
  );
}
