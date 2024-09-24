import { addDays, subDays, subHours, subMinutes } from 'date-fns';
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
import { OverviewBanner } from 'src/sections/dashboard/overview/overview-banner';
import { OverviewEvents } from 'src/sections/dashboard/overview/overview-events';
import { OverviewTransactions } from 'src/sections/dashboard/overview/overview-transactions';
import type { Page as PageType } from 'src/types/page';
import { CryptoCurrentBalance } from '../../sections/dashboard/crypto/crypto-current-balance';

const now = new Date();

const Page: PageType = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Overview" />
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
            disableEqualOverflow
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
                    Overview
                  </Typography>
                </div>
                <div>
                  <Stack
                    direction="row"
                    spacing={4}
                  >
                    <Button
                      startIcon={(
                        <SvgIcon>
                          <PlusIcon />
                        </SvgIcon>
                      )}
                      variant="contained"
                      href="/dashboard/customers"
                    >
                      New Customer
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={7}
            >
              <OverviewBanner />
            </Grid>
            <CryptoCurrentBalance
              chartSeries={[150000, 1576000.81]}
              labels={['Inventory', 'Profit']}
            />
            <Grid
              xs={12}
              md={7}
            >
              <OverviewTransactions
                transactions={[
                  {
                    id: 'd46800328cd510a668253b45',
                    amount: 2500,
                    createdAt: now.getTime(),
                    currency: 'usd',
                    sender: 'Zach Rahimi',
                    status: 'on_hold',
                    type: 'receive'
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
