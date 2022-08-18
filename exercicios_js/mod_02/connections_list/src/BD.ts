import { Iitem, leftZeroes, range } from "./global";
//MOCK
let mockLib = [[
    { "status": true, "id": "id_01_0010", "title": "LISTA 01 T01", "ref_list": [], "dt": new Date() },
    { "status": true, "id": "id_01_0011", "title": "LISTA 01 T02", "ref_list": [0], "dt": new Date() },
    { "status": true, "id": "id_01_0012", "title": "LISTA 01 T03", "ref_list": [0, 1], "dt": new Date() },
    { "status": true, "id": "id_01_0013", "title": "LISTA 01 T04", "ref_list": [0, 1, 2], "dt": new Date() },
    { "status": true, "id": "id_01_0014", "title": "LISTA 01 T05", "ref_list": [0, 1, 2, 3], "dt": new Date() },
    { "status": true, "id": "id_01_0015", "title": "LISTA 01 T06", "ref_list": [0, 1, 2, 3, 4], "dt": new Date() },
    { "status": true, "id": "id_01_0016", "title": "LISTA 01 T07", "ref_list": [0, 1, 2, 3, 4, 5], "dt": new Date() },
    { "status": true, "id": "id_01_0017", "title": "LISTA 01 T08", "ref_list": [0, 1, 2, 3, 4, 5, 6], "dt": new Date() },
    { "status": true, "id": "id_01_0018", "title": "LISTA 01 T09", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7], "dt": new Date() },
    { "status": true, "id": "id_01_0019", "title": "LISTA 01 T10", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7, 8], "dt": new Date() }
  ], [
    { "status": true, "id": "id_02_0020", "title": "LISTA 02 T01", "ref_list": [], "dt": new Date() },
    { "status": true, "id": "id_02_0021", "title": "LISTA 02 T02", "ref_list": [0], "dt": new Date() },
    { "status": true, "id": "id_02_0022", "title": "LISTA 02 T03", "ref_list": [0, 1], "dt": new Date() },
    { "status": true, "id": "id_02_0023", "title": "LISTA 02 T04", "ref_list": [0, 1, 2], "dt": new Date() },
    { "status": true, "id": "id_02_0024", "title": "LISTA 02 T05", "ref_list": [0, 1, 2, 3], "dt": new Date() },
    { "status": true, "id": "id_02_0025", "title": "LISTA 02 T06", "ref_list": [0, 1, 2, 3, 4], "dt": new Date() },
    { "status": true, "id": "id_02_0026", "title": "LISTA 02 T07", "ref_list": [0, 1, 2, 3, 4, 5], "dt": new Date() },
    { "status": true, "id": "id_02_0027", "title": "LISTA 02 T08", "ref_list": [0, 1, 2, 3, 4, 5, 6], "dt": new Date() },
    { "status": true, "id": "id_02_0028", "title": "LISTA 02 T09", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7], "dt": new Date() },
    { "status": true, "id": "id_02_0029", "title": "LISTA 02 T10", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7, 8], "dt": new Date() }
  ], [
    { "status": false, "id": "id_03_0030", "title": "LISTA 03 T01", "ref_list": [], "dt": new Date() },
    { "status": false, "id": "id_03_0031", "title": "LISTA 03 T02", "ref_list": [0], "dt": new Date() },
    { "status": false, "id": "id_03_0032", "title": "LISTA 03 T03", "ref_list": [0, 1], "dt": new Date() },
    { "status": false, "id": "id_03_0033", "title": "LISTA 03 T04", "ref_list": [0, 1, 2], "dt": new Date() },
    { "status": false, "id": "id_03_0034", "title": "LISTA 03 T05", "ref_list": [0, 1, 2, 3], "dt": new Date() },
    { "status": false, "id": "id_03_0035", "title": "LISTA 03 T06", "ref_list": [0, 1, 2, 3, 4], "dt": new Date() },
    { "status": false, "id": "id_03_0036", "title": "LISTA 03 T07", "ref_list": [0, 1, 2, 3, 4, 5], "dt": new Date() },
    { "status": false, "id": "id_03_0037", "title": "LISTA 03 T08", "ref_list": [0, 1, 2, 3, 4, 5, 6], "dt": new Date() },
    { "status": false, "id": "id_03_0038", "title": "LISTA 03 T09", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7], "dt": new Date() },
    { "status": false, "id": "id_03_0039", "title": "LISTA 03 T10", "ref_list": [0, 1, 2, 3, 4, 5, 6, 7, 8], "dt": new Date() }
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