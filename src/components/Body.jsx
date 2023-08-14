import React, { useState, useEffect } from "react";
import "../style.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import TableName from "./tableName.jsx";
import TableDetails from "./TableDetails";
import datan from "./data";
import datax from "./data2";
import datay from "./data3";
import TableColumns from "./TableColumns";
import axios from "axios";

function Body() {


    const [item1, setItem1] = useState("-2");
    const [tableName, setTableName] = useState();
    const [databaseName,setDatabaseName]=useState();
    const [tableDetails,setTableDetails]=useState();
    const [tableNameID, setTableNameID] = useState();
    const [ButtonText,setButtonText]=useState("Fetch Suggestion")


  function getItem1(id) {

    console.log(id,"----",databaseName);
    setTableNameID(id);
    axios({
        method:"POST",
        data:{
            "Table_Name":id,
            "DB_Name":databaseName
        },
        url:"https://qih3mej8ug.execute-api.us-east-1.amazonaws.com/PROD/gettablemetadata"
    })
    .then((res)=>{
        // console.log(res);
        setTableDetails(res)
    })
    // console.log(id);
    setItem1(id);
  }
  const getNewData = () =>{
    // console.log(id,"----",databaseName);
    // setTableDetails();
    setButtonText("Loading...")
    axios({
        method:"POST",
        data:{
            "Table_Name":tableNameID,
            "DB_Name":databaseName,
            "Recommendation":"True"
        },
        url:"https://qih3mej8ug.execute-api.us-east-1.amazonaws.com/PROD/getrecommendation"
    })
    .then((res)=>{
        
        console.log("Recommned ",res);
        setButtonText("Fetch Suggestion")
        setTableDetails(res)
    })
    .catch((err)=>{
        console.log(err);
        setButtonText("Error, Refresh")
    })
    
    // console.log(id);
    // setItem1(id);
  }


  useEffect(() => {
    
    fetch(
      "https://qih3mej8ug.execute-api.us-east-1.amazonaws.com/PROD/gettables"
    )
      .then((response) => response.json())
      .then((data) => {
        setTableName(data?.DBS[0]?.table_names);
        setDatabaseName(data?.DBS[0]?.database_name)
        // console.log(data.DBS);
      })
      .catch((error) => console.error("Error:", error));

    // console.log(dataNew.DBS[0].table_names);
    // setTableName(data.DBS[0].table_names);
    // console.log("-------------");
    // console.log(datan);
  }, []);


  return (
    <>
       
      <div>

      
        <div className="div1">
          <div className="row" style={{marginBottom:'10px'}}>
          {/* <hr style={{margin :'0px',border:'2px solid black'}} /> */}
          <div style={{border:'2px solid #00338D',margin:'5px',width:'88vw'}}></div>
           
           
           <div className="col-lg-2"></div>
           <div className="col-lg-6" style={{display:'flex',justifyContent:"space-between",marginLeft:'-8px'}}>
           <button
                      onClick={() => window.location.reload(false)}
                        style={{
                          marginTop:'0px',
                          background: "#00338D",
                          color: "whitesmoke",
                          border: "2px solid #00338D",
                          borderRadius: "12%",
                          width: "200px",
                          
                        }}
                      >
                        Data Catalog
                      </button> 
                      <button
                      // onClick={getNewData}
                        style={{
                          marginTop:'0px',
                          background: "grey",
                          color: "whitesmoke",
                          border: "2px solid #00338D",
                          borderRadius: "12%",
                          width: "200px",
                       
                        }}
                      >
                        Data Generator
                      </button> 
                      <button
                      // onClick={getNewData}
                        style={{
                          marginTop:'0px',
                          background: "grey",
                          color: "whitesmoke",
                          border: "2px solid #00338D",
                          borderRadius: "12%",
                          width: "200px",
                        
                        }}
                      >
                        Data Analyst
                      </button> 

           </div>
                </div>
          <div className="row">
            <div className="col-lg-2" style={{}}>
              <div
                style={{
                  background: "black",
                  color: "white",
                  marginBottom: "0px",
                }}
              >
                <h5 style={{ marginBottom: "0px", marginLeft: "2px" }}>
                  Tables
                </h5>
              </div>
              <div className="tablediv">
                <TableName
                  data={datan}
                  newData={tableName}
                  onChecked={getItem1}
                />
              </div>
            </div>
            <div className="col-lg-9" style={{}}>
              <div
                className="row"
                style={{
                  background: "black",
                  color: "white",
                  marginBottom: "0px",
                }}
              >
                <h5 style={{ marginBottom: "0px", marginLeft: "2px" }}>
                  Metadata
                </h5>
              </div>
              <div
                className="row"
                style={{ border: "2px solid black", height: "70vh" }}
              >
                <div className="col-lg-4 tablediv" style={{ height: "100%",overflow:"scroll" }}>
                  {item1 < 0 ? "" : <TableDetails data={tableDetails?.data} />}
                </div>
                <div
                  className="col-lg-8 tablediv"
                  style={{ height: "100%", overflow: "scroll" }}
                >
                  {item1<0?"":  <TableColumns data = {tableDetails?.data} />}
                  {item1 < 0 ? (
                    ""
                  ) : (
                    <div
                      style={{
                        justifyContent: "flex-end",
                        display: "flex",
                        marginTop: ".5%",
                      }}
                    >
                      <button
                      onClick={getNewData}
                        style={{
                          background: "blue",
                          color: "whitesmoke",
                          border: "2px solid blue",
                          borderRadius: "12%",
                          width: "200px",
                        }}
                      >
                        {ButtonText}
                      </button>
                      <button
                        style={{
                          background: "skyblue",
                          color: "whitesmoke",
                          border: "1px solid skyblue",
                          borderRadius: "8%",
                          marginRight: "2%",
                          marginLeft: "3%",
                          width: "100px",
                        }}
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
