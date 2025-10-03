import React from 'react';
import { Container, Typography, Box, AppBar, Toolbar } from '@mui/material';

export default function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Team Collaboration Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Typography variant="body1">Frontend scaffold is live.</Typography>
      </Container>
    </Box>
  );
}
