import React, { useContext, useState } from "react";
import { Accordion } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

import { currentTheme, Iitem, leftZeroes, formatedDate, ListContext } from "../../global";

interface IitemP extends Iitem{
    pos: number,
    listPos: number
}


export default function ListItem(props: IitemP) {
    const [st, setSt] = useState<boolean>(false);

    //console.log('LI k > ', props.pos)
    const ctxt = useContext(ListContext);
    //console.log('I> ', ctxt)

    const dt = formatedDate(props.dt);
    return (
        <Accordion.Item key={props.id} eventKey={props.id}>
            <Accordion.Header>
                {props.title}
            </Accordion.Header>
            <Accordion.Body>
                <table >
                    <tbody>
                        <tr style={ctxt.theme.itemLine}>
                            <td >
                                {'ID: ' + props.id}
                                ...

                                <span>{dt.substring(6, 8)}|</span>

                                <span>{dt.substring(4, 6)}|</span>
                                <span>{dt.substring(0, 4)}|</span>
                                ...
                            </td>
                            <td>
                                {
                                    props.ref_list.length ?
                                        props.ref_list.map((x) => {

                                            return <p>{'[' + x + ']'}</p>

                                        }) : <p>[0]</p>
                                }


                            </td>
                            <td>

                                <button onClick={()=>ctxt.editF(props.listPos,props.pos)}>EDIT</button>
                                <button onClick={()=>ctxt.deleteF(props.listPos,props.pos)}>DELETE</button>

                            </td>
                            <td>
                                ...status: {props.status ? 'TRUE' : 'FALSE'}^...
                            </td>
                        </tr>
                    </tbody>
                </table>

            </Accordion.Body>
        </Accordion.Item>);

}