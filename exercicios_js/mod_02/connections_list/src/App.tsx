import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { setLib, getLib, addItemToLib, deleteItemFromLib, updateItemFromLib, persistLib } from './BD';
//import AddForm from './components/addForm/AddForm';
import AddForm from './components/addForm/addForm';
import ListItem from './components/listItem/ListItem';
import { currentTheme, leftZeroes, range, Iupdate } from './global';



const MockLib = [
  { "id": "0000", "A": "T", "B": "R", "C": 3 },
  { "id": "0055", "A": "A", "B": "U", "C": 6 },
  { "id": "0002", "A": "R", "B": "Q", "C": 0 },
  { "id": "0003", "A": "O", "B": "Z", "C": 4 },
  { "id": "0004", "A": "E", "B": "O", "C": 6 },
  { "id": "0005", "A": "U", "B": "L", "C": 1 },
  { "id": "0006", "A": "F", "B": "I", "C": 5 },
  { "id": "0007", "A": "I", "B": "E", "C": 4 },
  { "id": "0008", "A": "J", "B": "T", "C": 8 },
  { "id": "0009", "A": "U", "B": "D", "C": 2 },
  { "id": "0010", "A": "V", "B": "C", "C": 3 },
  { "id": "0011", "A": "S", "B": "O", "C": 5 },
  { "id": "0012", "A": "D", "B": "A", "C": 8 },
  { "id": "0013", "A": "G", "B": "Z", "C": 2 },
  { "id": "0014", "A": "P", "B": "L", "C": 1 },
  { "id": "0015", "A": "L", "B": "K", "C": 3 },
  { "id": "0016", "A": "C", "B": "K", "C": 4 },
  { "id": "0017", "A": "E", "B": "J", "C": 9 },
  { "id": "0018", "A": "N", "B": "H", "C": 8 },
  { "id": "0019", "A": "H", "B": "S", "C": 8 },
  { "id": "0020", "A": "H", "B": "N", "C": 3 },
  { "id": "0021", "A": "X", "B": "M", "C": 0 },
  { "id": "0022", "A": "S", "B": "B", "C": 4 },
  { "id": "0023", "A": "X", "B": "L", "C": 2 },
  { "id": "0024", "A": "Z", "B": "M", "C": 9 }
];

function App() {
  const [st, setSt] = useState<boolean>(false);
  let lib = MockLib;
  setLib(lib)





  function receiveAdd(A: string, B: string, C: number) {
    //console.log('RC ADD', A, B, C);
    //checar erros RETURN
    addItemToLib(A, B, C);
    setSt(!st);
  }
  function receiveUpdate(payload: Iupdate) {
    console.log('RC UPDT', payload.id, payload.A, payload.B, +payload.C);
    //checar erros
    //erro de conversão

    updateItemFromLib({
      id: payload.id,
      A: payload.A,
      B: payload.B,
      C: +payload.C //
    })

  }
  function receiveReset() {

    console.log('RC RESET');


  }
  function receiveDelete(id: string) {

    console.log('RC DEL saindo');
    deleteItemFromLib(id);
    setSt(!st);


  }
  function receiveChange(obja: any) {

    console.log('RC Change > ', obja);


  }













  let i = 0;
  const stl = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: currentTheme.bg,
    borderRadius: '0px',

  };
  /*
 in: {

      color: currentTheme.bg,
      backgroundColor: currentTheme.txt,
      borderWidth: '0px',
      borderRadius: '2px',
      maxWidth: '80px',
      marginLeft: '10px',
      marginRight: '10px',
      marginTop: '5px',
      marginBottom: '5px',


    }
  */
  return (
    <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: currentTheme.bg, borderRadius: '0px' }}>
      <AddForm connectionFunctions={{ addF: receiveAdd }} key={'AddForm_ID'} />
      <button style={{color: 'red', backgroundColor: 'blue'}}onClick={()=>{persistLib()}}>ASD</button>
    
      <span style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: currentTheme.bg,
        borderRadius: '0px'
      }}>

        <span key={'List_ID'}
          style={{ backgroundColor: currentTheme.bg02, alignSelf: 'center' }}>
          {
            lib.map(
              (x) => {
                i++;
                return <ListItem
                  obj={x}
                  key={'ListItemId_' + i}
                  connectionFunctions={
                    {
                      resetF: receiveReset,
                      updateF: receiveUpdate,
                      deleteF: receiveDelete,
                      changeF: receiveChange
                    }} />

              }
            )
          }

        </span>
      </span >
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
  //console.log(JSON.stringify(L))
  return L;


}


function editItem(item: string) {
  console.log('edit Item', item);
  //verificar os campos


}
function deleteItem(item: string) {
  console.log('delete Item', item)

}


export default App;