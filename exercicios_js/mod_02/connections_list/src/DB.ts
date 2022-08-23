import { Iitem, leftZeroes, range } from "./global";
//MOCK
let mockLib = [[
    { "status": true, "id": "0010", "title": "L 01 T 01", "info": 'info_1_01', "dt": new Date() },
    { "status": true, "id": "0011", "title": "L 01 T 02", "info": 'info_1_02', "dt": new Date() },
    { "status": true, "id": "0012", "title": "L 01 T 03", "info": 'info_1_03', "dt": new Date() },
    { "status": true, "id": "0013", "title": "L 01 T 04", "info": 'info_1_04', "dt": new Date() },
    { "status": true, "id": "0014", "title": "L 01 T 05", "info": 'info_1_05', "dt": new Date() },
    { "status": true, "id": "0015", "title": "L 01 T 06", "info": 'info_1_06', "dt": new Date() },
    { "status": true, "id": "0016", "title": "L 01 T 07", "info": 'info_1_07', "dt": new Date() },
    { "status": true, "id": "0017", "title": "L 01 T 08", "info": 'info_1_08', "dt": new Date() },
    { "status": true, "id": "0018", "title": "L 01 T 09", "info": 'info_1_09', "dt": new Date() },
    { "status": true, "id": "0019", "title": "L 01 T 10", "info": 'info_1_10', "dt": new Date() }
], [
    { "status": true, "id": "0010", "title": "L 01 T 01", "info": 'info_2_01', "dt": new Date() },
    { "status": true, "id": "0011", "title": "L 01 T 02", "info": 'info_2_02', "dt": new Date() },
    { "status": true, "id": "0012", "title": "L 01 T 03", "info": 'info_2_03', "dt": new Date() },
    { "status": true, "id": "0013", "title": "L 01 T 04", "info": 'info_2_04', "dt": new Date() },
    { "status": true, "id": "0014", "title": "L 01 T 05", "info": 'info_2_05', "dt": new Date() },
    { "status": true, "id": "0015", "title": "L 01 T 06", "info": 'info_2_06', "dt": new Date() },
    { "status": true, "id": "0016", "title": "L 01 T 07", "info": 'info_2_07', "dt": new Date() },
    { "status": true, "id": "0017", "title": "L 01 T 08", "info": 'info_2_08', "dt": new Date() },
    { "status": true, "id": "0018", "title": "L 01 T 09", "info": 'info_2_09', "dt": new Date() },
    { "status": true, "id": "0019", "title": "L 01 T 10", "info": 'info_2_10', "dt": new Date() }
], [
    { "status": true, "id": "0010", "title": "L 01 T 01", "info": 'info_3_01', "dt": new Date() },
    { "status": true, "id": "0011", "title": "L 01 T 02", "info": 'info_3_02', "dt": new Date() },
    { "status": true, "id": "0012", "title": "L 01 T 03", "info": 'info_3_03', "dt": new Date() },
    { "status": true, "id": "0013", "title": "L 01 T 04", "info": 'info_3_04', "dt": new Date() },
    { "status": true, "id": "0014", "title": "L 01 T 05", "info": 'info_3_05', "dt": new Date() },
    { "status": true, "id": "0015", "title": "L 01 T 06", "info": 'info_3_06', "dt": new Date() },
    { "status": true, "id": "0016", "title": "L 01 T 07", "info": 'info_3_07', "dt": new Date() },
    { "status": true, "id": "0017", "title": "L 01 T 08", "info": 'info_3_08', "dt": new Date() },
    { "status": true, "id": "0018", "title": "L 01 T 09", "info": 'info_3_09', "dt": new Date() },
    { "status": true, "id": "0019", "title": "L 01 T 10", "info": 'info_3_10', "dt": new Date() }
]
    ,

]


//META INFO
let lib: any[] = [];
let lid = 0;

// function newItem({ id, A, B, C }) {
//     return 2

// }

export function setLib(newLib?: any) {
    //checar formato
    console.log('LIB SET TO: ', newLib ?? mockLib)
    lib = newLib ?? mockLib;
    updateLibMetaInfo();
    // localStorage.clear();
    // localStorage.setItem('lib', JSON.stringify(lib));
}
function updateLibMetaInfo() {
    lid = 0;
    for (let el of lib) {
        const cid = +el.id;
        if (cid > lid) lid = cid;
    }
}

// export function getFromLS() {
//     return JSON.parse(localStorage.getItem('lib'));
//}




export function getLib(maxNum = -1, chunkPos = 0) {
    //console.log('LIB SET TO: ', newLib)
    return lib;
}






export function addItemToLib(pos: number, title: string, ref_list: string, dt: string) {
    lid++;
    console.log('DT ', dt)
    const newId = leftZeroes(lid, 4);
    let obj = {
        id: newId,
        status: false,
        title: title,
        ref_list: [0, 2],
        dt: new Date(dt),
    }
    console.log('ATUALIZADO', obj, ' A LISTA[' + pos + '](', lib[pos], ')')
    lib[pos].push(obj);

}
export function deleteItemFromLib(lp: number, p: number) {
    console.log("DELETE_____", lp, p);
    console.log(JSON.stringify(lib));
    if (lib[lp][p]) lib[lp].splice(p, 1);
    console.log('\n___DESPUES ', JSON.stringify(lib));
}




//===========>>===========>>===========>>==========
//===========>>===========>>===========>>==========
//===========>>===========>>===========>>==========
//===========>>===========>>===========>>==========
export function updateItemFromLib(lp: number, p: number, newValue: Iitem, appUpdateCallback: Function) {
    console.log('TST 01 ', JSON.stringify(lib))
    console.log('DB got data: ', newValue)
    if (!lib[lp][p]) return appUpdateCallback(-1);
    lib[lp][p] = newValue;
    appUpdateCallback(0);
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

}

