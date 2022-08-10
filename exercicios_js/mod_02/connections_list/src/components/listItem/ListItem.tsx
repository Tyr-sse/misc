import React from "react";
import { currentTheme } from "../../themes";
import { leftZeroes } from "../../util";
export default function ListItem(props: any) {
    const deflt = { A: 'A', B: 'B', C: 2.231, id: 0 };
    let obj = props.obj ?? deflt;
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
    return (
        <tr style={stl.line}>
            <td style={stl.label}>
                {obj.id}
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
                <button style={stl.editBtn} onClick={obj.editFunc}>EDIT</button>
            </td>
            <td style={stl.item}>
                <button style={stl.redBtn} onClick={obj.deleteFunc}>X</button>
            </td>
        </tr>
    );
}