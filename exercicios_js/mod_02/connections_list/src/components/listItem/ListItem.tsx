import React, { useContext, useState } from "react";
import { Accordion } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

import { currentTheme, Iitem, leftZeroes, formatedDate, ListContext } from "../../global";




export default function ListItem(props: Iitem) {
    const [st, setSt] = useState<boolean>(false);

    //console.log('P S > ', props)
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
                        <tr>
                            <td style={ctxt.theme.itemLine}>
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

                                <button onClick={() => { console.log('EDIT', props.id) }}>EDIT</button>
                                <button onClick={() => { console.log('DELETE', props.id) }}>DELETE</button>

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