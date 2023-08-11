import React from "react";
import Table from "./sampletable"




const table2 = ()=>{

    const data = [
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Alice", age: 30},
        { id: 3, name: "Bob", age: 22},
    ];


    return (
        <div>
            <h1>Sample Table</h1>
            <Table data={data} />
        </div>
    );
    

}

export default table2;