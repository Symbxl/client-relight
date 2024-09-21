import GoogleIcon from '@mui/icons-material/Google';
import { Container } from '@mui/material';
import { SiAmazonalexa } from "react-icons/si";
import { MdSettingsRemote } from "react-icons/md";
import { Box } from '@mui/system';

export default function Compatible() {

  const data = [
    { id: 1, name: "Google Home", logo: <GoogleIcon /> },
    { id: 2, name: "Amazon Alexa", logo: <SiAmazonalexa /> },
    { id: 3, name: "Control4", logo: <MdSettingsRemote /> },
  ];

  return (
    <Box>
      {data?.map((result) => (
        <Container
          key={result.id}
          sx={{
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            padding: '1rem',
            backgroundColor: 'rgba(var(--callout-rgb), 0.5)',
            borderRadius: 'var(--border-radius)',
            margin: 2,
            whiteSpace: 'nowrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
            {result.logo}
          </div>
          <div style={{ flexGrow: 1 }}>
            <h2 style={{ margin: 0 }}>{result.name}</h2>
          </div>
        </Container>
      ))}

    </Box>
  );
}