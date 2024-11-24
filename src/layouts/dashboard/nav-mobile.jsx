import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import {useTheme} from "@mui/material/styles";
import Drawer, { drawerClasses } from '@mui/material/Drawer';

import { usePathname } from 'src/routes/hooks';

import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';
import { NavSectionVertical } from 'src/components/nav-section';

import { NavUpgrade } from '../components/nav-upgrade';

// ----------------------------------------------------------------------

export function NavMobile({ data, open, onClose, slots, sx, ...other }) {
  const pathname = usePathname();
  const theme = useTheme();
  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          overflow: 'unset',
          bgcolor: 'var(--layout-nav-bg)',
          width: 'var(--layout-nav-mobile-width)',
          // display:'grid',
          // alignItems:'center',
          // justifyContent:'center',
          ...sx,
        },
      }}
    >
      {slots?.topArea ?? (
        <>
          <Box sx={{height:'25%',transform:'translateX(25%) translateY(15%)', pl: 3.5, pt: 2.5, pb: 1 }}>
            <Logo />
          </Box>
          <Divider orientation="vertical" flexItem sx={{
            margin: '0 auto',
            width: '80%',
            height: 2,
            backgroundColor: theme.palette.text.primary,
            my: 'auto',
          }}/>
        </>
      )}
      <Scrollbar mt={2} fillContent>
        <NavSectionVertical data={data}  sx={{ px: 2, flex: '1 1 auto' }} {...other} />
        <NavUpgrade />
      </Scrollbar>

      {slots?.bottomArea}
    </Drawer>
  );
}
