import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useData } from "../contexts/dataContext";
import {useRouter} from 'next/router';



const columns = [
  { field: 'name', headerName: 'NAME', flex: 4 },
  { field: 'code', headerName: 'SITE CODE', type: 'number', flex: 1.5 },
  { field: 'priority', headerName: 'PRIORITY', flex: 2 },
  { field: 'city', headerName: 'CITY', flex: 2 },
  { field: 'country', headerName: 'COUNTRY', flex: 2 },
  { field: 'state', headerName: 'STATE', flex: 2 },
  { field: 'region', headerName: 'REGION', flex: 2 },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },
];


const rowsTest = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable(props) {
    const { data, setData } = useData();
    const rows = data;
    
    const router = useRouter();
    function click(params){
        console.log("click", params);
        router.push("/terminal/" + params.id + "/");
    }
    
    
    return (
        <div style={{ height: "75vh", width: '100%' }}>
      <DataGrid stickyHeader onRowClick={click} rows={props.source} columns={columns} pageSize={20} />
    </div>
  );
}