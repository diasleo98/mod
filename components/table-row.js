import Link from "next/link"
function TableRow(props){
    return <tr>
        <td><Link href={`/terminal/${props.id}`}><a>{props.name}</a></Link></td>
        <td>{props.code}</td>
        <td>{props.priority}</td>
        <td>{props.city}</td>
        <td>{props.country}</td>
        <td>{props.state}</td>
        <td>{props.region}</td>
        
    </tr>
}
export default TableRow;