let lib:Iitem[] = [];

export interface Iitem{
    id: string,
    A: string,
    B: string,
    C: number,
    editFunc: Function,
    deleteFunc: Function
} 

export function setLib(newLib:Iitem[]){
    //console.log('LIB SET TO: ', newLib)
    lib = newLib;

}
export function getLib(maxNum= -1, chunkPos=0 ){
    //console.log('LIB SET TO: ', newLib)
    return lib;
}
export function addItemToLib(item: Iitem){
    

}
export function deleteItemFromLib(item: Iitem){

}
export function positionOfItemInLib(item: Iitem){//returns -1 if not found

}