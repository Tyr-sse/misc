import React, { useContext, useState } from "react";

import { currentTheme, leftZeroes } from "../../global";




export default function ListItems(props: any) {
    let stl = {
        line: {
            color: currentTheme.txt,
            backgroundColor: currentTheme.bg,
            borderWidth: '0px',
            borderRadius: '6px',
            padding: '4px',
            display: 'flex',
            marginTop: '2px',
            marginDown: '2px',
            marginLeft: '2px',
            marginRight: '2px',
        },
        editBtn: {
            margin: '2px',
            fontSize: '10px',
            fontWeight: '800',
            color: currentTheme.bg,
            backgroundColor: currentTheme.tint01,
            borderColor: currentTheme.bg,
            borderWidth: '1px',
            borderRadius: '5px',
            minWidth: '60px',
            maxWidth: '60px',
        },
        redBtn: {
            margin: '2px',
            fontSize: '10px',
            fontWeight: '800',
            color: currentTheme.bg,
            backgroundColor: currentTheme.tint02,

            borderColor: currentTheme.bg,
            borderWidth: '1px',
            borderRadius: '8px',
            minWidth: '60px',
            maxWidth: '60px'
        },

        disabledBtn: {
            margin: '2px',
            fontSize: '10px',
            fontWeight: '800',
            color: currentTheme.bg02,
            backgroundColor: currentTheme.bg03,

            borderColor: currentTheme.bg02,
            borderWidth: '1px',
            borderRadius: '8px',
            minWidth: '60px',
            maxWidth: '60px'
        },
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
        id: {
            fontWeight: '800',
            color: currentTheme.txt,
            backgroundColor: 'transparent',
            borderWidth: '0px',
            borderRadius: '2px',
            maxWidth: '80px',
            marginLeft: '10px',
            marginRight: '10px',
            marginTop: '5px',
            marginBottom: '5px',


        }



    }

    let obj = props.obj ?? { A: 'A', B: 'B', C: 2.231, id: 0 };
    const [A, setA] = useState(obj.A);
    const [B, setB] = useState(obj.B);
    const [C, setC] = useState(obj.C);
    const [changed, setChanged] = useState<boolean>(false);

    stl.line.backgroundColor = changed ? currentTheme.bg03 : currentTheme.bg;
    const { addF, updateF, deleteF, changeF, resetF } = props.connectionFunctions;

    return (
        <span style={stl.line}>
            <span style={stl.id}>{obj.id}</span>
            <input
                type="text"
                required
                value={A}
                style={stl.in}
                onChange={(e) => {
                    setA(e.target.value);
                    setChanged(true);
                    changeF(obj);
                }}
            />

            <input
                type="text"
                required
                value={B}
                style={stl.in}
                onChange={(e) => {
                    setB(e.target.value);
                    setChanged(true);
                    changeF(obj);
                }}
            />
            <input
                type="number"
                required
                value={C}
                style={stl.in}
                onChange={(e) => {
                    setC(e.target.value);
                    setChanged(true);
                    changeF(obj);

                }}
            />
            <button disabled={changed ? false : true}
                style={changed ? stl.editBtn : stl.disabledBtn} onClick={() => {
                    const id = obj.id;
                    updateF({ id, A, B, C })
                }}
            >UPDATE</button>
            <button disabled={changed ? false : true}
                style={changed ? stl.editBtn : stl.disabledBtn} onClick={() => resetF()}
            >RESET</button>
            <button style={stl.redBtn} onClick={() => {
                const id = obj.id;
                console.log('CHEGOU NO BOTAO')
                deleteF(id);
            }} >DELETE</button>

        </span>
    );



}
