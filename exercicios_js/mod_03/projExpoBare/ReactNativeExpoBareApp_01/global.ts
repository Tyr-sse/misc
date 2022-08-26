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