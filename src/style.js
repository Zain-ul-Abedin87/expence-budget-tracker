import { makeStyles, ThemeProvider } from "@material-ui/core";

export default makeStyles((theme) => ({
  grid: {
    "&>*": {
      margin: theme.spacing(2),
    },
  },
}));
