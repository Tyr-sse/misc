import React, { useEffect, useState } from 'react';
import './App.css';
import { currentTheme, leftZeroes, range, Iupdate, ListContext, listStl } from './global';
import { Accordion } from "react-bootstrap";
import ListItem from './components/listItem/ListItem';
import ItemsList from './components/ItemsList/ItemsList';


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


// let mck = []
// for (let i of range(10)) {
//   mck.push({
//     id: 'id_' + leftZeroes(i, 4)
//     ,
//     title: 'Title ' + leftZeroes(i, 3),
//     ref_list: range(i),
//     dt: new Date()
//   }
//   );


// }
//console.log(JSON.stringify(mck));



let itemList01 = [
  { "status": true, "id": "id_01_0000", "title": "LISTA 01 T01", "ref_list": [], "dt": new Date() },
  { "status": true, "id": "id_01_0001", "title": "LISTA 01 T02", "ref_list": [0], "dt": new Date() },
  { "status": true, "id": "id_01_0002", "title": "LISTA 01 T03", "ref_list": [0, 1], "dt": new Date() },
  { "status": true, "id": "id_01_0003", "title": "LISTA 01 T04", "ref_list": [0, 1, 2], "dt": new Date() },
  { "status": true, "id": "id_01_0004", "title": "LISTA 01 T05", "ref_list": [0, 1, 2, 3], "dt": new Date() },
  { "status": true, "id": "id_01_0005", "title": "LISTA 01 T06", "ref_list": [0, 1, 2, 3, 4], "dt": new Date() },
  { "status": true, "id": "id_01_0006", "title": "LISTA 01 T07", "ref_list": [0, 1, 2, 3, 4, 5], "dt": new Date() },
  { "status": true, "id": "id_01_0007", "title": "LISTA 01 T08", "ref_list": [0, 1, 2, 3, 4, 5, 6], "dt": new Date() },
  { "status": true, "id": "id_01_0008", "title": "LISTA 01 T09", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7], "dt": new Date() },
  { "status": true, "id": "id_01_0009", "title": "LISTA 01 T10", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7, 8], "dt": new Date() }
];
let itemList02 = [
  { "status": false, "id": "id_02_0000", "title": "Title A", "ref_list": [], "dt": new Date() },
  { "status": false, "id": "id_02_0001", "title": "Title 001", "ref_list": [0], "dt": new Date() },
  { "status": false, "id": "id_02_0002", "title": "Title 002", "ref_list": [0, 1], "dt": new Date() },
  { "status": false, "id": "id_02_0003", "title": "Title 003", "ref_list": [0, 1, 2], "dt": new Date() },
  { "status": false, "id": "id_02_0004", "title": "Title 004", "ref_list": [0, 1, 2, 3], "dt": new Date() },
  { "status": false, "id": "id_02_0005", "title": "Title 005", "ref_list": [0, 1, 2, 3, 4], "dt": new Date() },
  { "status": false, "id": "id_02_0006", "title": "Title 006", "ref_list": [0, 1, 2, 3, 4, 5], "dt": new Date() },
  { "status": false, "id": "id_02_0007", "title": "Title 007", "ref_list": [0, 1, 2, 3, 4, 5, 6], "dt": new Date() },
  { "status": false, "id": "id_02_0008", "title": "Title 008", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7], "dt": new Date() },
  { "status": false, "id": "id_02_0009", "title": "Title 009", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7, 8], "dt": new Date() }
];
export default function App() {
  return (
    <ListContext.Provider value={{ theme:  listStl  }}>
      <ItemsList ttl={'LISTA 01'}  lst={itemList01} />
      <ItemsList ttl={'LISTA 02'}  lst={itemList02} />
    </ListContext.Provider>);
}

