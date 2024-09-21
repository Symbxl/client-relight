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
    question: 'Q1 ?',
    answer: 'A1'
  },
  {
    question: 'Q2 ',
    answer: 'A2'
  },
  {
    question: 'Q3?',
    answer: 'A3'
  },
  {
    question: 'Q4?',
    answer: 'A4'
  },
  {
    question: 'Q5?',
    answer: 'A5.'
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
