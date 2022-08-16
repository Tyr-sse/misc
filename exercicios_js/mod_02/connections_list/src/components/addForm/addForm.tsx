import React, { useState } from "react";
import { currentTheme } from "../../global";

export default function AddForm(props: any) {
    const addF = props.connectionFunctions?.addF ?? (() => { console.log('FUNC') });
    let stl = {
        line: {},
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


        },
        addBtn: {
            margin: '2px',
            fontSize: '10px',
            fontWeight: '800',
            color: currentTheme.bg,
            backgroundColor: '#22aa22',

            borderWidth: '0px',
            borderRadius: '3px',
            minWidth: '80px',
            maxWidth: '80px',
            minHeight: '30px',
            maxHeight: '30px',

            marginLeft: '10px',
            marginRight: '10px',
            marginTop: '5px',
            marginBottom: '5px',
        },
    }
    const [A, setA] = useState('');
    const [B, setB] = useState('');
    const [C, setC] = useState('');
    const [st, setSt] = useState<boolean>(false);
    return (
        <span style={{backgroundColor: currentTheme.bg, minHeight: '100%'}}>
            <span style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '15px',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: currentTheme.bg02,
                borderRadius: '4px',
                color: 'red',
                minWidth: '98px',
                maxWidth: '98px',
                minHeight: '150px',
                maxHeight: '150px'
            }}>
                <input
                    type="text"
                    required
                    style={stl.in}
                    onChange={(e) => { setA(e.target.value) }}
                />
                <input
                    type="text"
                    required
                    style={stl.in}
                    onChange={(e) => { setB(e.target.value) }}
                />
                <input
                    type="number"
                    required
                    style={stl.in}
                    onChange={(e) => { setC(e.target.value) }}
                />
                <button style={stl.addBtn}
                    onClick={() => {
                        addF(A, B, C, [st, setSt]);

                    }}
                >ADD</button>
            </span>
        </span>
    );

}