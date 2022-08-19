import { Iitem, leftZeroes, range } from "./global";
//MOCK
let mockLib = [[
    { "status": true, "id": "0010", "title": "L 01 T 01", "ref_list": [], "dt": new Date() },
    { "status": true, "id": "0011", "title": "L 01 T 02", "ref_list": [0], "dt": new Date() },
    { "status": false, "id": "0012", "title": "L 01 T 03", "ref_list": [0, 1], "dt": new Date() },
    { "status": false, "id": "0013", "title": "L 01 T 04", "ref_list": [0, 1, 2], "dt": new Date() },
    { "status": true, "id": "0014", "title": "L 01 T 05", "ref_list": [0, 1, 2, 3], "dt": new Date() },
    { "status": true, "id": "0015", "title": "L 01 T 06", "ref_list": [0, 1, 2, 3, 4], "dt": new Date() },
    { "status": true, "id": "0016", "title": "L 01 T 07", "ref_list": [0, 1, 2, 3, 4, 5], "dt": new Date() },
    { "status": true, "id": "0017", "title": "L 01 T 08", "ref_list": [0, 1, 2, 3, 4, 5, 6], "dt": new Date() },
    { "status": true, "id": "0018", "title": "L 01 T 09", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7], "dt": new Date() },
    { "status": true, "id": "0019", "title": "L 01 T 10", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7, 8], "dt": new Date() }
  ], [
    { "status": true, "id": "0020", "title": "L 02 T 01", "ref_list": [], "dt": new Date() },
    { "status": true, "id": "0021", "title": "L 02 T 02", "ref_list": [0], "dt": new Date() },
    { "status": true, "id": "0022", "title": "L 02 T 03", "ref_list": [0, 1], "dt": new Date() },
    { "status": true, "id": "0023", "title": "L 02 T 04", "ref_list": [0, 1, 2], "dt": new Date() },
    { "status": true, "id": "0024", "title": "L 02 T 05", "ref_list": [0, 1, 2, 3], "dt": new Date() },
    { "status": true, "id": "0025", "title": "L 02 T 06", "ref_list": [0, 1, 2, 3, 4], "dt": new Date() },
    { "status": true, "id": "0026", "title": "L 02 T 07", "ref_list": [0, 1, 2, 3, 4, 5], "dt": new Date() },
    { "status": true, "id": "0027", "title": "L 02 T 08", "ref_list": [0, 1, 2, 3, 4, 5, 6], "dt": new Date() },
    { "status": true, "id": "0028", "title": "L 02 T 09", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7], "dt": new Date() },
    { "status": true, "id": "0029", "title": "L 02 T 10", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7, 8], "dt": new Date() }
  ], [
    { "status": false, "id": "0030", "title": "L 03 T 01", "ref_list": [], "dt": new Date() },
    { "status": false, "id": "0031", "title": "L 03 T 02", "ref_list": [0], "dt": new Date() },
    { "status": false, "id": "0032", "title": "L 03 T 03", "ref_list": [0, 1], "dt": new Date() },
    { "status": false, "id": "0033", "title": "L 03 T 04", "ref_list": [0, 1, 2], "dt": new Date() },
    { "status": false, "id": "0034", "title": "L 03 T 05", "ref_list": [0, 1, 2, 3], "dt": new Date() },
    { "status": false, "id": "0035", "title": "L 03 T 06", "ref_list": [0, 1, 2, 3, 4], "dt": new Date() },
    { "status": false, "id": "0036", "title": "L 03 T 07", "ref_list": [0, 1, 2, 3, 4, 5], "dt": new Date() },
    { "status": false, "id": "0037", "title": "L 03 T 08", "ref_list": [0, 1, 2, 3, 4, 5, 6], "dt": new Date() },
    { "status": false, "id": "0038", "title": "L 03 T 09", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7], "dt": new Date() },
    { "status": false, "id": "0039", "title": "L 03 T 10", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7, 8], "dt": new Date() }
  ]
    ,
  
  ]


//META INFO
let lib:any[] = [];
let lid = 0;

// function newItem({ id, A, B, C }) {
//     return 2

// }

export function setLib(newLib?: any) {
    //checar formato
    console.log('LIB SET TO: ', newLib??mockLib)
    lib = newLib??mockLib;
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






export function addItemToLib( pos:number, title: string, ref_list: string, dt: string ) {
    lid++;
    const newId = leftZeroes(lid, 4);
    let obj = {
        id: newId,
        status: false,
        title: title,
        ref_list: [0,2], 
        dt:new Date(dt),
    }
    console.log('ATUALIZADO' ,obj, ' A LISTA['+pos+'](', lib[pos],')')
    lib[pos].push(obj);

}
export function deleteItemFromLib(lp: number, p: number) {
    console.log("DELETE_____", lp, p);
    console.log(JSON.stringify(lib));
    if(lib[lp][p]) lib[lp].splice(p,1);
    console.log('\n___DESPUES ',JSON.stringify(lib));
}




//===========>>===========>>===========>>==========
//===========>>===========>>===========>>==========
//===========>>===========>>===========>>==========
//===========>>===========>>===========>>==========
export function updateItemFromLib(lp: number, p: number, newValue: Iitem) {
    //console.log('TST 01 ', JSON.stringify(lib))
    if(!lib[lp][p]) return;
    else lib[lp][p] = newValue;
}
//===========>>===========>>===========>>==========
//===========>>===========>>===========>>==========
//===========>>===========>>===========>>==========
//===========>>===========>>===========>>==========




export function persistLib() {
    localStorage.clear();
    console.log('LS ANTES ', localStorage)
    localStorage.setItem("lib", JSON.stringify(lib));
    console.log('LS DPS ', localStorage)

}

export function refreshLib() {
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