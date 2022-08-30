import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TicketTypePannel from "./TicketTypePannel_trash";
export type Ticket = { type: "standard" | "vip" | "platinum", value: number };
export type TicketSimulation = Ticket & { amount: number };
const colours = {
    tint01: '#01ffaa',
    tint02: '#6faaff',
    bg: '#121212',
    bg2: '#222222',

    txt: '#333333',
    tag: '#9a9a9a',
};

function formatNumber(val: number | string, int: number = 4, d: number = 2) {
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

}

const styles = StyleSheet.create({
    txt: {
        flex: 1,
        backgroundColor: 'transparent',
        color: colours.tint01,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lst_item: {
        backgroundColor: 'blue',
        width: 200,
        borderWidth: 2,
    },
    PetContainer: {
        backgroundColor: colours.txt,
        color: '#aaaaaa',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        padding: 8,
        marginVertical: 6,
        minWidth: 465,
        minHeight: 150,

    },
    row: { flexDirection: 'row' },
    infoWrapper: { color: '#ff00ff', flexDirection: 'column', flex: 1, marginHorizontal: 12, marginVertical: 3 },
    info: { color: colours.tint02, alignSelf: 'center', fontSize: 18, marginVertical: 12 },
    ticketType: {
        margin: 4,
        borderBottomColor: colours.tint01,
        borderRightColor: colours.tint01,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomRightRadius: 4,
        padding: 5,
        fontSize: 10,
        minWidth: 60,
        textAlign: 'center',
        
    },
    date: { fontSize: 12 },

    tag: { color: colours.tag, alignSelf: 'center', fontSize: 12 },
    btnSize: {
        width: 80,
        height: 25,
        padding: 5,

        textAlign: 'center',
        alignContent: 'center',


        fontSize: 12,
        fontWeight: 600,

        color: colours.bg,

        borderColor: colours.tint02,

        borderWidth: 0,
        borderRadius: 4,


        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBuy: {
        height: 20,
        minWidth: 80,
        maxWidth: 80,

        fontSize: 12,

        color: colours.tint01,
        borderColor: colours.tint01,
        backgroundColor: colours.bg,

        alignItems: 'center',

        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',


    }

});


interface modalidade {
    price: number,
    petSize: "small" | "medium" | "large",
    time: number //in minutes
}

export default function PetClipping() {
    const table: modalidade[] = [
        { price: 15, petSize: "small", time: 20 },
        { price: 24, petSize: "medium", time: 35 },
        { price: 35, petSize: "large", time: 50 }
    ];
    const [selectionSt, setSelectionSt] = useState<number>(0)
    return (
        <View style={styles.PetContainer}>

            <View style={{ padding: 5, flex: 1, justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: colours.tint02 }}>Selecione o porte do pet:</Text>
                <TouchableOpacity
                    onPress={() => setSelectionSt(0)}
                >
                    <Text style={[styles.btnSize, { backgroundColor: selectionSt == 0 ? colours.tint01 : colours.tint02, }]}>PEQUENO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectionSt(1)}
                >
                    <Text style={[styles.btnSize, { backgroundColor: selectionSt == 1 ? colours.tint01 : colours.tint02, }]}>MÉDIO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectionSt(2)}
                >
                    <Text style={[styles.btnSize, { backgroundColor: selectionSt == 2 ? colours.tint01 : colours.tint02, }]}>GRANDE</Text>
                </TouchableOpacity>

            </View>
            <View
                style={
                    {
                        minWidth: 100,
                        borderLeftColor: colours.tint01,
                        borderLeftWidth: 1,
                        paddingLeft: 15,
                        justifyContent: 'center',
                    }
                }>
                <Text
                    style={[styles.info, { fontSize: 14, marginBottom: 3 }]}
                >
                    Preço: {formatNumber(table[selectionSt].price, 2, 2)} R$
                </Text>

                <Text
                    style={[styles.info, { fontSize: 14, marginBottom: 3 }]}
                >
                    Tempo Esperado: {table[selectionSt].time} min
                </Text>
            </View>

        </View>
    );
}

