import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useData } from "../contexts/dataContext";
import {useRouter} from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';



const columns = [
  { field: 'terminalName', headerName: 'NAME', flex: 4 },
  { field: 'code', headerName: 'SITE CODE', type: 'number', flex: 1.5 },
  { field: 'priority', headerName: 'PRIORITY', flex: 2 },
  { field: 'city', headerName: 'CITY', flex: 2 },
  { field: 'country', headerName: 'COUNTRY', flex: 2 },
  { field: 'state', headerName: 'STATE', flex: 2 },
  { field: 'region', headerName: 'REGION', flex: 2 },

];

export default function DataTable(props) {
    const { data, setData, loading } = useData();
    const rows = data;
  
    const router = useRouter();
    function click(params){
        console.log("click", params);
        router.push("/terminal/" + params.id + "/");
    }
    
    
    return (
        <div style={{ height: "75vh", width: '100%' }}>
      <DataGrid loading={loading} stickyHeader onRowClick={click} rows={props.source} columns={columns} pageSize={100}></DataGrid>
      {/* {loading && 
        <CircularProgress/>
      }
      {loading ?  
        <CircularProgress/> : 
        <label>OIE</label>
      } */}
    </div>
  );
}