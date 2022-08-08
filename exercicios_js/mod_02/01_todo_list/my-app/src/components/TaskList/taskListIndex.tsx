import React from "react";

import Accordion from 'react-bootstrap/Accordion';

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
    return <>{list.map((x)=>{
        return <span>A {x.id}</span>


    })}</>


}



//export default BasicExample;