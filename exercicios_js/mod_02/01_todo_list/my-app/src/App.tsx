import React from 'react';
import './App.css';
import AddTaskForm from './components/addTaskForm/AddTaskFormIndex';
import TaskList from './components/TaskList/taskListIndex';



function App() {
  //alert(themes)

  genTSK(10);
  return (
    <div className="App">
      <AddTaskForm />
      <TaskList taskList={taskList}/>

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
      title: 'title_' + i,
      status: i & 1 ? true : false,
      dueDate: new Date(2022, i % 12, i % 28)
    })
  }

}






export default App;
