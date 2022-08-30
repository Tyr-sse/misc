import React from "react";

const lst = [
    {
        id: 1,
        A: '1',
        B: '1',
        val: 2
    },
    { id: '001', nome: 'CARLOS' },
    { id: '002', nome: 'MACACOS' },


]


import { FlatList, StyleSheet, Text, View } from 'react-native';
export default function List() {
    let lid = 0;
    return (
        <View style={styles.txt}>
            LISTA
            <FlatList

                data={lst}
                keyExtractor={() => '>' + lid++}
                renderItem={(it) => {
                    console.log(it.item, lid)
                    return (<View style={styles.lst_item}>
                        {it.item.nome}
                    </View>);
                }} />
        </View>
    );

}


const styles = StyleSheet.create({
    txt: {
        flex: 1,
        backgroundColor: 'transparent',
        color: '#ffbb01',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lst_item: {
        backgroundColor: 'blue',
        width: 200,
        borderWidth: 2,
        //borderColor: currentTheme.txt
    }
});
