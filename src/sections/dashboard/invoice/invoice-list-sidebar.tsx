import type { ChangeEvent, FC, FormEvent } from 'react';
import { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import type { Theme } from '@mui/material';
import {
  Box,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  SvgIcon,
  Switch,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { InvoiceStatus } from 'src/types/invoice';

export interface Filters {
  query?: string;
  startDate?: Date;
  endDate?: Date;
  customers?: string[];
  status?: InvoiceStatus;
}

interface InvoiceListSidebarProps {
  container?: HTMLDivElement | null;
  filters?: Filters;
  group?: boolean;
  onFiltersChange?: (filters: Filters) => void;
  onClose?: () => void;
  onGroupChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  open?: boolean;
}

export const InvoiceListSidebar: FC<InvoiceListSidebarProps> = (props) => {
  const {
    container,
    filters = {},
    group,
    onClose,
    onFiltersChange,
    onGroupChange,
    open,
    ...other
  } = props;
  const queryRef = useRef<HTMLInputElement | null>(null);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const handleQueryChange = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      onFiltersChange?.({
        ...filters,
        query: queryRef.current?.value || ''
      });
    },
    [filters, onFiltersChange]
  );

  const handleStartDateChange = useCallback(
    (date: Date | null): void => {
      const newFilters: Filters = {
        ...filters,
        startDate: date || undefined
      };

      // Prevent end date to be before start date
      if (newFilters.endDate && date && date > newFilters.endDate) {
        newFilters.endDate = date;
      }

      onFiltersChange?.(newFilters);
    },
    [filters, onFiltersChange]
  );

  const handleEndDateChange = useCallback(
    (date: Date | null): void => {
      const newFilters: Filters = {
        ...filters,
        endDate: date || undefined
      };

      // Prevent start date to be after end date
      if (newFilters.startDate && date && date < newFilters.startDate) {
        newFilters.startDate = date;
      }

      onFiltersChange?.(newFilters);
    },
    [filters, onFiltersChange]
  );

  const handleCustomerToggle = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      let customers: string[];

      if (event.target.checked) {
        customers = [
          ...(filters.customers || []),
          event.target.value
        ];

      } else {
        customers = (filters.customers || []).filter((customer) => customer !== event.target.value);
      }

      onFiltersChange?.({
        ...filters,
        customers: customers
      });
    },
    [filters, onFiltersChange]
  );

  const handleStatusChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      onFiltersChange?.({
        ...filters,
        status: event.target.checked ? 'paid' : undefined
      });
    },
    [filters, onFiltersChange]
  );

  const content = (
    <div>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        direction="row"
        sx={{ p: 3 }}
      >
        <Typography variant="h5">
          Filters
        </Typography>
        {!lgUp && (
          <IconButton onClick={onClose}>
            <SvgIcon>
              <XIcon />
            </SvgIcon>
          </IconButton>
        )}
      </Stack>
      <Stack
        spacing={3}
        sx={{ p: 3 }}
      >
        <form onSubmit={handleQueryChange}>
          <OutlinedInput
            defaultValue=""
            fullWidth
            inputProps={{ ref: queryRef }}
            placeholder="Invoice number"
            startAdornment={(
              <InputAdornment position="start">
                <SvgIcon>
                  <SearchMdIcon />
                </SvgIcon>
              </InputAdornment>
            )}
          />
        </form>
        <div>
          <FormLabel
            sx={{
              display: 'block',
              mb: 2
            }}
          >
            Issue date
          </FormLabel>
          <Stack spacing={2}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              label="From"
              onChange={handleStartDateChange}
              renderInput={(inputProps) => <TextField {...inputProps} />}
              value={filters.startDate || null}
            />
            <DatePicker
              inputFormat="dd/MM/yyyy"
              label="To"
              onChange={handleEndDateChange}
              renderInput={(inputProps) => <TextField {...inputProps} />}
              value={filters.endDate || null}
            />
          </Stack>
        </div>
        <FormControlLabel
          control={(
            <Switch
              checked={filters.status === 'paid'}
              onChange={handleStatusChange}
            />
          )}
          label="Paid only"
        />
        <FormControlLabel
          control={(
            <Switch
              checked={group}
              onChange={onGroupChange}
            />
          )}
          label="Group by status"
        />
      </Stack>
    </div>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={open}
        PaperProps={{
          elevation: 16,
          sx: {
            border: 'none',
            borderRadius: 2.5,
            overflow: 'hidden',
            position: 'relative',
            width: 380
          }
        }}
        SlideProps={{ container }}
        variant="persistent"
        sx={{ p: 3 }}
        {...other}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      hideBackdrop
      ModalProps={{
        container,
        sx: {
          pointerEvents: 'none',
          position: 'absolute'
        }
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          maxWidth: '100%',
          width: 380,
          pointerEvents: 'auto',
          position: 'absolute'
        }
      }}
      SlideProps={{ container }}
      variant="temporary"
      {...other}
    >
      {content}
    </Drawer>
  );
};

InvoiceListSidebar.propTypes = {
  container: PropTypes.any,
  // @ts-ignore
  filters: PropTypes.object,
  onClose: PropTypes.func,
  onFiltersChange: PropTypes.func,
  open: PropTypes.bool
};
