import type { FC, FormEvent } from 'react';
import { useCallback } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

export const ContactForm: FC = () => {
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
    },
    []
  );

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          xs={12}
          sm={6}
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1
              }}
            >
              Full Name
            </FormLabel>
            <OutlinedInput
              name="name"
              required
            />
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1
              }}
            >
              Full Address
            </FormLabel>
            <OutlinedInput
              name="company"
              required
            />
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1
              }}
            >
              Email
            </FormLabel>
            <OutlinedInput
              name="email"
              type="email"
              required
            />
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1
              }}
            >
              Phone Number
            </FormLabel>
            <OutlinedInput
              name="phone"
              required
              type="tel"
            />
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3
        }}
      >
        <Button
          fullWidth
          size="large"
          variant="contained"
        >
          Let&apos;s Talk
        </Button>
      </Box>
      <Typography
        color="text.secondary"
        sx={{ mt: 3 }}
        variant="body2"
      >
        By submitting this, you agree to the
        {' '}
        <Link
          color="text.primary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Privacy Policy
        </Link>
        {' '}
        and
        {' '}
        <Link
          color="text.primary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Cookie Policy
        </Link>
        .
      </Typography>
    </form>
  );
};
