//import classes from "./leo.module.css";
import {
  Container,
  Titulo,
  Header,
  Botao,
  NavBar,
  Content,
  Content2,
  Coluna,
  Grid,
  Grid2,
  Card
} from "./_styled";
import MainHeader from "../../components/main-header";
import { Fragment, useState } from "react";
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Leo() {
  var [primary, setPrimary] = useState(true);
  function click() {
    setPrimary(!primary);
  }
  const classes = useStyles();
  return (<div>
    <Grid>
      <Header></Header>
      <Grid2>
        <Card>Texto</Card>
      </Grid2>
      <NavBar></NavBar>
      <Card color="blue">Texto</Card>
    </Grid>
    </div>
  );
  //
}
export default Leo;
