import { useCallback, useState } from 'react';
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



export default function Home() {

  const { data, setData } = useData();
  // var { data, setData } = useContext(DataContext);
  // console.log(data);
  // setData(7);
  // console.log(data);
  var [sourceData, setSourceData] = useState(data);
  var [filterSelected, setFilter] = useState("name");
 
  console.log("defined", sourceData);
  console.log("filterDefined", filterSelected);
  // const handleClick = useCallback(() => {
  //   setData([{first:1},{sec:2}])
  //   console.log('dado', data)
  // }, [setData, data])

  // function teste() {
  //   setData(data + 1)
  //   console.log('recriado')
  // }
  //console.log(data);

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
        return data.name.toLowerCase().includes(event.target.value.toLowerCase());
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
      <MainHeader></MainHeader>
      <SearchMOD refreshSearch={rs} onChange={select}></SearchMOD>
      <DataTable source={sourceData}></DataTable>
      {/* <h1>{data[0].id}</h1> */}
      {/* <Button variant="outlined"color="primary" onClick={handleClick}>Aumentar</Button> */}
    </div>
  );
}
