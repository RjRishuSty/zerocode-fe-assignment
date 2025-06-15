// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => {
  const isLight = mode === 'light';

  return createTheme({
    palette: {
      mode,
      background: {
        default: isLight ? '#f9f7f5' : '#2F312B',
        paper: isLight ? '#e3f6f6' : '#181C14',
      },
      text: {
        primary: isLight ? '#181C14' : '#f9f7f5',
        secondary: isLight ? '#2F312B' : '#E9DDCB',
      },
      custom: {
        light1: '#d0e7e7',
        light2: '#d5ebeb',
        light3: '#e3f6f6',
        light4: '#f9f7f5',
        dark1: '#181C14',
        dark2: '#2F312B',
        dark3: '#596655',
        dark4: '#E9DDCB',
      }
    },
    typography: {
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: isLight ? '#181C14' : '#E9DDCB',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        color: isLight ? '#2F312B' : '#E9DDCB',
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 400,
        color: isLight ? '#2F312B' : '#E9DDCB',
      },
      body1: {
        fontSize: '1rem',
        color: isLight ? '#181C14' : '#f9f7f5',
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d0e7e7',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d0e7e7',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d0e7e7',
            },
          },
        },
      },
    },
  });
};
