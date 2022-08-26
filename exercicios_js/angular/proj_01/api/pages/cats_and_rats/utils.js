import React, { createContext } from "react"


export function leftZeroes(val, n) {
    n = Math.floor(n);
    val = '' + val;
    let str = val + '';
    let r = '';
    for (let i = 0; i < n - str.length; i++) r += '0';
    return r + str;
}

export function range(n) {
    let L = [];
    for (let i = 0; i < n; i++) L.push(i);
    return L;
}

export function dateToString(dt) {
    return '' + leftZeroes(dt.getFullYear(), 4) + leftZeroes(dt.getMonth() + 1, 2) + leftZeroes(dt.getDate(), 2);
}
export function stringToDate(inputString) {
    const dateInfo = inputString.split('-').map((str) => +str);
    return new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]);
}

const algarisms = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
