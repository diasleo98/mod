import { useRouter } from 'next/router'
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
  TerminalName,
  TextList
} from "./_styled";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GetTerminal } from "../../service/server";

function Page() {

  const router = useRouter();
  //const terminalId = router.query.id;
  const { data, setData, filtered, setFiltered } = useData();

  console.log("Id alert: " + router);
  var result = data.filter((data) => data.id == router.query.id);
  //setFiltered(result[0]);

    useEffect(async () => {
      if(Object.keys(filtered).length == 0){
        var source = await GetTerminal(2);
        setFiltered(source);
        console.log(filtered);
      }
      else{
        setFiltered(result[0])
      }
    }, [])

  
  
  // useEffect(async () => {
  //   console.log("aqui",filtered);
  //   if(filtered == undefined ){
  //     const response = await fetch(`http://localhost:3000/api/terminal/${router.query.id}`);
  //     const jsonResult = await response.json();
  //     console.log(jsonResult);
  //     source = jsonResult.map((event) => ({
  //       id : event.ID, 
  //       terminalName: event.terminalName, 
  //       code: event.siteCode, 
  //       priority: event.terminalFocus, 
  //       city: event.city, 
  //       country: event.country, 
  //       state: event.region, 
  //       region : event.region, 
  //       manager: event.siteManager,
  //       ma1: event.address1,
  //       ma2: event.address2,
  //       zip: event.terminalZip,
  //       sa1: event.shippingAddress1,
  //       sa2: event.shippingAddress2,
  //       szip: event.shippingZip,
  //       scity: event.shippingCity,
  //       status: event.status,
  //       coRef: event.coLocatedRef,
  //       ownership: event.ownership,
  //       runBy: event.runBy,
  //       function: event.function,
  //       tz: event.terminalTimeZone,
  //       language: event.terminalLanguage,
  //       phone: event.emergencyPhone,
  //       comments: event.comments,
  //       url: event.url,
  //       attachments: event.Attachments,
        
  //       }));
  //       filtered = source;
  //       }
        
  // }, [filtered]);
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
            <TerminalName>{filtered.terminalName}</TerminalName>
          </TerminalNameDiv>
          <MenuButton>Site Operations</MenuButton>
          <MenuButton>Contacts</MenuButton>
          <MenuButton>Site Systems</MenuButton>
          <MenuButton>TAS</MenuButton>
        </NavBar>
        
        <Content>
          <h1>Site Operations</h1>
          <h2>Site Operations Manager</h2>
          <CardText>{filtered.manager}</CardText>
          <h2>Mailing</h2>
          <TextList>
            <li>
              <CardText style={{fontWeight:"bold"}}>Mailing Address 1:</CardText>
              <CardText>{filtered.ma1}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Mailing Address 2:</CardText>
              <CardText>{filtered.ma2}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>ZIP Code:</CardText>
              <CardText>{filtered.zip}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>State/Prov.:</CardText>
              <CardText>{filtered.state}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Country:</CardText>
              <CardText>{filtered.country}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Region:</CardText>
              <CardText>{filtered.region}</CardText>
            </li>

          </TextList>
          <h2>Shipping</h2>
          <TextList>
            <li>
              <CardText style={{fontWeight:"bold"}}>Shipping Address 1:</CardText>
              <CardText>{filtered.sa1}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Shipping Address 2:</CardText>
              <CardText>{filtered.sa2}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Shipping ZIP Code:</CardText>
              <CardText>{filtered.szip}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Shipping Ciy:</CardText>
              <CardText>{filtered.scity}</CardText>
            </li>
          </TextList>
          <h2>Details</h2>
          <TextList>
          <TextList>
            <li>
              <CardText style={{fontWeight:"bold"}}>Status:</CardText>
              <CardText>{filtered.status}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Co-located:</CardText>
              {filtered.coRef &&
                <input type="checkbox" checked={true}></input>
              }
              {filtered.coRef == false &&
                <input type="checkbox" checked={false}></input>
              }
              
              
              
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Priority</CardText>
              <CardText>{filtered.priority}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Ownership:</CardText>
              <CardText>{filtered.ownership}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Run By:</CardText>
              <CardText>{filtered.runBy}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Function:</CardText>
              <CardText>{filtered.function}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Timezone:</CardText>
              <CardText>{filtered.tz}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Language:</CardText>
              <CardText>{filtered.language}</CardText>
            </li>
            <li>
              <CardText style={{fontWeight:"bold"}}>Site Phone:</CardText>
              <CardText>{filtered.phone}</CardText>
            </li>
          </TextList>
          </TextList>

           
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

export default Page