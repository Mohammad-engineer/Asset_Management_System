import { m } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { useTranslate } from 'src/locales';

import { varHover } from 'src/components/animate';
import { FlagIcon } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';
import { RTL } from 'src/theme/with-settings/right-to-left';

// ----------------------------------------------------------------------

export function LanguagePopover({ data = [], sx, ...other }) {
  const popover = usePopover();

  const { onChangeLang, currentLang } = useTranslate();

  const [locale, setLocale] = useState(data[0].value);

  const currentLanguage = data.find((lang) => lang.value === locale);

  const handleChangeLang = useCallback(
    (newLang) => {
      onChangeLang(newLang);
      popover.onClose();
    },
    [onChangeLang, popover]
  );

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          p: 0,
          width: 40,
          height: 40,
          ...(popover.open && { bgcolor: 'action.selected' }),
          ...sx,
        }}
        {...other}
      >
        <FlagIcon code={currentLang?.countryCode} />
      </IconButton>
    <RTL direction={currentLang.value === "fa" ? 'rtl' : 'ltr'}></RTL>
      <CustomPopover open={popover.open} anchorEl={popover.anchorEl} onClose={popover.onClose}>
        <MenuList sx={{ width: 160, minHeight: 72 }}>
          {data?.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang?.value}
              onClick={() => handleChangeLang(option.value)}
            >
              <FlagIcon code={option.countryCode} />
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </CustomPopover>
    </>
  );
}

export function FinanceYearPopover({ data = [], sx, ...other }) {
  const popover = usePopover();

  const [year, setYear] = useState(data[0].value);

  const current_financeYear = data.find((data) => data.value === year);

  const handleChangefy = useCallback(
    (financeYear) => {
      setYear(financeYear);
      popover.onClose();
    },
    [popover]
  );

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        title={year?.title}
        sx={{
          p: 0,
          width: 40,
          height: 40,
          ...(popover.open && { bgcolor: 'action.selected' }),
          ...sx,
        }}
        {...other}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3m-4-7v4M8 3v4m-4 4h12.5m4.5 4h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1"
          ></path>
        </svg>
      </IconButton>

      <CustomPopover open={popover.open} anchorEl={popover.anchorEl} onClose={popover.onClose}>
        <MenuList sx={{ width: 160, minHeight: 72 }}>
          {data?.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === current_financeYear?.value}
              onClick={() => handleChangefy(option.value)}
            >
              {option.title}
            </MenuItem>
          ))}
        </MenuList>
      </CustomPopover>
    </>
  );
}
