import {m} from 'framer-motion';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import SvgIcon from "@mui/material/SvgIcon";
import {useTheme} from "@mui/material/styles";

// ----------------------------------------------------------------------

export function AnimateAvatar({sx, slotProps, children, width = 40, ...other}) {
  const borderWidth = slotProps?.overlay?.border ?? 2;
  const theme = useTheme();

  const spacing = slotProps?.overlay?.spacing ?? 2;

  return (
    <Box
      sx={{
        width,
        height: width,
        flexShrink: 0,
        borderRadius: '50%',
        position: 'relative',
        alignItems: 'center',
        display: 'inline-flex',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <Avatar
        alt={slotProps?.avatar?.alt ?? 'My avtar'}
        src={slotProps?.avatar?.src}
        sx={{
          zIndex: 1,
          width: `calc(100% - ${borderWidth * 2 + spacing * 2}px)`,
          height: `calc(100% - ${borderWidth * 2 + spacing * 2}px)`,
          ...slotProps?.avatar?.sx,
        }}
        {...slotProps?.avatar}
      >
        <SvgIcon sx={{ width:"50%" ,height:"50%"}}>
          <svg fill={theme.palette.text.primary} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
               width="505" height="505">
            <path
              d="m63.3 75.4c0-35.6 28.8-64.4 64.5-64.4 35.6 0 64.4 28.8 64.4 64.4 0 25.3-14.5 47.1-35.7 57.7 46.6 12.7 81 55.4 81 105.9 0 2.9-2.4 5.3-5.3 5.3-2.8 0-5.3-2.2-5.3-5.3 0-54.8-44.5-99.2-99.1-99.2-54.8 0-99.2 44.6-99.2 99.2 0 2.9-2.3 5.3-5.3 5.3-3 0-5.3-2.2-5.3-5.3 0-50.5 34.4-93.2 81-105.9-21.2-10.6-35.7-32.4-35.7-57.7zm118.5 0c0-29.9-24.2-54-54-54-29.9 0-54.1 24.1-54.1 54 0 28.6 22.2 52 50.3 53.9q1.9 0 3.8 0 1.8 0 3.7 0c28.1-1.9 50.3-25.3 50.3-53.9z"/>
          </svg>
        </SvgIcon>
      </Avatar>

      <Box
        component={m.span}
        animate={{rotate: 360}}
        transition={{
          duration: 8,
          ease: 'linear',
          repeat: Infinity,
          ...slotProps?.animate?.transition,
        }}
        sx={{
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          position: 'absolute',
          borderRadius: 'inherit',
          background: slotProps?.overlay?.color ?? 'conic-gradient(cyan, magenta, yellow, cyan)',
          mask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)',
          WebkitMask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          p: `${borderWidth}px`,
        }}
      />
    </Box>
  );
}
