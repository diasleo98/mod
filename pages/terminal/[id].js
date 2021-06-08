import { useRouter } from "next/router";
import { useData } from "../../contexts/dataContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import MainHeader from "../../components/main-header";
import classes from "./[id].module.css";
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
  Card,
  MenuButton,
  CardText,
  TerminalNameDiv,
  TerminalName
} from "./_styled";
import { useCallback, useMemo, useState } from "react";

export default function Terminal() {
  const router = useRouter();
  const terminalId = router.query.id;
  console.log("id", terminalId)

  const { data, setData } = useData();
  const [filtered, setFiltered] = useState(data.filter(correctData));
//   const [filtered, setFiltered] = useState([
//     { id:1, name: "a", city: "curitiba", code: "12", priority: "HIGH", country:"Brasil", state:"Parana", region:"GT", extra: "escondido"},
//     { id:2, name: "b", city: "curitiba", code: "7", priority: "LOW", country:"EUA", state:"Parana", region:"GT" },
//     { id:3, name: "c", city: "curitiba", code: "657", priority: "MID", country:"IT", state:"Parana", region:"GT" }
//  ]);
  useCallback(function correctData(data) {
    return data.id == terminalId;
  }, [filtered]);

  function correctData(data) {
    return data.id == terminalId;
  }
  
  console.log("data", data);
  console.log("filtered", filtered);
  // setData()

  //console.log(router.query);
  function click() {
    console.log("meu clicked");
    router.push("../grid/leo");
  }
  return (
    <div>
      <Grid>
        <Header></Header>
        <NavBar>
          <TerminalNameDiv>
            <TerminalName>{filtered[0].name}</TerminalName>
          </TerminalNameDiv>
          <MenuButton>Site Operations</MenuButton>
          <MenuButton>Contacts</MenuButton>
          <MenuButton>Site Systems</MenuButton>
          <MenuButton>TAS</MenuButton>
        </NavBar>
        
        <Content>
          <h1>Site Operations</h1>
          <h2>Site Operations Manager</h2>
          <CardText>Leonardo Dias</CardText>
          <h2>Address</h2>
          <CardText>Terminal: {terminalId}</CardText>
          <CardText>Name: {filtered[0].name}</CardText>
          <CardText>Ciy: {filtered[0].city}</CardText>
          <CardText>Code: {filtered[0].code}</CardText>
          <CardText>Priority: {filtered[0].priority}</CardText>
          <CardText>Country: {filtered[0].country}</CardText>
          <CardText>State: {filtered[0].state}</CardText>
          <CardText>Region: {filtered[0].region}</CardText>
          
          
        </Content>
      </Grid>
    </div>
  );
}
// <section>
//     <MainHeader className={classes.header}></MainHeader>
//     <section className={classes.sidenav}>
//         <button onClick={click}>Site Operations</button>
//     </section>
//     <section className={classes.content}>
//         <div className={classes.item}>Terminal: {terminalId}</div>
//         <div>Name: {filtered[0].name}</div>
//         <div>City: {filtered[0].city}</div>
//         <div>Code: {filtered[0].code}</div>
//         <div>Priority: {filtered[0].priority}</div>
//         <div>Country: {filtered[0].country}</div>
//         <div>State: {filtered[0].state}</div>
//         <div>Region: {filtered[0].region}</div>
//     </section>
// </section>
