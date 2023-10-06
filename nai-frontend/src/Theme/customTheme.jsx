import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      mxxs: 0,
      mxs: 500,
      lsm: 600,
      lmd: 900,
      molg: 1200,
      moxl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#F50022",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#47008F",
    },
  },
});

export default theme;
