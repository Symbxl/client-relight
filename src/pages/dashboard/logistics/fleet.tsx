import { useCallback, useRef, useState } from 'react';
import type { Theme } from '@mui/material';
import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import { Seo } from 'src/components/seo';
import { LogisticsFleetDrawer } from 'src/sections/dashboard/logistics/logistics-fleet-drawer';
import { LogisticsFleetList } from 'src/sections/dashboard/logistics/logistics-fleet-list';
import { LogisticsFleetMap } from 'src/sections/dashboard/logistics/logistics-fleet-map';
import { LogisticsFleetToolbar } from 'src/sections/dashboard/logistics/logistics-fleet-toolbar';
import type { Vehicle } from 'src/types/logistics';
import type { Page as PageType } from 'src/types/page';

const useVehicles = (): Vehicle[] => {
  return [
    {
      id: '2018 Ford F150',
      location: 'Grande Prarie, Alberta, CA',
      startedAt: 'Sep 01, 7:53 AM',
      departedAt: 'Sep 01, 8:02 AM',
      arrivedAt: 'Sep 01, 8:18 AM'
    },
    {
      id: 'VOL-653CD3',
      location: 'New York, NY, USA',
      startedAt: 'Sep 01, 8:21 AM',
      departedAt: 'Sep 01, 8:36 AM',
      arrivedAt: 'Sep 01, 9:54 AM'
    },
    {
      id: 'VOL-653CD4',
      location: 'New York, NY, USA',
      startedAt: 'Sep 01, 6:34 AM',
      departedAt: 'Sep 01, 7:41 AM',
      arrivedAt: 'Sep 01, 9:20 AM'
    }
  ];
};

const Page: PageType = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const vehicles = useVehicles();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [currentVehicleId, setCurrentVehicleId] = useState<string | undefined>(vehicles[0]?.id);

  const handleVehicleSelect = useCallback(
    (vehicleId: string): void => {
      setCurrentVehicleId(vehicleId);
    },
    []
  );

  const handleVehicleDeselect = useCallback(
    (): void => {
      setCurrentVehicleId(undefined);
    },
    []
  );

  const handleDrawerOpen = useCallback(
    (): void => {
      setOpenDrawer(true);
    },
    []
  );

  const handleDrawerClose = useCallback(
    (): void => {
      setOpenDrawer(false);
    },
    []
  );

  return (
    <>
      <Seo title="Dashboard: Logistics Fleet" />
      <Divider />
      <Box
        component="main"
        ref={rootRef}
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {mdUp && (
          <Box
            sx={{
              borderRightColor: 'divider',
              borderRightStyle: 'solid',
              borderRightWidth: 1,
              flex: '0 0 400px'
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h5">
                Fleet
              </Typography>
            </Box>
            <LogisticsFleetList
              currentVehicleId={currentVehicleId}
              onVehicleDeselect={handleVehicleDeselect}
              onVehicleSelect={handleVehicleSelect}
              vehicles={vehicles}
            />
          </Box>
        )}
        <Box
          sx={{
            flex: '1 1 auto',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {!mdUp && <LogisticsFleetToolbar onDrawerOpen={handleDrawerOpen} />}
          <LogisticsFleetMap
            currentVehicleId={currentVehicleId}
            onVehicleSelect={handleVehicleSelect}
            vehicles={vehicles}
          />
        </Box>
      </Box>
      {!mdUp && (
        <LogisticsFleetDrawer
          container={rootRef.current}
          onClose={handleDrawerClose}
          open={openDrawer}
        >
          <LogisticsFleetList
            currentVehicleId={currentVehicleId}
            onVehicleDeselect={handleVehicleDeselect}
            onVehicleSelect={handleVehicleSelect}
            vehicles={vehicles}
          />
        </LogisticsFleetDrawer>
      )}
    </>
  );
};

export default Page;
