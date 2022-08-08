import React from "react";


export default function AddTaskForm(props: any) {

    let list: any[] = props.taskList ?? [];


    return <div className="row">
        <input id='title' type='text' placeholder="TITLE" className="in"></input>
        <input id='priority' type='number' placeholder="PRIORITY" className="in"></input>
        <input id='description' type='text' placeholder="DESCRIPTION" className="in"></input>
        <div> 
            DUE DATE:
            <input id='descriptions' type='date' ></input>
        </div>
        <button>ADD TASK</button>

    </div>



}