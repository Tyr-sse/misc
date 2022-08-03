import React from 'react';
import './App.css';
//import themes from './themes.js';

function frmtd(val:string, sz:number): string{
  function spcs(n:number){
    let r = '';
    for(let i=0;i<n;i++){
      r+='_';
    }
    return r;
  }
  let R = val;
  if(val.length<sz) val+= spcs(sz-val.length);  
  return val;
}


function App() {
  //alert(themes)

  genTSK(10);
  return (
    <div className="App">
      <ul>
        {
          taskList.map((x) => {
            return <ol>
              <td>{frmtd(x.id+'',20)}</td>
              <td>{frmtd(x.title+'',20)+'|'}</td>
              <td>{frmtd(x.status+'',10)?'SIM':'NÃO'}</td>
              <td>{frmtd(x.dueDate.toDateString(),10)}</td>

            </ol>
          })
        }
      </ul>
    </div>
  );
}

interface Task {
  id: number;
  title: string;
  status: boolean;
  dueDate: Date;
}

let taskList: Task[] = [


];


function genTSK(n: number) {
  for (let i = 0; i < n; i++) {
    taskList.push({
      id: i,
      title: 'taskId_' + i,
      status: i & 1 ? true : false,
      dueDate: new Date(2022, i % 12, i % 28)
    })
  }

}






export default App;
