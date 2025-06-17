// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) => {
  const isLight = mode === "light";

  return createTheme({
    palette: {
      mode,
      background: {
        default: isLight ? "#f2f2f2" : "#2F312B",
        paper: isLight ? "#DDF6D2" : "#181C14",
        
      },
      text: {
        primary: isLight ? "#181C14" : "#f9f7f5",
        secondary: isLight ? "#2F312B" : "#E9DDCB",
      },
      custom: {
        primary:isLight?'#B0DB9C':'#2F312B',
        secondary:isLight?"#FFFDF6":'#2F312B'
      },
    },
    typography: {
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        color: isLight ? "#181C14" : "#E9DDCB",
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
        color: isLight ? "#2F312B" : "#E9DDCB",
      },
      subtitle1: {
        fontSize: "1rem",
        fontWeight: 700,
        color: isLight ? "#2F312B" : "#E9DDCB",
      },
      body1: {
        fontSize: "1rem",
        color: isLight ? "#181C14" : "#f9f7f5",
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: isLight?"black":"#fff",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
             borderColor: isLight?"black":"#fff",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
             borderColor: isLight?"black":"#fff",
            },
          },
        },
      },
    },
  });
};
