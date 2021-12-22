import "./App.css";
import { Grid } from "@material-ui/core";
import Details from "./Components/Details/Details";
import MainCard from "./Components/Details/Main/MainCard";
import useStyles from "./style";
function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MainCard />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Details title="Expence" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
