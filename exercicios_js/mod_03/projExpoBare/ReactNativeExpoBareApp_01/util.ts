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

    console.log(val, '>>', resu);

    return val;


}
//export function 


/*
F001Q001E001T20220831162030S00001

F001|...|...|..............|.............ID do Formulário
    |   |   |              |
....Q001|...|..............|................ID da Questão
        |   |              |
........E001|..............|..........ID do Entrevistador
            |              |
............T20220831162030|...............Marca de Tempo
                           |
...........................S00001 ..............Submissão
*/


