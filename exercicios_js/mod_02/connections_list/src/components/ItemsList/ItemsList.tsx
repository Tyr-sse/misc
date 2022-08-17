import React, { useContext, useEffect, useState } from 'react';

import { currentTheme, leftZeroes, range, Iupdate, ListContext } from './../../global';
import { Accordion } from "react-bootstrap";
import ListItem from './../listItem/ListItem';
import { Iitem } from './../../global';

export default function ItemsList(props:{lst: Iitem[], ttl: string,}) {
  const [st, setSt] = useState<boolean>(false);
  const ctxt = useContext(ListContext);
  //const cntxt = useContext(ListContext);
  //typeof cntxt
  //console.log('CTXT ', ctxt)
  //console.log()
  let i = 0;
  return (
    <>
      <div style={ctxt.theme.title}>{props.ttl}</div>

      <Accordion>
        {

          props.lst.map((it) => {
            console.log(it);
            i++;
            return <ListItem {...it} key={i}/>

          }

          )
        }

      </Accordion>
    </>
  );

}

