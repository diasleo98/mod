import { useCallback, useState, useEffect } from 'react';
import { useData } from "../contexts/dataContext";
import Head from "next/head";
import Image from "next/image";
import MainHeader from "../components/main-header";
import SearchMOD from "../components/search"
import MainTable from "../components/main-table"
import styles from "../styles/Home.module.css";
//import {useData} from '../contexts/dataContext'
import Button from '@material-ui/core/Button';
import DataTable from '../components/dataTable';
import { Grid, Header, Search, Table, Loader } from "./_styled";
import Link from 'next/link';



export default function Home(props) {
  
  const { data, setData, loading, setLoading } = useData([]);
  const [sourceData, setSourceData] = useState([]);

  useEffect(async ()=> {
    setLoading(true);
    setSourceData(props.data);
    setData(props.data);
    setLoading(false);
  //   var source = [];
  //   if(data.length > 0){
  //     setSourceData(data);
  //     source = data;
  //   }

  //   while(source.length == 0){
  //       setLoading(true);
  //       const response = await fetch('http://localhost:3000/api/all');
  //       const jsonResult = await response.json();
  //       console.log(jsonResult);
  //       source = jsonResult.map((event) => ({
  //         id : event.ID, 
  //         terminalName: event.terminalName, 
  //         code: event.siteCode, 
  //         priority: event.terminalFocus, 
  //         city: event.city, 
  //         country: event.country, 
  //         state: event.region, 
  //         region : event.region, 
  //         manager: event.siteManager,
  //         ma1: event.address1,
  //         ma2: event.address2,
  //         zip: event.terminalZip,
  //         sa1: event.shippingAddress1,
  //         sa2: event.shippingAddress2,
  //         szip: event.shippingZip,
  //         scity: event.shippingCity,
  //         status: event.status,
  //         coRef: event.coLocatedRef,
  //         ownership: event.ownership,
  //         runBy: event.runBy,
  //         function: event.function,
  //         tz: event.terminalTimeZone,
  //         language: event.terminalLanguage,
  //         phone: event.emergencyPhone,
  //         comments: event.comments,
  //         url: event.url,
  //         attachments: event.Attachments,
          
  //         }));
  //       }
  //         setData(source);
  //         setSourceData(source);
  //         setLoading(false);

  //       console.log("sourceData", sourceData);
  //       console.log("data", data);
        }
    
        ,[])
        
  // const [filterSelected, setFilter] = useState("name");  
  
  // console.log("filterDefined", filterSelected);
  
  function rs(event){
    console.log(event.target.value);
    var filtered = data.filter(correctData);
    setSourceData(filtered);
    console.log('new data', sourceData);
    if(event.target.value == "" || event.target.value == undefined){
      setSourceData(data);
      console.log("redefined", sourceData);
    }
    function correctData(data, eq) {
      console.log(filterSelected);
      if(filterSelected == "name"){
        console.log(event.target.value.toLowerCase());
        return data.terminalName.toLowerCase().includes(event.target.value.toLowerCase());
      }
      else if(filterSelected == "sitecode"){
        console.log("code");
        return data.code.toLowerCase().includes(event.target.value.toLowerCase());
        
      }
      else if(filterSelected == "city"){
        console.log("city");
        return data.city.toLowerCase().includes(event.target.value.toLowerCase());
        
      }
      else if(filterSelected == "country"){
        console.log("country");
        return data.country.toLowerCase().includes(event.target.value.toLowerCase());
        
      }
      else if(filterSelected == "region"){
        console.log("region");
        return data.region.toLowerCase().includes(event.target.value.toLowerCase());
        
      }
    
  }
  
  }
  function select(props){
    
    console.log('selected', props.target.value);
    setFilter(props.target.value);
    console.log("filter", filterSelected);
}

  
  return (
    <div>
      <Grid>
        <MainHeader></MainHeader>
        <Search refreshSearch={rs} onChange={select}></Search>
        <Table source={sourceData}></Table>
      </Grid>
    </div>
  );
}
export async function getStaticProps(context) {
  const response = await fetch('http://localhost:3000/api/all');
        const jsonResult = await response.json();
        console.log("API REQUEST");
        var source = jsonResult.map((event) => ({
          id : event.ID, 
          terminalName: event.terminalName, 
          code: event.siteCode, 
          priority: event.terminalFocus, 
          city: event.city, 
          country: event.country, 
          state: event.region, 
          region : event.region, 
          manager: event.siteManager,
          ma1: event.address1,
          ma2: event.address2,
          zip: event.terminalZip,
          sa1: event.shippingAddress1,
          sa2: event.shippingAddress2,
          szip: event.shippingZip,
          scity: event.shippingCity,
          status: event.status,
          coRef: event.coLocatedRef,
          ownership: event.ownership,
          runBy: event.runBy,
          function: event.function,
          tz: event.terminalTimeZone,
          language: event.terminalLanguage,
          phone: event.emergencyPhone,
          comments: event.comments,
          url: event.url,
          attachments: event.Attachments,
          
          }));
  return {
    props: {data: source}, // will be passed to the page component as props
  }
}
