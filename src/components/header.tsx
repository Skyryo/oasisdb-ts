import Link from "next/link";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  {
    toPage:"/",
    prefix:'マップから探す'
  }, 
  {
    toPage:"articles",
    prefix:'記事一覧'
  }, 
  {
    toPage:"about",
    prefix:'OASISデータベースとは'
  }
];

export default function ResponsiveAppBar() {

  return (
    <AppBar position="static" sx={{bgcolor:'#ECF0F1',color: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display:'flex' ,color: 'black'}}>
              {pages.map((page) => (
                <MenuItem key={page.toPage} >
                  <a href={page.toPage} >
                    {page.prefix}
                  </a> 
                </MenuItem>
              ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}