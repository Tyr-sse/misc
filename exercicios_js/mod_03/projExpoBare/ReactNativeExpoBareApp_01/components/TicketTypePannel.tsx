import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export type Ticket = { type: "standard" | "vip" | "platinum", value: number };
const colours = {
    tint01: '#ffbb01',
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
        borderColor: colours.tint01,
        borderWidth: 1,
        borderRadius: 4,
        padding: 5,
        fontSize: 10,
        minWidth: 60,
        textAlign: 'center'
    },
    date: { fontSize: 12 },

    tag: { color: colours.tag, alignSelf: 'center', fontSize: 12 },

});



export default function TicketTypePannel(props: { values: number[] }) {
    const [ticketType, setTicketType] = useState<number>(0);
    console.log('RERENDER TICKET', ticketType, props.values);
    /* 
        ticketType:
            0 - standard
            1 - vip
            2 - platinum
    */

    return (
        <View style={styles.ConcertContainer}>
            
            {/* <Text
                style={[styles.info, { fontSize: 24, marginBottom: 3 }]}
            >
                {props.values[ticketType]}R$
            </Text>
            <TouchableOpacity onPress={() => setTicketType(0)}>
                <Text
                    style={[styles.info, styles.ticketType]}
                >
                    STANDARD
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTicketType(1)}>
                <Text
                    style={[styles.info, styles.ticketType]}
                >
                    VIP
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTicketType(2)}>
                <Text
                    style={[styles.info, styles.ticketType]}
                >
                    PLATINUM
                </Text>
            </TouchableOpacity> */}
            <View></View>

        </View>
    );
}

