import React, { useEffect, useState } from 'react';

const Completed = () =>{
    const [task,setTask] = useState({data:[]}) 
    let allData: any;
      useEffect(() => {
        let getData: any = window.localStorage.getItem('data');
        allData= JSON.parse(getData)
        setTask({data:allData})
      });
    return(
        <table>
                <tr>
                    <th>Company</th>
                    <th>Project</th>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th>Clear</th>
                </tr>
                {task.data.map((resp: any, index: number)=>(
                (resp.Status==="Done")?<tr key={index}>
                    <td>{resp.Company}</td>
                    <td>{resp.Project}</td>
                    <td>{resp.Task}</td>
                    <td>{resp.Priority}</td>
                    <td>{resp.Description}</td>
                    <td><button value={index}>Done</button></td>
                    <td>X</td>
                </tr>:""
            ))}
        </table>
    )
 }
 
 export default Completed;