import { subDays, subHours, subMinutes } from 'date-fns';
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { useSettings } from 'src/hooks/use-settings';
import { CryptoCards } from 'src/sections/dashboard/crypto/crypto-cards';
import { CryptoTransactions } from 'src/sections/dashboard/crypto/crypto-transactions';
import { CryptoCurrentBalance } from 'src/sections/dashboard/crypto/crypto-current-balance';
import type { Page as PageType } from 'src/types/page';

const now = new Date();

const Page: PageType = () => {
  const settings = useSettings();
  const theme = useTheme();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Crypto" />
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

                <Typography variant="h4">
                  Finances
                </Typography>


              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={5}
            >
              <CryptoCards
                cards={[
                  {
                    id: '79f8212e4245e4c11952f2cf',
                    brand: 'Mastercard',
                    cardNumber: '5823 4492 2385 1102',
                    expiryDate: '05/28',
                    holderName: 'Relight'
                  },
                ]}
              />
            </Grid>
            <Grid
              xs={12}
              md={5}
            >
              <CryptoCards
                cards={[
                  {
                    id: '79f8212e4245e4c11952f2cf',
                    brand: 'VISA',
                    cardNumber: '5823 4492 2385 1102',
                    expiryDate: '05/28',
                    holderName: 'Relight'
                  },
                ]}
              />
            </Grid>
            <Grid
              xs={12}
              md={8}
            >
              <Stack
                spacing={{
                  xs: 3,
                  lg: 4
                }}
              >
                <CryptoCurrentBalance
                  chartSeries={[150000, 1576000.81]}
                  labels={['Inventory', 'Profit']}
                />
                <CryptoCurrentBalance
                  chartSeries={[100000, 75000, 350000.81]}
                  labels={['Marketing', 'Inventory', 'Taxes']}
                />
                <CryptoTransactions
                  transactions={[
                    {
                      id: '6442793e96a90d4e584a19f7',
                      amount: 0.2105,
                      balance: 2344,
                      coin: 'BTC',
                      createdAt: subDays(subHours(subMinutes(now, 32), 54), 6).getTime(),
                      operation: 'sub',
                      title: 'Monthly Product Inventory'
                    },
                    {
                      id: '6442793e96a90d4e584a19f7',
                      amount: 0.2105,
                      balance: 2344,
                      coin: 'BTC',
                      createdAt: subDays(subHours(subMinutes(now, 32), 54), 6).getTime(),
                      operation: 'sub',
                      title: 'Monthly Marketing Campaigns'
                    },
                    {
                      id: '6442793e96a90d4e584a19f7',
                      amount: 0.2105,
                      balance: 2344,
                      coin: 'BTC',
                      createdAt: subDays(subHours(subMinutes(now, 32), 54), 6).getTime(),
                      operation: 'sub',
                      title: 'Bi-weekly Employee Salary'
                    }
                  ]}
                />
              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <Stack
                spacing={{
                  xs: 3,
                  lg: 4
                }}
              >
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Page;
