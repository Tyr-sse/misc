import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { leftZeroes, range, ListContext, listStl, Iitem } from './global';
import ItemsList from './components/ItemsList/ItemsList';
import { addItemToLib, deleteItemFromLib, getLib, setLib, updateItemFromLib } from './DB';

const mockLib = [
  { "status": false, "id": "id_0000", "title": "Title 000", "ref_list": [], "dt": new Date() },
  { "status": true, "id": "id_0001", "title": "Title 001", "ref_list": [0], "dt": new Date() },
  { "status": false, "id": "id_0002", "title": "Title 002", "ref_list": [0, 1], "dt": new Date() },
  { "status": false, "id": "id_0003", "title": "Title 003", "ref_list": [0, 1, 2], "dt": new Date() },
  { "status": false, "id": "id_0004", "title": "Title 004", "ref_list": [0, 1, 2, 3], "dt": new Date() },
  { "status": false, "id": "id_0005", "title": "Title 005", "ref_list": [0, 1, 2, 3, 4], "dt": new Date() },
  { "status": false, "id": "id_0006", "title": "Title 006", "ref_list": [0, 1, 2, 3, 4, 5], "dt": new Date() },
  { "status": false, "id": "id_0007", "title": "Title 007", "ref_list": [0, 1, 2, 3, 4, 5, 6], "dt": new Date() },
  { "status": false, "id": "id_0008", "title": "Title 008", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7], "dt": new Date() },
  { "status": false, "id": "id_0009", "title": "Title 009", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7, 8], "dt": new Date() }
];

// [x] Adicao *data bugada * lista nao tratada
// [x] Atualizaçao //não implementada
// [X] Exclusao
// [X] status
//  [ ] checkbox
// [X] Bootstrap
// [ ] navigation

// [X] useState
// [X] useContext
// [ ] useEffect

// [ ] LocalStorage
// [X] Categorias 

setLib();
let lib = getLib()
export default function App() {
  const [st, setSt] = useState<boolean>(false);
  let i = 0
  function recUpdateF(lp: number, p: number, values: Iitem) {
    //console.log('APP GOT DATA: ',{lp, p, values});
    console.log('APP GOT DATA: ', values);

    updateItemFromLib(lp, p, values, (cod: number) => {
      
      console.log(cod === -1 ? 'ERROR' : 'UPDATED \n' + JSON.stringify(lib));
      
      setSt(!st);
    });
  }
  // function recDeleteF(lp: number, p: number) {
  //   console.log("DEL ", lp, p)
  //   deleteItemFromLib(lp, p)
  // }
  return (
    <ListContext.Provider value={
      {
        theme: listStl,
        addFunc: addItemToLib,
        updateF: recUpdateF,
        deleteF: (lp: number, p: number) => {
          deleteItemFromLib(lp, p);
          setSt(!st);

        },//recDeleteF,

      }
    }>

      {
        lib.map((L) => <ItemsList pos={i++} ttl={'Cat_' + leftZeroes(i, 4)} lst={L} key={leftZeroes(i, 5)} />)
      }

      {/* <ItemsList ttl={'LISTA 02'} lst={itemList02} /> */}
    </ListContext.Provider>);
}

