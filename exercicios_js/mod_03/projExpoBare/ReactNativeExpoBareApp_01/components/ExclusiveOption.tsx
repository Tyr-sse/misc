import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TicketTypePannel from "./TicketTypePannel_trash";
export type Ticket = { type: "standard" | "vip" | "platinum", value: number };
export type TicketSimulation = Ticket & { amount: number };
const colours = {
    tint01: '#ffbb01',
    tint02: '#ff5501',
    bg: '#121212',
    bg2: '#222222',

    txt: '#333333',
    tag: '#9a9a9a',
};

interface IConcertCard {
    bandName: string,
    country: string,
    city: string,
    date: Date,
    tickets: Ticket[],
}
console.log('STR ', formatNumber(1234567891.123456, 10, 5))
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

    console.log(val, '>>', resu);

    return val;


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
    },
    ConcertContainer: {
        backgroundColor: colours.txt,
        color: '#aaaaaa',
        justifyContent: 'space-between',
        borderRadius: 8,
        padding: 8,
        marginVertical: 6,
        minWidth: 400,

    },
    row: { flexDirection: 'row' },
    infoWrapper: { color: '#ff00ff', flexDirection: 'column', flex: 1, marginHorizontal: 12, marginVertical: 3 },
    info: { color: colours.tint01, alignSelf: 'center', fontSize: 18 },
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
        textAlign: 'center'
    },
    date: { fontSize: 12 },

    tag: { color: colours.tag, alignSelf: 'center', fontSize: 12 },
    btnUpdt: {
        width: 20,
        height: 20,

        fontSize: 12,

        color: colours.bg,
        backgroundColor: colours.tint01,
        borderColor: colours.tint01,

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



export default function ExclusiveOption(props: { txt: string, ref: any }) {
    const [st, setSt] = React.useState<boolean>(false);
    return (
        <TouchableOpacity
            onPress={()=>{
                console.log('PRESSED')
            }}

            style={{
                backgroundColor: 'transparent',
                height: 20,
                width: 30,
                alignItems: 'center',
                alignContent: 'center',
                padding: 4,
            }}>
            <View
                style={
                    {
                        marginVertical: 0,
                        height: 20,
                        width: 20,
                        backgroundColor: 'transparent',
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        borderWidth: 2,
                        borderColor: 'black'
                    }
                } >{
                    st && <View
                        style={
                            {
                                height: 12,
                                width: 12,
                                backgroundColor: 'black',
                                borderRadius: 100,
                            }
                        } />
                }
            </View>

        </TouchableOpacity>
    );
}

