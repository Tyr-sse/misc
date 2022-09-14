import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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



export default function ConcertCard({ bandName, country, city, date, tickets }: IConcertCard) {
    //tickets : different types of tickets possible
    let [Y, M, D] = date.toISOString().slice(0, 10).split('-');
    let obj: any[] = [];
    const [ticketsForThisShow, setTicketsForThisShow] = useState<any>({});
    let Sum = 0;
    for (let type in ticketsForThisShow) {
        Sum += ticketsForThisShow[type].amount * ticketsForThisShow[type].value;
        console.log('> ', ticketsForThisShow[type].amount * ticketsForThisShow[type].value);
    }
    return (

        <View style={styles.ConcertContainer}>
            <View style={[styles.row, { justifyContent: 'center' }]}>
                <View>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.info}>{bandName}</Text>
                        <Text style={styles.tag}>Artista</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.infoWrapper}>
                            <Text style={[styles.info, { fontSize: 12 }]}>{city}</Text>
                            <Text style={[styles.info, { fontSize: 12 }]}>{country}</Text>

                            <Text style={styles.tag}>Local</Text>
                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={[styles.info, styles.date]}> </Text>
                            <Text style={[styles.info, styles.date]}>{D + '/' + M + '/' + Y}</Text>
                            <Text style={styles.tag}>Data</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.btnBuy}>COMPRAR</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ borderLeftWidth: 1, borderLeftColor: colours.tint01 }}>
                    <Text
                        style={[styles.info, { fontSize: 22, marginBottom: 3 }]}
                    >
                        TOTAL: {formatNumber(Sum)} R$
                    </Text>
                    {
                        tickets.map((el) => {
                            return (
                                <View style={[styles.info, styles.ticketType, { flexDirection: 'row' }]} key={el.type + '__'}>
                                    <TouchableOpacity style={styles.btnUpdt}
                                        onPress={() => {
                                            console.log(el);
                                            let newT = { ...ticketsForThisShow };
                                            console.log('>> ', el.value);

                                            newT[el.type] = {
                                                amount: ticketsForThisShow[el.type] && ticketsForThisShow[el.type].amount > 0 ? ticketsForThisShow[el.type].amount - 1 : 0,
                                                value: el.value
                                            }
                                            console.log('TS', newT);
                                            setTicketsForThisShow(newT)
                                        }
                                        }
                                    >
                                        <Text style={{ alignSelf: 'center' }}>-</Text>
                                    </TouchableOpacity>
                                    <Text
                                        style={[styles.info, { fontSize: 12, marginHorizontal: 3, minWidth: 80 }]}
                                    >
                                        {el.type.toUpperCase()}
                                    </Text>
                                    <Text
                                        style={[styles.info, { fontSize: 10, marginHorizontal: 3, minWidth: 60 }]}
                                    >
                                        <Text style={{color: colours.tint02}}> {
                                            ticketsForThisShow[el.type] ?
                                                ticketsForThisShow[el.type].amount :
                                                0
                                        } * {
                                            formatNumber(el.value)} R$ = {ticketsForThisShow[el.type] ?
                                                formatNumber(ticketsForThisShow[el.type].amount * el.value) :
                                                '0000.00'
                                            } R$ 
                                        )</Text>
                                    </Text>

                                    <TouchableOpacity style={styles.btnUpdt}
                                        onPress={() => {
                                            console.log(el);
                                            let newT = { ...ticketsForThisShow };
                                            console.log('>> ', el.value);

                                            newT[el.type] = {
                                                amount: ticketsForThisShow[el.type] ? ticketsForThisShow[el.type].amount + 1 : 1,
                                                value: el.value
                                            }
                                            console.log('TS', newT);
                                            setTicketsForThisShow(newT)
                                        }}
                                    >
                                        <Text style={{ alignSelf: 'center' }}>+</Text>
                                    </TouchableOpacity>

                                </View>
                            );


                        })
                    }

                </View>
            </View>



        </View>
    );
}

