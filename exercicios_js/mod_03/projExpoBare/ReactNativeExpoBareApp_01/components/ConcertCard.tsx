import React from "react";

import { FlatList, StyleSheet, Text, View } from 'react-native';
export type Ticket = { value: number };
interface IConcertCard {
    bandName: string,
    country: string,
    city: string,
    date: Date,
    ticket: Ticket,
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
    },
    ConcertContainer: {
        backgroundColor: '#333333',
        color: '#aaaaaa',
        justifyContent: 'space-between',

    },
    infoWrapper: { color: '#ff00ff', flexDirection: 'column', marginHorizontal: 'auto' },
    info: { color: '#ffbb01', alignSelf: 'center'},
    tag: { color: '#9a9a9a', alignSelf: 'center', fontSize: 10 },

});



export default function ConcertCard({ bandName, country, city, date, ticket }: IConcertCard) {
    // function InfoCard(props: { value: string, tag: string }) {

    //     return (
    //         <View style={styles.infoWrapper}>
    //             <View style={styles.info}>{props.value}</View>
    //             <View style={styles.tag}>{props.tag}</View>
    //         </View>
    //         );
    // }

    let [Y, M, D] = date.toISOString().slice(0, 10).split('-');

    return (
        <View style={styles.ConcertContainer}>
            <View style={styles.infoWrapper}>
                <View style={styles.info}>{'' + ticket.value}</View>
                <View style={styles.tag}>Número do Ticket</View>
            </View>
            <View style={styles.infoWrapper}>
                <View style={styles.info}>{bandName}</View>
                <View style={styles.tag}>Artista</View>
            </View>
            <View style={styles.infoWrapper}>
                <View style={[styles.info, { fontSize: 12}]}>{city + ' - ' + country}</View>
                <View style={styles.tag}>Local</View>
            </View>
            <View style={styles.infoWrapper}>
                <View style={styles.info}>{D + '/' + M + '/' + Y}</View>
                <View style={styles.tag}>Data</View>
            </View>

            {/* <View style={styles.info}>{bandName}</View>
            <View style={styles.info}>{country}</View>
            <View style={styles.info}>{city}</View> */}
            {/* <View style={styles.info}>{date}</View> */}
            {/* <View style={styles.info}>{ticket}</View> */}



        </View>);
}

