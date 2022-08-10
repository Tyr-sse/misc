export let lib:Iitem[] = [];

export interface Iitem{
    id: string,
    A: string,
    B: string,
    C: number,
    editFunc: Function,
    deleteFunc: Function
} 


export function addItemToLib(item: Iitem){
    

}
export function deleteItemFromLib(item: Iitem){

}
export function positionOfItemInLib(item: Iitem){//returns -1 if not found

}