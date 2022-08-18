import React, { useContext, useEffect, useState } from 'react';

import { currentTheme, leftZeroes, range, Iupdate, ListContext } from './../../global';
import { Accordion } from "react-bootstrap";
import ListItem from './../listItem/ListItem';
import { Iitem } from './../../global';
import AddForm from '../addForm/addForm';

export default function ItemsList(props:{lst: Iitem[], ttl: string, pos: number}) {
  const [st, setSt] = useState<boolean>(false);
  const ctxt = useContext(ListContext);
  //console.log('IL RERENDER', props.ttl, 'POS', props.pos);
  function rerenderList(){
    setSt(!st);
  }
  //const cntxt = useContext(ListContext);
  //typeof cntxt
  //console.log('CTXT ', ctxt)
  //console.log()
  let i = 0;
  return (
    <>
      <div style={ctxt.theme.title}>{props.ttl}</div>

      <Accordion>
      <AddForm id={props.ttl} pos={props.pos} updtF={rerenderList}/>
        {

          props.lst.map((it) => {
            //console.log(it);
            
            return <ListItem {...it} listPos={props.pos} pos={i++} key={leftZeroes(i,5)} />

          }

          )
        }

      </Accordion>
    </>
  );

}

