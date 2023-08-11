import React from "react";
import "../style.css"



const TableColumns = ({data}) => {
    console.log("data=" , data?.Columns);
    return (<>
        
        <table>
            <thead>
                <tr style={{background:"#00338D",color:"white"}}>
                    <th style={{}}>Columns</th>
                    
                </tr>
            </thead>
            <tbody>
                {data?.Columns?.map((item)=> (
                    <tr key = {item?.Business_Description} style={{border:'3px solid white'}}>
                        <td> {item?.Name}</td>
                        <td>{item?.Type}</td>
                        <td>{item?.Business_Name}</td>
                        <td>{item?.Business_Description}</td>
                    
                    </tr>
                ))}
                {data?.Cols?.map((item)=> (
                    <tr key = {item?.Business_Description} style={{border:'3px solid white'}}>
                        <td> {item?.Name}</td>
                        <td>{item?.Type}</td>
                        <td>{item?.Business_Column_Name || item?.Business_Name}</td>
                        <td>{item?.Business_Column_Description || item?.Business_Description}</td>
                    
                    </tr>
                ))}
            </tbody>
        </table></>
    )//
}
export default TableColumns;

// "Name": "longitude",
// "Type": "double",
// "Business_Column_Name": "Longitude",
// "Business_Column_Description": 

// "Name": "order_id",
// "Type": "bigint",
// "Business_Name": "Order ID",
// "Business_Description":
