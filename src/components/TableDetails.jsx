import React from "react";
import "../style.css"



const TableDetails = ({data}) => {
    // console.log("data=" , data);
    return (
      <>
        <table>
          <thead>
            <tr style={{ background: "#00338D", color: "white" }}>
              <th style={{}}>Table Details</th>
            </tr>
          </thead>
          <tbody>
            {/* {data?.map((item)=> (
                    <tr key = {item?.id} style={{border:'3px solid white'}}>
                        <td> {item?.Column_Name}</td>
                        <td>{item?.Field}</td>
                    
                    </tr>
                ))} */}
            <tr>
              <td>Table_Name</td>
              <td>{data?.Table_Name}</td>
            </tr>
            <tr>
              <td>DB_Name</td>
              <td>{data?.DB_Name}</td>
            </tr>
            <tr>
              <td>Table_Type</td>
              <td>{data?.Table_Type}</td>
            </tr>
            <tr>
              <td>Business_Name</td>
              <td>{data?.Business_Name}</td>
            </tr>
            <tr>
              <td>Business_Description</td>
              <td>{data?.Business_Description}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
}
export default TableDetails;
