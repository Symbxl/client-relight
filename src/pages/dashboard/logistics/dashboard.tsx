import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { useSettings } from 'src/hooks/use-settings';
import { LogisticsDeviatedVehicles } from 'src/sections/dashboard/logistics/logistics-deviated-vehicles';
import { LogisticsErrorVehicles } from 'src/sections/dashboard/logistics/logistics-error-vehicles';
import { LogisticsLateVehicles } from 'src/sections/dashboard/logistics/logistics-late-vehicles';
import { LogisticsRouteVehicles } from 'src/sections/dashboard/logistics/logistics-route-vehicles';
import { LogisticsVehiclesCondition } from 'src/sections/dashboard/logistics/logistics-vehicles-condition';
import { LogisticsVehiclesList } from 'src/sections/dashboard/logistics/logistics-vehicles-list';
import { LogisticsVehiclesOverview } from 'src/sections/dashboard/logistics/logistics-vehicles-overview';
import type { Page as PageType } from 'src/types/page';

const Page: PageType = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Logistics Dashboard" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            spacing={{
              xs: 3,
              lg: 4
            }}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <div>
                  <Typography variant="h4">
                    Logistics
                  </Typography>
                </div>
                <div>
                  <Stack
                    direction="row"
                    spacing={4}
                  >
                    <Button
                      variant="contained"
                      href="/dashboard/logistics/fleet"
                    >
                      View Vehicles
                    </Button>
                    <Button
                      startIcon={(
                        <SvgIcon>
                          <PlusIcon />
                        </SvgIcon>
                      )}
                      variant="contained"
                      href="/dashboard/logistics/fleet"
                    >
                      Add Vehicles
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsRouteVehicles amount={5} />
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsErrorVehicles amount={0} />
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsDeviatedVehicles amount={0} />
            </Grid>

            <Grid
              xs={12}
              lg={6}
            >
              <LogisticsVehiclesOverview
                chartSeries={[5, 0]}
                labels={['Available', 'Out of service']}
              />
            </Grid>
            <Grid
              xs={12}
              lg={6}
            >
              <LogisticsVehiclesCondition
                bad={0}
                excellent={5}
                good={0}
              />
            </Grid>
            <Grid xs={12}>
              <LogisticsVehiclesList
                vehicles={[
                  {
                    id: '2025 Ford F150',
                    endingRoute: 'issaquah WA',
                    startingRoute: 'Seattle, WA',
                    status: 'success',
                  },
                  {
                    id: '2025 Ford F150',
                    endingRoute: 'sammamish WA',
                    startingRoute: 'Seattle, WA',
                    status: 'success',
                  }, {
                    id: '2025 Ford F150',
                    endingRoute: 'seattle WA',
                    startingRoute: 'Seattle, WA',
                    status: 'success',
                  }, {
                    id: '2025 Ford F150',
                    endingRoute: 'alberta, CA',
                    startingRoute: 'Seattle, WA',
                    status: 'success',
                  }, {
                    id: '2025 Ford F150',
                    endingRoute: 'alberta, CA',
                    startingRoute: 'Seattle, WA',
                    status: 'success',
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Page;
