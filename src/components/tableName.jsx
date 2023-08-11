import React from "react";
import "../style.css"




const TableName = ({data,onChecked,newData}) => {

    return (<>
        
        <table>
            <thead>
                <tr style={{background:"#00338D",color:"white"}}>
                    <th style={{}}>Table Name</th>
                    
                </tr>
            </thead>
            <tbody>
                {newData?.map((item)=> (
                    <tr  key = {item} style={{border:'3px solid white'}} >
                        <td  onClick={()=>onChecked(item)} > {item}</td>
                     
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}
export default TableName;