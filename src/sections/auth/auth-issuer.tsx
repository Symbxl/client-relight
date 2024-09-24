import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Stack, Tooltip, Typography } from '@mui/material';
import { paths } from 'src/paths';
import { Issuer } from 'src/utils/auth';

interface AuthPlatformProps {
  issuer: Issuer;
}

export const AuthIssuer: FC<AuthPlatformProps> = (props) => {
  const { issuer: currentIssuer } = props;

  return (
    <Box
      sx={{
        borderColor: 'divider',
        borderRadius: 2.5,
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3
      }}
    >
    </Box>
  );
};

AuthIssuer.propTypes = {
  // @ts-ignore
  issuer: PropTypes.string.isRequired
};
