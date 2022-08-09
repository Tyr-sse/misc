import React from "react";

function leftZeroes(val: (number | string), n: number) {
    n = Math.floor(n);
    val = '' + val;
    let str = val + '';
    let r = '';
    for (let i = 0; i < n - str.length; i++) r += '0';
    return r + str;
}



export default function TaskList(props: any) {
    let list: any[] = props.taskList ?? [];
    return <Acc taskList = {list}/>


}

function Acc(props:any){
    let list: any[] = props.taskList ?? [];
    let i = -1;
    return (
    <table>
        <tr>
            <th>ID</th>
            <th>STATUS</th>
            <th>TITLE</th>
            <th>PRIORITY</th>
            
            
        </tr>
    {list.map((x)=>{
        i++;
        return <tr className="AccItem">

            
            </tr>


    })}</table>);


}



//export default BasicExample;