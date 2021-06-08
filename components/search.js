import Link from "next/link";
import { PlantLink, Search, SearchField, SearchSelect, TitleH2 } from "./_styled";

function inputChanged(event){
    console.log(event.target.value);
}

function SearchMOD(props){
    return <Search>
        <SearchField type="text" placeholder="Search" onChange={props.refreshSearch}></SearchField>
        <SearchSelect onChange={props.onChange}>
            <option value="name">Name</option>
            <option value="sitecode">Site Code</option>
            <option value="city">City</option>
            <option value="country">Country</option>
            <option value="region">Region</option>
            {/* <option value="id">Id</option> */}
        </SearchSelect>
        <TitleH2 style={{fontSize:30}}>
            <PlantLink href='/'>Plant Technology Services</PlantLink>
        </TitleH2>
        
    </Search>
    
    
}
export default SearchMOD;