import React from "react";
import './AddTaskFormStyle.css';


export default function AddTaskForm(props: any) {

    let list: any[] = props.taskList ?? [];


    return <div className="row">
        <input id='title' type='text' placeholder="TITLE" className="in" ></input>
        <input id='priority' type='number' placeholder="PRIORITY" className="in"></input>
        <input id='description' type='text' placeholder="DESCRIPTION" className="in"></input>
        <span className="in"> 
            DUE DATE:
            <input id='descriptions' type='date' className="in"></input>
        </span>
        <button>ADD TASK</button>

    </div>



}