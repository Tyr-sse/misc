import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TicketTypePannel from "./TicketTypePannel";
export type Ticket = { type: "standard" | "vip" | "platinum", value: number };
export type TicketSimulation = Ticket & { amount: number };
const colours = {
    tint01: '#ffbb01',
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
    ticketsSimulation: TicketSimulation[]
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
        marginVertical: 6

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
        borderWidth: 1,
        borderColor: colours.tint01,
        borderRadius: 4,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        color: colours.bg,
        backgroundColor: colours.tint01,
    },

});



export default function ConcertCard({ bandName, country, city, date, tickets, ticketsSimulation }: IConcertCard) {
    let [Y, M, D] = date.toISOString().slice(0, 10).split('-');
    let obj: any[] = [];

    let Sum = 0;
    for (let ticket of ticketsSimulation) {
        Sum += ticket.amount * ticket.value;
        obj.push({ ...ticket, sum: ticket.amount * ticket.value });
    }
    console.log("OBJ ", obj, Sum);

    //const sum = ticketsSimulation.reduce((acc, curr) => acc + curr.amount * curr.value, 0);
    return (

        <View style={styles.ConcertContainer}>
            <View style={styles.row}>

                {/* <View style={styles.infoWrapper}>
                    <Text style={styles.info}>{'' + ticket.value} R$</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.info}>{'' + ticket.type.toUpperCase()}</Text>
                    <Text style={styles.tag}>Tipo</Text>
                </View> */}
                <View>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.info}>{bandName}</Text>
                        <Text style={styles.tag}>Artista</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.infoWrapper}>
                            <Text style={[styles.info, { fontSize: 12 }]}>{city + ' - ' + country}</Text>
                            <Text style={styles.tag}>Local</Text>
                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={[styles.info, styles.date]}>{D + '/' + M + '/' + Y}</Text>
                            <Text style={styles.tag}>Data</Text>
                        </View>
                    </View>

                </View>
                <View style={{ borderLeftWidth: 1, borderLeftColor: colours.tint01 }}>
                    {/* <TicketTypePannel values={[200.3, 233, 44]} /> */}
                    <Text
                        style={[styles.info, { fontSize: 22, marginBottom: 3 }]}
                    >
                        {Sum} R$
                    </Text>
                    {
                        //var arr = [55, 44, 65,1,2,3,3,34,5];
                        //var unique = [...new Set(arr)]
                        obj.map((el) => {
                            return (
                                <View style={[styles.info, styles.ticketType, { flexDirection: 'row' }]}>
                                    <TouchableOpacity style={styles.btnUpdt}
                                        onPress={() => { }}
                                    >
                                        <Text style={{ alignSelf: 'center' }}>-</Text>
                                    </TouchableOpacity>
                                    <Text
                                        style={[styles.info, { fontSize: 8, marginHorizontal: 3, minWidth: 80 }]}
                                    >
                                        {el.type.toUpperCase()} ({2})
                                    </Text>
                                    <TouchableOpacity style={styles.btnUpdt}
                                        onPress={() => { }}
                                    >
                                        <Text style={{ alignSelf: 'center' }}>+</Text>
                                    </TouchableOpacity>
                                </View>);


                        })
                    }

                </View>
            </View>



        </View>
    );
}

