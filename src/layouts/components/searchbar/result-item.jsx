import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { varAlpha } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

export function ResultItem({ title, path, groupLabel, onClickItem }) {

  const translate = useTranslate();

  return (
    <ListItemButton
      onClick={onClickItem}
      sx={{
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'transparent',
        borderBottomColor: (theme) => theme.vars.palette.divider,
        '&:hover': {
          borderRadius: 1,
          borderColor: (theme) => theme.vars.palette.primary.main,
          backgroundColor: (theme) =>
            varAlpha(
              theme.vars.palette.primary.mainChannel,
              theme.vars.palette.action.hoverOpacity
            ),
        },
      }}
    >
      <ListItemText
        primaryTypographyProps={{ typography: 'subtitle2', sx: { textTransform: 'capitalize' } }}
        secondaryTypographyProps={{ typography: 'caption', noWrap: true }}
        primary={title.map((part, index) => {

          const partText = part.text.slice(5, part.text.length)

          return(
            <Box
            key={index}
            component="span"
            sx={{ color: part.highlight ? 'primary.main' : 'text.primary' }}
            >
            {translate.t(partText)}
          </Box>
        );
        })
      }
        secondary={path.map((part, index) => (
          <Box
            key={index}
            component="span"
            sx={{ color: part.highlight ? 'primary.main' : 'text.secondary' }}
          >
            {part.text}
          </Box>
        ))}
      />

      {groupLabel && <Label color="info">{groupLabel}</Label>}
    </ListItemButton>
  );
}
