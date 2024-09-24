import type { FC } from 'react';
import PropTypes from 'prop-types';
import Truck02Icon from '@untitled-ui/icons-react/build/esm/Truck02';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  LinearProgress,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

interface Vehicle {
  id: string;
  endingRoute: string;
  startingRoute: string;
  status: 'success' | 'error' | 'warning';
  warning?: string;
}

interface LogisticsVehiclesListProps {
  vehicles: Vehicle[];
}

export const LogisticsVehiclesList: FC<LogisticsVehiclesListProps> = (props) => {
  const { vehicles } = props;

  return (
    <Card>
      <CardHeader
        title="On Route Vehicles"
        subheader="Condition and temperature"
      />
      <Scrollbar>
        <Box sx={{ minWidth: 1200 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Client Address
                </TableCell>
                <TableCell>
                  Vehicle Overview
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow
                  key={vehicle.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar sx={{ mr: 2 }}>
                        <SvgIcon>
                          <Truck02Icon />
                        </SvgIcon>
                      </Avatar>
                      <Typography variant="subtitle2">
                        {vehicle.id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {vehicle.endingRoute}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <SeverityPill color={vehicle.status}>
                      {vehicle.warning || 'No warnings'}
                    </SeverityPill>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>
  );
};

LogisticsVehiclesList.propTypes = {
  vehicles: PropTypes.array.isRequired
};
