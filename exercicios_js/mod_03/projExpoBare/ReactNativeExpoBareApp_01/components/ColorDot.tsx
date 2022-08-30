import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TicketTypePannel from "./TicketTypePannel_trash";
export type Ticket = { type: "standard" | "vip" | "platinum", value: number };
export type TicketSimulation = Ticket & { amount: number };
const colours = {
    tint01: '#444444',
    tint02: '#999999',
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
    dot: {
        backgroundColor: colours.txt,
        color: '#aaaaaa',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

        flexDirection: 'column',
        borderRadius: 8,
        padding: 8,
        marginVertical: 6,


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

export default function ColorDot() {
    const [textInputValue, setTextInputValue] = React.useState<string>('ffffff');
    let colorText = textInputValue;
    if (colorText[0] == '#') colorText = colorText.substring(1);
    //validar cor
    const hexAlgarisms = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']
    let err = false;
    if(colorText.length>8 || colorText.length<6 ) err = true;
    for (let letter of colorText) {
        if (!hexAlgarisms.includes(letter)) err = true;
    }

    const r = hexAlgarisms.indexOf(colorText[0]) * 16 + hexAlgarisms.indexOf(colorText[1])
    const g = hexAlgarisms.indexOf(colorText[2]) * 16 + hexAlgarisms.indexOf(colorText[3])
    const b = hexAlgarisms.indexOf(colorText[4]) * 16 + hexAlgarisms.indexOf(colorText[5])
    const a = hexAlgarisms.indexOf(colorText[6]) * 16 + hexAlgarisms.indexOf(colorText[7])
    


    colorText = err ? '000000' : colorText;
    //calcular rgb



    return (
        <View style={styles.dot}>
            <TextInput
                style={[{
                    height: 30,
                    width: 150,
                    borderRadius: 13,
                    borderWidth: 0,
                    //placeholderTextColor: colours.tint01,
                }, { backgroundColor: colours.tint02 }]}
                onChangeText={text => setTextInputValue(text)}
                value={textInputValue}
                placeholder="INSIRA A COR (EM HEXADECIMAL)"
            />
            <View style={{ margin: 20, height: 60, width: 60, borderRadius: '100%', backgroundColor: '#' + colorText }}></View>
            <Text
                style={[styles.info, { fontSize: 14, marginBottom: 3, color: 'red' }]}
            >
                {err?'COR INVÁLIDA':' '}
            </Text>
        </View>
    );
}

