import type { FC } from 'react';
import { subHours, subMinutes } from 'date-fns';
import Users03Icon from '@untitled-ui/icons-react/build/esm/Users03';
import { IconButton, SvgIcon, Tooltip } from '@mui/material';
import { usePopover } from 'src/hooks/use-popover';
import { ContactsPopover } from './contacts-popover';

const now = new Date();

interface Contact {
  id: string;
  avatar: string;
  isActive: boolean;
  lastActivity?: number;
  name: string;
}

const useContacts = (): Contact[] => {
  return [
    {
      id: '0',
      avatar: '/assets/avatars/zach.png',
      isActive: true,
      lastActivity: now.getTime(),
      name: 'Zach Rahimi (425) 465 1290'
    },
    {
      id: '1',
      avatar: '/assets/avatars/avatar-carson-darrin.png',
      isActive: false,
      name: 'Taye Farrant (825) 973 7477'
    },
  ];
};

export const ContactsButton: FC = () => {
  const popover = usePopover<HTMLButtonElement>();
  const contacts = useContacts();

  return (
    <>
      <Tooltip title="Contacts">
        <IconButton
          onClick={popover.handleOpen}
          ref={popover.anchorRef}
        >
          <SvgIcon>
            <Users03Icon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <ContactsPopover
        anchorEl={popover.anchorRef.current}
        contacts={contacts}
        onClose={popover.handleClose}
        open={popover.open}
      />
    </>
  );
};
