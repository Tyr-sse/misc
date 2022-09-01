export interface IListItem {
    id: number,
    A: number,
    B: number,
    val: number

}
export interface Itheme {
    id: string,
    bg: string,
    bg1: string,
    bg2: string,
    bg3: string,

    txt: string,
    txt2: string,

    tint01: string,
    tint02: string,
    tint03: string,

}



const themesList: Itheme[] = [

    {

        id: 'dark',
        bg: '#222222',
        bg1: '#333333',
        bg2: '#444444',
        bg3: '#555555',

        txt: '#aaaaaa',
        txt2: '#bababa',

        tint01: '#121212',
        tint02: '#322323',
        tint03: '#424422',

    }


];



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

export function formatNumber(val: number | string, int: number = 4, d: number = 2) {
    let str = (val + '').split('.');
    //console.log('d: ', str);
    function zeroes(n: number) {
        if (n <= 0) return '';
        let zr = '';
        for (let i = 0; i < n; i++)
            zr += '0'
        return zr;
    }
    let dec = '';
    let resu = '';
    if (int > str[0].length) resu += zeroes(int - str[0].length) + str[0];
    else resu += str[0].substring(str[0].length - int);
    if (d <= 0) return resu;
    resu += ('.' + (str.length > 1 ? str[1] + zeroes(d - str[1].length) : zeroes(d))).substring(0, d + 1);
    return resu


}