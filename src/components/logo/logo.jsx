import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';
import {CONFIG} from "../../config-global";
import SvgIcon from "@mui/material/SvgIcon";

// ----------------------------------------------------------------------

export const Logo = forwardRef(
  ({ width = 60, height = 60, disableLink = false, className, href = '/', sx, ...other }, ref) => {
    const theme = useTheme();

    // const gradientId = useId();
    //
    // const PRIMARY_LIGHT = theme.vars.palette.primary.light;
    //
    // const PRIMARY_MAIN = theme.vars.palette.primary.main;
    //
    // const PRIMARY_DARK = theme.vars.palette.primary.dark;

    const logo = (
      <SvgIcon sx={{width: 100, height: 100}}>
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
    );

    return (
      <NoSsr
        fallback={
          <Box
            width={width}
            height={height}
            className={logoClasses.root.concat(className ? ` ${className}` : '')}
            sx={{
              flexShrink: 0,
              display: 'inline-flex',
              verticalAlign: 'middle',
              ...sx,
            }}
          />
        }
      >
        <Box
          ref={ref}
          component={RouterLink}
          href={href}
          width={width}
          height={height}
          className={logoClasses.root.concat(className ? ` ${className}` : '')}
          aria-label="logo"
          sx={{
            flexShrink: 0,
            display: 'inline-flex',
            verticalAlign: 'middle',
            ...(disableLink && { pointerEvents: 'none' }),
            ...sx,
          }}
          {...other}
        >
          {logo}
        </Box>
      </NoSsr>
    );
  }
);
