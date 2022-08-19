import React, { useContext, useEffect, useState } from "react";
import { addItemToLib } from "../../DB";
import { currentTheme, ListContext } from "../../global";
import './addFormStyle.module.css';

export default function AddForm(props: { pos: number, id: string, updtF: Function }) {
    //const addF = props.connectionFunctions?.addF ?? (() => { console.log('FUNC') });
    const ctxt = useContext(ListContext);

    let stl = {
        line: {},
        in: {

            color: currentTheme.bg,
            backgroundColor: currentTheme.txt,
            borderWidth: '0px',
            borderRadius: '2px',
            maxWidth: '110px',
            marginLeft: '10px',
            marginRight: '10px',
            marginTop: '5px',
            marginBottom: '5px',


        },
        addBtn: {
            margin: '2px',
            fontSize: '10px',
            fontWeight: '800',
            color: currentTheme.bg,
            backgroundColor: '#22aa22',

            borderWidth: '0px',
            borderRadius: '20px',
            minWidth: '30px',
            maxWidth: '30px',
            minHeight: '30px',
            maxHeight: '30px',

            marginLeft: '10px',
            marginRight: '10px',
            marginTop: '5px',
            marginBottom: '5px',
        },
    }
    /*
    export interface Iitem {
    id: string,
    title: string,
    ref_list: number[],
    dt: Date,
    status: boolean
}

    */
    const [title, setTitle] = useState('');
    const [ref_list, setRefList] = useState('');
    const dfltDt = '0000-00-00';
    const [dt, setDt] = useState(dfltDt);
    //setDt('2022-03-05')
    //const stl = {backgroundColor: 'green'}
    useEffect(()=>{'criou'},[dt])
    return (
        <span style={{ backgroundColor: currentTheme.bg, minHeight: '100%' }}>
            <table>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>REF LIST</th>
                        <th>DATE</th>
                        <th>ADD</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                required
                                placeholder={'TÍTULO'}

                                onChange={(e) => { setTitle(e.target.value) }}
                            /></td>
                        <td>
                            <input
                                type="text"
                                placeholder={ref_list}
                                onChange={(e) => { setRefList(e.target.value) }}
                            /></td>
                        <td>
                            <input
                            defaultValue={dfltDt}
                                type="date"
                                required
                                onChange={(e) => setDt(e.target.value)}
                            /></td>

                        <td>
                            <button className="addBtn"
                                onClick={() => {
                                    //validar data
                                    const dtStr = dt+'';
                                    console.log('DATA NO ADD FORM> ',dtStr,'<>', dt)
                                    
                                    addItemToLib(props.pos, title, ref_list, dt);
                                    props.updtF();
                                    //addF(A, B, C, [st, setSt]);
                                    //ADD ELEMENT TO LIST
                                }}
                            >+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </span>
    );

}