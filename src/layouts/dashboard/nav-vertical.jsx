import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

import { varAlpha, hideScrollY } from 'src/theme/styles';

// import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';
import { NavSectionMini, NavSectionVertical } from 'src/components/nav-section';

// import { CONFIG } from "../../config-global";
import { NavUpgrade } from '../components/nav-upgrade';
import { NavToggleButton } from '../components/nav-toggle-button';

// ----------------------------------------------------------------------

export function NavVertical({ sx, data, slots, isNavMini, layoutQuery, onToggleNav, ...other }) {
  const theme = useTheme();
  const renderNavVertical = (
    <>
      {slots?.topArea ?? (
        <Box my={6} sx={{ alignSelf: 'center', pl: 3.5, pt: 2.5, pb: 1, alignItems: 'center' }}>
          <SvgIcon sx={{ width: 100, height: 100 }}>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <circle cx="16" cy="16" r="16" fill="#0576B4" />

                <g fill="#FFF">
                  <path d="M24.668 18.863l-1.059-.663 2.31-.027.048-.026v.025l.954-.01-1.619 2.634-.145-1.27-7.364 4.063L15 19.86l-7.83 4.126v-.94l8.073-4.253 2.792 3.729 6.634-3.659zm-10.112-.905l-3.06 1.611V8.644h3.06v9.314zm8.653.481l-3.06 1.7V8.644h3.06v9.795z" />

                  <path
                    d="M18.883 20.843l-.657.364-2.404-3.21V9.894h3.06v10.949zm-8.654-.607l-3.06 1.612V11.312h3.06v8.924z"
                    opacity=".5"
                  />
                </g>
              </g>
            </svg>
          </SvgIcon>
        </Box>
      )}
      <Divider sx={{ margin: '0 auto', width: '80%' }} />
      <Scrollbar mt={2} fillContent>
        <NavSectionVertical data={data} sx={{ px: 2, flex: '1 1 auto' }} {...other} />

        {slots?.bottomArea ?? <NavUpgrade />}
      </Scrollbar>
    </>
  );

  const renderNavMini = (
    <>
      {slots?.topArea ?? (
        <>
          <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'center', py: 2.5 }}>
            <SvgIcon sx={{ width: 50, height: 50 }}>
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <circle cx="16" cy="16" r="16" fill="#0576B4" />

                  <g fill="#FFF">
                    <path d="M24.668 18.863l-1.059-.663 2.31-.027.048-.026v.025l.954-.01-1.619 2.634-.145-1.27-7.364 4.063L15 19.86l-7.83 4.126v-.94l8.073-4.253 2.792 3.729 6.634-3.659zm-10.112-.905l-3.06 1.611V8.644h3.06v9.314zm8.653.481l-3.06 1.7V8.644h3.06v9.795z" />

                    <path
                      d="M18.883 20.843l-.657.364-2.404-3.21V9.894h3.06v10.949zm-8.654-.607l-3.06 1.612V11.312h3.06v8.924z"
                      opacity=".5"
                    />
                  </g>
                </g>
              </svg>
            </SvgIcon>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              margin: '0 auto',
              width: '80%',
              height: 2,
              backgroundColor: theme.palette.text.primary,
              my: 'auto',
            }}
          />
        </>
      )}

      <NavSectionMini
        data={data}
        sx={{ pb: 2, px: 0.5, ...hideScrollY, flex: '1 1 auto', overflowY: 'auto' }}
        {...other}
      />

      {slots?.bottomArea}
    </>
  );

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        height: 1,
        display: 'none',
        position: 'fixed',
        flexDirection: 'column',
        bgcolor: 'var(--layout-nav-bg)',
        zIndex: 'var(--layout-nav-zIndex)',
        width: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
        borderRight: `1px solid var(--layout-nav-border-color, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)})`,
        transition: theme.transitions.create(['width'], {
          easing: 'var(--layout-transition-easing)',
          duration: 'var(--layout-transition-duration)',
        }),
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'flex',
        },
        ...sx,
      }}
    >
      <NavToggleButton
        isNavMini={isNavMini}
        onClick={onToggleNav}
        sx={{
          display: 'none',
          [theme.breakpoints.up(layoutQuery)]: {
            display: 'inline-flex',
          },
        }}
      />
      {isNavMini ? renderNavMini : renderNavVertical}
    </Box>
  );
}
