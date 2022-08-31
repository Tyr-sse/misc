import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


// const styles = StyleSheet.create({
//     txt: {
//         flex: 1,
//         backgroundColor: 'transparent',
//         color: '#ffbb01',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     lst_item: {
//         backgroundColor: 'blue',
//         width: 200,
//         borderWidth: 2,
//     },
//     ConcertContainer: {
//         backgroundColor: colours.txt,
//         color: '#aaaaaa',
//         justifyContent: 'space-between',
//         borderRadius: 8,
//         padding: 8,
//         marginVertical: 6,
//         minWidth: 400,

//     },
//     row: { flexDirection: 'row' },
//     infoWrapper: { color: '#ff00ff', flexDirection: 'column', flex: 1, marginHorizontal: 12, marginVertical: 3 },
//     info: { color: colours.tint01, alignSelf: 'center', fontSize: 18 },
//     ticketType: {
//         margin: 4,
//         borderBottomColor: colours.tint01,
//         borderRightColor: colours.tint01,
//         borderBottomWidth: 1,
//         borderRightWidth: 1,
//         borderBottomRightRadius: 4,
//         padding: 5,
//         fontSize: 10,
//         minWidth: 60,
//         textAlign: 'center'
//     },
//     date: { fontSize: 12 },

//     tag: { color: colours.tag, alignSelf: 'center', fontSize: 12 },
//     btnUpdt: {
//         width: 20,
//         height: 20,

//         fontSize: 12,

//         color: colours.bg,
//         backgroundColor: colours.tint01,
//         borderColor: colours.tint01,

//         borderWidth: 0,
//         borderRadius: 4,


//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     btnBuy: {
//         height: 20,
//         minWidth: 80,
//         maxWidth: 80,

//         fontSize: 12,

//         color: colours.tint01,
//         borderColor: colours.tint01,
//         backgroundColor: colours.bg,

//         alignItems: 'center',

//         alignSelf: 'center',
//         alignContent: 'center',
//         textAlign: 'center',
//         borderWidth: 1,
//         borderRadius: 4,
//         justifyContent: 'center',


//     }

// });



export default function FreeOption() {
    const [txt, setTxt] = React.useState<string>('');
    return (
        <TextInput 
            style={{backgroundColor: '#ffff00'}}
            value = {txt}
            onChange={(e)=>setTxt(''+e.target.value)}
        />
    );
}

