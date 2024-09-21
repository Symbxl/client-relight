import PhoneCard from "./PhoneCard";
import { Container, Typography, Box } from "@mui/material";
import '@fontsource/roboto';

interface Props {
  url?: string;
  title: string;
  subtitle: string;
}

export const PhoneContainer = ({ url, title, subtitle }: Props) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        color: 'common.white',
        borderRadius: '12px',
        margin: 2,
        maxWidth: '425px',
        textAlign: 'center',
        alignItems: 'center',
        width: '700px',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Roboto, Arial, sans-serif',
          fontWeight: 'bold',
          fontSize: '1.3rem',
          color: 'rgba(var(--foreground-rgb), 1)',
          lineHeight: 1.4,
          marginBottom: '1rem',
        }}
      >
        {title}&nbsp;
        <Box
          component="span"
          sx={{
            fontWeight: 'normal',
            color: 'rgba(var(--foreground-rgb), 0.7)',
            fontSize: '1.2rem',
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </Box>
      </Typography>

      <PhoneCard url={url} />
    </Container>
  );
};