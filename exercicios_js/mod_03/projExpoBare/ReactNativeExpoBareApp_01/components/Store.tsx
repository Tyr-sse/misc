import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import TicketTypePannel from "./TicketTypePannel_trash";
export type Ticket = { type: "standard" | "vip" | "platinum", value: number };
export type TicketSimulation = Ticket & { amount: number };
const colours = {
    tint01: '#ffbb01',
    tint02: '#ff5501',
    bg: '#121212',
    bg2: '#222222',

    txt: '#888888',
    tag: '#9a9a9a',
};
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

type dClothingAd = {
    A: ClothingAd,
    B: ClothingAd
}

type ClothingAd = {
    title: string,
    type: string,
    color: string,
    originalValue: number,
    currentValue: number,
    isDiscounted: boolean,
    discount?: number,
    isInStock: boolean,
    description?: string,
    img?: { height: number, width: number, color?: string }
}

export default function Store() {
    const [st, setSt] = React.useState<boolean>(false)

    let L: any = [ //(ClothingAd | dClothingAd)[]
        {
            title: 'CAMISETA REGATA VERMELHA',
            type: 'camisa',
            currentValue: 15,
            color: 'red',
            originalValue: 20,
            description: 'Camiseta Regata Vermelha, levemente usada',
            isInStock: true,
            isDiscounted: false,
            img: { height: 50, width: 50, color: '#aa2222' }
        },
        {
            type: 'camisa',
            title: 'CAMISETA REGATA AMARELA',
            currentValue: 15,
            color: 'blue',
            originalValue: 20,
            description: 'Camiseta Regata Vermelha, levemente usada',
            isInStock: true,
            discount: 0,
            isDiscounted: false,
            img: { height: 80, width: 80, color: '#aaaa22' }
        },
        {
            type: 'camisa',
            title: 'CAMISETA REGATA GREEN',
            currentValue: 15,
            color: 'green',
            originalValue: 20,
            description: 'Camiseta Regata Vermelha, levemente usada',
            isInStock: true,
            isDiscounted: false,
            img: { height: 30, width: 80, color: '#22aa22' }
        },
        {
            type: 'camisa',
            title: 'CAMISETA REGATA VERMELHA',
            currentValue: 15,
            color: 'red',
            originalValue: 20,
            description: 'Camiseta Regata Vermelha, levemente usada',
            isInStock: true,
            discount: 0,
            isDiscounted: false
        },
        {
            type: 'camisa',
            title: 'CAMISETA REGATA VERMELHA',
            currentValue: 15,
            color: 'red',
            originalValue: 20,
            description: 'Camiseta Regata Vermelha, levemente usada',
            isInStock: true,
            discount: 0,
            isDiscounted: true
        },

    ];

    function card() {
        return (
            <View>
                ASD
            </View>
        );
    }


    if (!st) {
        let LL = [];
        for (let i = 0; i < L.length; i += 2) {
            LL.push({ A: L[i] ?? null, B: L[i + 1] ?? null });
        }
        L = LL;
    }
    let i = 0;
    return (
        <>
            <TouchableOpacity
                onPress={() => setSt(!st)}>
                <Text style={{ color: colours.txt }}>TEXT</Text>
            </TouchableOpacity>
            {L.map((product) => {
                return st ? (
                    <View key={i++}
                        style={
                            {
                                padding: 5,
                                backgroundColor: colours.bg2,

                                margin: 2,
                                borderColor: 'red',
                                borderWidth: 1,
                                borderRadius: 6,
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                            }
                        }>
                        <Text style={{ color: colours.txt }}>{product.title}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: 4 }}></View>
                            <Text style={{ color: colours.txt }}>{product.color} </Text>
                            <Text style={{ color: colours.txt }}>{product.currentValue} R$</Text>
                            <View style={{ width: 4 }}></View>

                        </View>
                        {product.img &&
                            <View
                                style={
                                    {
                                        height: product.img.height,
                                        width: product.img.width,
                                        borderColor: '#aaaaaa',
                                        borderWidth: 2,
                                        borderRadius: 6,
                                        margin: 8,
                                        backgroundColor: product.img.color
                                    }
                                }
                            ></View>}


                    </View>
                ) : (
                    <View style={{flexDirection: 'row'}}>
                        <View key={i++}
                            style={
                                {
                                    padding: 5,
                                    backgroundColor: colours.bg2,

                                    margin: 2,
                                    borderColor: 'red',
                                    borderWidth: 1,
                                    borderRadius: 6,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }
                            }>
                            <Text style={{ color: colours.txt }}>{product.A.title}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: 4 }}></View>
                                <Text style={{ color: colours.txt }}>{product.A.color} </Text>
                                <Text style={{ color: colours.txt }}>{product.A.currentValue} R$</Text>
                                <View style={{ width: 4 }}></View>

                            </View>
                            {product.img &&
                                <View
                                    style={
                                        {
                                            height: product.img.height,
                                            width: product.img.width,
                                            borderColor: '#aaaaaa',
                                            borderWidth: 2,
                                            borderRadius: 6,
                                            margin: 8,
                                            backgroundColor: product.img.color
                                        }
                                    }
                                ></View>}


                        </View>
                        <View key={i++}
                            style={
                                {
                                    padding: 5,
                                    backgroundColor: colours.bg2,

                                    margin: 2,
                                    borderColor: 'red',
                                    borderWidth: 1,
                                    borderRadius: 6,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    
                                }
                            }>
                            <Text style={{ color: colours.txt }}>{product.B?.title}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: 4 }}></View>
                                <Text style={{ color: colours.txt, fontSize: 8 }}>{product.B?.color} </Text>
                                <Text style={{ color: colours.txt, fontSize: 8 }}>{product.B?.currentValue} R$</Text>
                                <View style={{ width: 4 }}></View>

                            </View>
                            {product.img &&
                                <View
                                    style={
                                        {
                                            height: product.img.height,
                                            width: product.img.width,
                                            borderColor: '#aaaaaa',
                                            borderWidth: 2,
                                            borderRadius: 6,
                                            margin: 8,
                                            backgroundColor: product.img.color
                                        }
                                    }
                                ></View>}


                        </View>
                    </View>

                );

            })}

        </>
    );
}

