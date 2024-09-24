import type { FC } from 'react';
import PropTypes from 'prop-types';
import Settings04Icon from '@untitled-ui/icons-react/build/esm/Settings04';
import { Box, Button, Stack, SvgIcon, Typography } from '@mui/material';
import { useSettings } from 'src/hooks/use-settings';
import { Logo } from '../../../components/logo';

export const OverviewBanner: FC = (props) => {
  const { handleDrawerOpen } = useSettings();

  return (
    <Stack
      alignItems="center"
      direction={{
        xs: 'column',
        md: 'row'
      }}
      spacing={4}
      sx={{
        backgroundColor: (theme) => theme.palette.mode === 'dark'
          ? 'primary.darkest'
          : 'primary.lightest',
        borderRadius: 2.5,
        p: 4
      }}
      {...props}
    >
      <Box
        sx={{
          width: 40,
          '& img': {
            width: '100%'
          }
        }}
      >
        <Logo />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          color="primary.main"
          variant="overline"
        >
          Relight Exterior Lighting
        </Typography>
        <Typography
          color="text.primary"
          sx={{ mt: 2 }}
          variant="h6"
        >
          Manage finances, inventory, and customers!
        </Typography>
        <Typography
          color="text.primary"
          sx={{ mt: 1 }}
          variant="body1"
        >
          Update the color & theme below
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            color="primary"
            onClick={handleDrawerOpen}
            startIcon={(
              <SvgIcon>
                <Settings04Icon />
              </SvgIcon>
            )}
            variant="contained"
          >
            Open App Settings
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

OverviewBanner.propTypes = {
  onDismiss: PropTypes.func
};
