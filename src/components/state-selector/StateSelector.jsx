import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';

const StateSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentState, setCurrentState] = useState('پیش نویس');

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleBreadcrumbClick = (state) => {
        setCurrentState(state);
        handlePopoverClose();
    };

    const states = ['پیش نویس', 'در انتظار تایید', 'تایید شده'];

    const getNextState = (state) => {
        const index = states.indexOf(state);
        return index < states.length - 1 ? states[index + 1] : null;
    };

    const getPrevState = (state) => {
        const index = states.indexOf(state);
        return index > 0 ? states[index - 1] : null;
    };

    const nextState = getNextState(currentState);
    const prevState = getPrevState(currentState);

  // Determine which states to show
  const showStates = (currentState === 'پیش نویس')
    ? [currentState, nextState]
    : (currentState === 'تایید شده')
      ? [prevState, currentState]
      : [prevState, currentState, nextState];

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ flexGrow: 1, pl: 3 , display:'flex',justifyContent:'flex-end'}}>
      <Button
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        size="medium"
        sx={{
          bgcolor: currentState === 'تایید شده' ? 'green' : currentState === 'در انتظار تایید' ? 'orange' : 'grey',
          color: 'white',
          fontWeight: 'normal'
        }}
      >
        {currentState}
      </Button>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'auto',
        }}
        open={open}
        onMouseLeave={handlePopoverClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
      >
        <Box sx={{ p: 2 }} onMouseLeave={handlePopoverClose}>
          <Breadcrumbs aria-label="breadcrumb" separator='>'>
            {showStates.map(state => (
              <Button
                key={state}
                sx={currentState === state ? {
                  backgroundColor: state === 'تایید شده' ? 'green' : state === 'در انتظار تایید' ? 'orange' : 'grey',
                  color: 'white'
                } : { color: state === 'تایید شده' ? 'green' : state === 'در انتظار تایید' ? 'orange' : 'grey' }}
                onClick={() => handleBreadcrumbClick(state)}
              >
                {state}
              </Button>
            ))}
          </Breadcrumbs>
        </Box>
      </Popover>
    </Box>
  );
};

export default StateSelector;
