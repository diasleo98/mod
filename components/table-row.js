import Link from "next/link"
function TableRow(props){
    return <tr>
        <td><Link href={`/terminal/${props.id}`}><a>{props.terminalName}</a></Link></td>
        <td>{props.siteCode}</td>
        <td>{props.terminalFocus}</td>
        <td>{props.city}</td>
        <td>{props.country}</td>
        <td>{props.prov-state-other}</td>
        <td>{props.region}</td>
        
    </tr>
}
export default TableRow;