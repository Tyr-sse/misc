import React, { useContext, useState } from "react";

import { currentTheme ,leftZeroes} from "../../global";




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
            backgroundColor: currentTheme.txt,
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
            backgroundColor: '#aa2222',

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
    const {addF, updateF, deleteF} = props.connectionFunctions;
    //console.log('>> ', props.connectionFunctions, addF, updateF, deleteF);
    // const addF = ()=>{}
    // const updateF = ()=>{}
    // const deleteF = ()=>{}
    
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
                }}
            />
            <input
                type="text"
                required
                value={C}
                style={stl.in}
                onChange={(e) => {
                    setC(e.target.value);
                    setChanged(true);
                }}
            />
            <button style={stl.editBtn} onClick={() => updateF()} 
            >UPDATE</button>
            <button style={stl.editBtn} onClick={() => updateF()} 
            >RESET</button>
            <button style={stl.redBtn} onClick={() => deleteF()} >DELETE</button>

        </span>
    );



}

/*

export function ListItema(props: any) {
    const deflt = { A: 'A', B: 'B', C: 2.231, id: 0 };
    let obj = props.obj ?? deflt;

    //obj = { thiago: 'lasd' }

    let editCallback = (x: any) => { };
    let deleteCallback = (x: any) => { };
    //let callbackParams = 'asd';
    function onBtnEdit() {
        editCallback(obj);
    }

    function onBtnDelete() {
        deleteCallback(obj);
    }




//TC997000



    const stl = {
        line: {
            color: currentTheme.txt,
            backgroundColor: currentTheme.bg,
            borderColor: currentTheme.bg,
            borderWidth: '0px',
            borderRadius: '2px',
        },
        item: {
            color: currentTheme.txt,
            backgroundColor: currentTheme.bg,
            borderColor: currentTheme.txt,
            borderWidth: '1px',
            borderRadius: '1px',
            flex: '1',
        },
        label: {
            fontSize: '12px',
            color: currentTheme.txt,
            backgroundColor: currentTheme.bg,
            borderColor: currentTheme.txt,
            borderWidth: '1px',
            borderRadius: '1px',
            minWidth: '40px',
            maxWidth: '40px',
        },
        val: {
            fontSize: '10px',
            color: currentTheme.txt,
            backgroundColor: currentTheme.bg,
            borderColor: currentTheme.txt,
            borderWidth: '1px',
            borderRadius: '1px',
            minWidth: '40px',
            maxWidth: '40px',
        },


        editBtn: {
            margin: '2px',
            fontSize: '10px',
            fontWeight: '800',
            color: currentTheme.bg,
            backgroundColor: currentTheme.txt,
            borderColor: currentTheme.bg,
            borderWidth: '1px',
            borderRadius: '5px',
            minWidth: '40px',
            maxWidth: '40px'
        },
        redBtn: {
            margin: '2px',
            fontSize: '10px',
            fontWeight: '800',
            color: currentTheme.bg,
            backgroundColor: '#aa2222',

            borderColor: currentTheme.bg,
            borderWidth: '1px',
            borderRadius: '8px',
            minWidth: '25px',
            maxWidth: '25px'
        },
        in: {
            backgroundColor: 'transparent',
            margin: '2px',
            minWidth: '50px',
            maxWidth: '50px',
            borderWidth: '0px',
            borderRadius: '1px',
            alignText: 'center'
        },
        inVal: {
            margin: '2px',
            backgroundColor: 'transparent',

            minWidth: '35px',
            maxWidth: '35px',
            borderWidth: '0px',
            borderRadius: '1px',
            alignText: 'center'
        }



    }
    editCallback = obj.editFunc;
    deleteCallback = obj.deleteFunc;
    //console.log('JSON ', JSON.stringify(obj))
    return (
        <tr style={stl.line}>
            <td style={stl.label}>
                {obj.id}
            </td>
            <td style={stl.label}>
                {JSON.stringify(obj.id)}
            </td>
            <td style={stl.label}>
                <input style={stl.in} defaultValue={`${obj.A}`}></input>
            </td>
            <td style={stl.label}>
                <input style={stl.in} defaultValue={`${obj.B}`}></input>
            </td>
            <td style={stl.val}>
                <input style={stl.inVal} defaultValue={`${obj.C}`}></input>
            </td>
            <td style={stl.item}>
                <button style={stl.editBtn} onClick={onBtnEdit}>EDIT{obj.id}</button>
            </td>
            <td style={stl.item}>
                <button style={stl.redBtn} onClick={onBtnDelete}>X</button>
            </td>

        </tr>
    );
}

*/