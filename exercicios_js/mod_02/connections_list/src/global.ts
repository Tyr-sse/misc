import React, { createContext } from "react"

export interface Iupdate { id: string, A: string, B: string, C: string }

export interface Iadd { A: string, B: string, C: string }

export interface Iitem {
    id: string,
    title: string,
    info: string,
    dt: Date,
    status: boolean
}

interface theme {
    id: string,
    txt: string,
    bg: string,
    bg02: string,
    bg03: string,
    tint01: string,
    tint02: string,


}

const dark: theme = {
    id: 'dark',
    txt: '#9a9a9a',
    bg: '#222222',
    bg02: '#333333',
    bg03: '#131313',
    tint01: '#777777',
    tint02: '#aa1212',
}
const light: theme = {
    id: 'light',
    txt: '#444444',
    bg: '#7a7a7a',
    bg02: '#aaaaaa',
    bg03: '#ffffff',
    tint01: '#49ff1c',
    tint02: '#aa1212',
}

export const themes_list: theme[] = [
    dark,
    light

]

//export let currentTheme: theme = {...light};
export let currentTheme: theme = { ...dark };




export function leftZeroes(val: (number | string), n: number) {
    n = Math.floor(n);
    val = '' + val;
    let str = val + '';
    let r = '';
    for (let i = 0; i < n - str.length; i++) r += '0';
    return r + str;
}

export function range(n: number) {
    let L = [];
    for (let i = 0; i < n; i++) L.push(i);
    return L;
}

export function dateToString(dt: Date) {
    return '' + leftZeroes(dt.getFullYear(), 4) + leftZeroes(dt.getMonth() + 1, 2) + leftZeroes(dt.getDate(), 2);
}
export function stringToDate(inputString: string) {
    const dateInfo = inputString.split('-').map((str) => +str);
    return new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]);
}

const algarisms = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export const ListContext = createContext<any>('');

export const listStl = {
    title: {
        backgroundColor: '#121212',
        color: '#a1a1a1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40px',
        borderRadius: '2px'
    },
    itemLine: {
        //backgroundColor: '#ff00ff',
        //color: '#a1a1a1',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: '80px',
        borderRadius: '2px'
    },
    itemTd: {
        minWidth: '80px', maxWidth: '80px'

    },
    lbl_01: {
        fontSize: '10px',
    },
    idLbl: {
        marginTop: '16px',
    }
    ,
    btnUpdate: {
        borderRadius: '8px',
        backgroundColor: 'var(--tint01)',
        fontWeight: '600',
        color: 'var(--bg)'
    },
    btnDelete: {
        borderRadius: '8px',
        backgroundColor: 'var(--red)',
        fontWeight: '600',
        color: 'var(--bg)',
        marginBottom: '-10px'
    }
}
