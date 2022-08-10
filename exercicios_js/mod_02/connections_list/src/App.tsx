import React from 'react';
import './App.css';
import Btn from './components/basic/Btn';
import ListItem from './components/listItem/ListItem';
import { currentTheme } from './themes';
import { leftZeroes, range } from './util';



function App() {
  let connections = generateConnections(25);
  let i = 0;
  const stl = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: currentTheme.bg,
    borderRadius: '0px'
  };
  return (
    <span style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: currentTheme.bg,
      borderRadius: '0px'
    }}>
      <table style={{ backgroundColor: 'red', alignSelf: 'center' }}>
        <tbody>
          {
            connections.map(
              (x) => {
                i++;
                return <ListItem obj={x} key={'ListItemId_' + i} />

              }
            )
          }
        </tbody>
      </table>
    </span>
  );
}




const algarisms = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let nodes = [];

function generateConnections(n: number) {

  let L = [];
  for (let it of range(n)) {
    let a = alphabet[Math.floor(Math.random() * 100) % alphabet.length];
    let b = alphabet[Math.floor(Math.random() * 100) % alphabet.length];
    if (b == a) b = 'A';
    L.push(
      {
        id: leftZeroes(it, 4),
        A: a,
        B: b,
        C: +((Math.floor(Math.random() * 10 % 10) + '').substring(0, 6)),
        editFunc: editItem,
        deleteFunc: deleteItem

      }
    )
  }
  return L;


}


function editItem() {
  console.log('asd')

}
function deleteItem() {
  console.log('assd')

}


export default App;