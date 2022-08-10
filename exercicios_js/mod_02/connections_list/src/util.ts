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