import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Home from '@mui/icons-material/Home';
import { AddCircle } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import { Divider } from '@mui/material';

export default function BottomNav() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 1, position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction component={Link} to="/lectures" label="Home" icon={<Home />} />
        <Divider orientation="vertical" flexItem />
        <BottomNavigationAction component={Link} to="/add-lecture"label="Add Lecture" icon={<AddCircle />} />
        <Divider orientation="vertical" flexItem />
        <BottomNavigationAction component={Link} to="/account"label="Account" icon={<AccountCircle />} />
      </BottomNavigation>
    </Box>
  );
}
