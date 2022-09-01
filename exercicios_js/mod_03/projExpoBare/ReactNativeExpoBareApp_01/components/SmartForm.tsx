import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import ExclusiveOption from "./ExclusiveOption";
import FreeOption from "./FreeOption";
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

interface Ioption {
    type: ("inclusive" | "exclusive" | "intensity" | "free"),
    text: string,
    value?: string

}


interface Iquestion {
    id: string,
    text: string,
    inputs?: Ioption[],//STRING
    exclusive_options?: Ioption[],
    inclusive_options?: Ioption[],



}


interface getFormularios {//OPERAÇÂO GET FORMULARIOS
    forms: IPesquisa[],//RETORNA UMA LISTA DE PESQUISAS (FORMULARIOS)
}
interface IPesquisa {//CADA PESQUISA TEM UM ID, NOME E UMA LISTA DE PERGUNTAS (PODE TER UMA DESCRIÇÃO OPCIONAL)
    id_pesquisa: string | number,
    nome: string,
    pergunta: IPergunta[],
    descricao?: string


}
interface IPergunta {//CADA PERGUNTA DA LISTA TEM UM ID ()
    id_peergunta: string | number,
    texto_pergunta: string,
    tipo_pergunta: 'free' | 'multiple',//o tipo pode ter um dos dois valores, um para sinaliza texto livre, o outro sinaliza multipla escolha
    opcoes?: IOpcao[]//caso o campo "tipo_pergunta" tenha em si "multiple", este campo deve possuir em si as distintas opções de resposta
}
interface IOpcao {//Cada opção da lista
    texto_opcao: string,//texto a ser exibido ao entrevistador para esta opção
    valor_opcao: string //valor oculto da opção
    id_pergunta: string | number,// referência para a pergunta que o contém
}



export default function SmartForm(props: { questions_list: Iquestion[] }) {
    return (
        <FlatList
            data={props.questions_list}
            keyExtractor={(q) => {

                console.log('id> ', q.id);
                return q.id;
            }}
            renderItem={({ item }) => (
                <View style={
                    {
                        backgroundColor: '#aa22aa',
                        borderWidth: 1,
                        borderColor: '#ff00ff',
                        borderRadius: 5,
                        margin: 2,
                        minHeight: 50,
                        minWidth: 240,
                        maxWidth: 240
                    }
                }>
                    <Text style={{ fontSize: 18, fontWeight: 800 }}>{item.text}</Text>
                    {
                        item.inputs?.map(
                            (inp) => (
                                <View style={{ backgroundColor: 'teal' }}>
                                    <Text >
                                        {inp.type == 'exclusive' && <ExclusiveOption />}
                                        {inp.type == 'inclusive' && <Text>INC</Text>}
                                        {inp.type == 'free' && <FreeOption />}
                                        {/* type: ("inclusive" | "exclusive" | "intensity" | "free"), */}


                                    </Text>
                                    <Text >
                                        {inp.text}
                                    </Text>

                                </View>
                            )
                        )
                    }
                    {/* {JSON.stringify(item.inputs)} */}
                </View>)
            }
        />

    );
}

