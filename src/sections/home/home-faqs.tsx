import type { FC } from 'react';
import { useState } from 'react';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  Collapse,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

interface FaqType {
  question: string;
  answer: string;
}

const faqs: FaqType[] = [
  {
    question: 'What is ReLight permanent outdoor lighting?',
    answer: 'ReLight offers a permanent outdoor lighting solution designed for year-round use, providing customizable and energy-efficient lighting for homes and businesses.'
  },
  {
    question: 'How durable is the ReLight system?',
    answer: 'ReLight systems are built to withstand harsh weather conditions, including rain, snow, and extreme temperatures. The materials used ensure longevity and reliability.'
  },
  {
    question: 'Can I control the lighting from my phone?',
    answer: 'Yes, ReLight comes with a user-friendly mobile app that allows you to control the lighting, set schedules, and choose different color themes right from your phone.'
  },
  {
    question: 'Is the installation process complicated?',
    answer: 'Not at all. ReLight’s installation is handled by trained professionals, ensuring a seamless process. Once installed, the system requires minimal maintenance.'
  },
  {
    question: 'Can I use the lights for special occasions?',
    answer: 'Absolutely. ReLight’s system allows for full customization, so you can adjust the lighting for holidays, parties, or any special event with just a few taps on the app.'
  }
];


interface FaqProps {
  answer: string;
  question: string;
}

const Faq: FC<FaqProps> = (props) => {
  const { answer, question } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <Stack
      onClick={() => setIsExpanded((prevState) => !prevState)}
      spacing={2}
      sx={{ cursor: 'pointer' }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="subtitle1">
          {question}
        </Typography>
        <SvgIcon>
          {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </SvgIcon>
      </Stack>
      <Collapse in={isExpanded}>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {answer}
        </Typography>
      </Collapse>
    </Stack>
  );
};

export const HomeFaqs: FC = () => {
  return (
    <Box sx={{ py: '120px' }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
        >
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={2}>
              <Typography variant="h3">
                Everything you need to know
              </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Frequently asked questions
              </Typography>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={4}>
              {faqs.map((faq, index) => (
                <Faq
                  key={index}
                  {...faq}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
