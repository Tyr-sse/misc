export interface Iadd{
    id: string,
    
}


export interface IchildToParent {
    operation: string,
    payload: any
  
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
    tint01: '#49ff1c',
    tint02: '#992244',
}
const light: theme = {
    id: 'dark',
    txt: '#222222',
    bg: '#9a9a9a',
    bg02: '#aaaaaa',
    bg03: '#ffffff',
    tint01: '#49ff1c',
    tint02: '#992244',
}

export const themes_list: theme[] = [
    dark,
    light

]

//export let currentTheme: theme = {...light};
export let currentTheme: theme = {...dark};




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
