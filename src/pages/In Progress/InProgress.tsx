import React, { useEffect, useState } from 'react';

const InProgress = () =>{
    const [task,setTask] = useState({data:[]}) 
    let allData: any;
      const moveInpro: any = (e: any)=>{
        let getDataForUpdate: any = window.localStorage.getItem('data');
        let allDataForUpdate: any = JSON.parse(getDataForUpdate);
        let singleValue: any = allDataForUpdate[e.target.value];
        singleValue.Status="Done";
        const task: any = [...allDataForUpdate,singleValue];
        window.localStorage.setItem('data', JSON.stringify(task));
      }
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
                </tr>
                {task.data.map((resp: any, index: number)=>(
                (resp.Status==="Inprogress")?<tr key={index}>
                    <td>{resp.Company}</td>
                    <td>{resp.Project}</td>
                    <td>{resp.Task}</td>
                    <td>{resp.Priority}</td>
                    <td>{resp.Description}</td>
                    <td><button value={index} onClick={moveInpro}>Completed</button></td>
                </tr>:""
            ))}
        </table>
    )
 }
 
 export default InProgress;
