import styled from "styled-components"
import CircularProgress from '@material-ui/core/CircularProgress';
import MainHeader from "../components/main-header"
import DataTable from '../components/dataTable';
import SearchMOD from '../components/search';

export const Grid = styled.div`
    width:100vw;
    height:100vh;
    display: grid;
    //grid-template: 15fr 85fr / 15% 85%;
    grid-template-rows: 20% 10% 70%;
    grid-template-columns: 100%;
    grid-template-areas: 
    "header"
    "search"
    "table"
`;

export const Header = styled(MainHeader)`
    grid-area: header;
`;

export const Search = styled(SearchMOD)`
    width:100%;
    height:100%;
    /* grid-column: 2/3;
    grid-row: 2/3; */
    grid-area: search;
`;
export const Table = styled(DataTable)`
    width:100%;
    height:100%;
    grid-area: table;
`
export const Loader = styled(CircularProgress)`
    width:100%;
    height:100%;
    grid-area: table;
    position: relative;



`
