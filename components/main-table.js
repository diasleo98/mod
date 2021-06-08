import TableRow from "../components/table-row";
import classes from "./main-table.module.css"

function MainTable(props) {
  console.log(props.source)
  return (
    <table className={classes.table}>
      <thead>
        <a href="http://google.com">NAME</a>
        <th>SITE CODE</th>
        <th>PRIORITY</th>
        <th>CITY</th>
        <th>COUNTRY</th>
        <th>PROVINCE/STATE</th>
        <th>REGION</th>
        {props.source.map((event) => (
          <TableRow key={event.id} id={event.id} name={event.name} code={event.code} priority={event.priority} city={event.city} country={event.country} state={event.state} region={event.region}  />
        ))}
      </thead>
      {/* <TableRow data={props.source}></TableRow> */}
    </table>
  );
}
export default MainTable;
