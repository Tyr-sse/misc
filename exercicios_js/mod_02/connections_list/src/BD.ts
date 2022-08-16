import { leftZeroes, range } from "./global";

//META INFO
let lib: Iitem[] = [];
let lid = 0;

export interface Iitem {
    id: string,
    A: string,
    B: string,
    C: number,
}

// function newItem({ id, A, B, C }) {
//     return 2

// }

export function setLib(newLib: Iitem[]) {
    //console.log('LIB SET TO: ', newLib)
    lib = newLib;
    updateLibMetaInfo();

}
function updateLibMetaInfo() {
    lid = 0;
    for (let el of lib) {
        const cid = +el.id;
        if (cid > lid) lid = cid;
    }
}
export function getLib(maxNum = -1, chunkPos = 0) {
    //console.log('LIB SET TO: ', newLib)
    return lib;
}






export function addItemToLib(A: string, B: string, C: number) {
    lid++;
    const newId = leftZeroes(lid, 4);
    lib.push({
        id: newId,
        A: A,
        B: B,
        C: C
    });

}
export function deleteItemFromLib(id: string) {
    console.log('ENTROU NA DEL BD');
    console.log('TST 01 ', JSON.stringify(lib))
    let pos = -1;
    for (let i = 0; i < lib.length; i++) {
        if (+lib[i].id === +id) {
            pos = i; break;
        }
    }
    if (pos == -1) return;//NÃO ENCONTRADO
    console.log("ENCONTRADO ", 'POS: ' + pos, 'VALOR: ', lib[pos]);
    lib.splice(pos, 1);
    console.log('TST 02 ', JSON.stringify(lib))
}
export function updateItemFromLib(item: Iitem) {
    //console.log('TST 01 ', JSON.stringify(lib))
    let pos = -1;
    for (let i = 0; i < lib.length; i++) {
        if (+lib[i].id === +item.id) {
            pos = i; break
        };
    }
    if (pos == -1) return;//NÃO ENCONTRADO
    lib[pos] = item;
}

export function persistLib(){
    localStorage.clear();
    console.log('LS ANTES ', localStorage)
    localStorage.setItem("lib", JSON.stringify(lib));
    console.log('LS DPS ', localStorage)

}

export function refreshLib(){
    localStorage.clear();
    //lib = JSON.parse( localStorage.getItem("lib") );

    
}


//let nodes = [];


// function generateConnections(n: number) {

//     let L = [];
//     for (let it of range(n)) {
//         let a = alphabet[Math.floor(Math.random() * 100) % alphabet.length];
//         let b = alphabet[Math.floor(Math.random() * 100) % alphabet.length];
//         if (b == a) b = 'A';
//         L.push(
//             {
//                 id: leftZeroes(it, 4),
//                 A: a,
//                 B: b,
//                 C: +((Math.floor(Math.random() * 10 % 10) + '').substring(0, 6)),
//                 editFunc: editItem,
//                 deleteFunc: deleteItem

//             }
//         )
//     }
//     return L;


// }