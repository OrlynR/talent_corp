import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Email"
        inputProps={{ 'aria-label': 'email' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SendIcon />
      </IconButton>
    </Paper>
  );
}