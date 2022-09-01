import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import ConcertCard from './components/ConcertCard';
import List from './components/list/List';
import { Ticket } from './components/ConcertCard';
import PetClipping from './components/PetClipping';
import ColorDot from './components/ColorDot';
import SmartForm from './components/SmartForm';
import Store from './components/Store';
generateMock(20)
function generateMock(n: number) {
  let L = [];
  // for (let i = 0; i < n; i++) {
  //   let form =
  //   {
  //     id_pesquisa: 'F'+leftZeroes(i,3)


  //   };
  //   if(i%4==0){
  //     form.exclusive_options = [1,2,3];
  //   }
  //   // exclusive_options: [

  //   // ],
  //   // inclusive_options: [

  //   // ],
    

  //   console.log('X> ', x);


  // }


}


const qList = [
  {
    id: '0001',
    text: 'Texto da Questao 01 - Questao de Multipla escolha com opções excludentes',
    inputs: [
      {
        type: 'exclusive',
        text: 'OPCAO 01 da Q 01'
      },
      {
        type: 'exclusive',
        text: 'OPCAO 02 da Q 01'
      },
      {
        type: 'exclusive',
        text: 'OPCAO 03 da Q 01'
      },
      {
        type: 'exclusive',
        text: 'OPCAO 04 da Q 01'
      },

    ]
  },
  {
    id: '0002',
    text: 'Texto da Questao 02',
    inputs: [
      {
        type: 'free',
        text: 'OPCAO 01 da Q 02'
      },
      {
        type: 'inclusive',
        text: 'OPCAO 02 da Q 02'
      },
      {
        type: 'inclusive',
        text: 'OPCAO 03 da Q 02'
      },
      {
        type: 'inclusive',
        text: 'OPCAO 04 da Q 02'
      },

    ]
  },
  {
    id: '0003',
    text: 'Texto da Questao 03',
    inputs: [
      {
        type: 'inclusive',
        text: 'OPCAO 01 da Q 03'
      },
      {
        type: 'inclusive',
        text: 'OPCAO 02 da Q 03'
      },
      {
        type: 'inclusive',
        text: 'OPCAO 03 da Q 03'
      },
      {
        type: 'inclusive',
        text: 'OPCAO 04 da Q 03'
      },

    ]
  },


]

export default function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  return (
    <View style={[styles.container, { backgroundColor: '#252525' }]}>
      <SafeAreaView>

        <Store />




        {/* <SmartForm questions_list={qList} /> */}
        <View style={{ flex: 1, justifyContent: "center" }}>


          {/*
          //size can be "small" or "large"
          <ActivityIndicator size="large" color="#ff2222" />
          <ActivityIndicator size="small" color="#22ff22" /> */}
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//https://github.com/fkbral/cerberus-react-native

//e-mail do prof:
//felipe.cabral@ada.tech
//https://stackoverflow.com/questions/52751874/expo-run-on-android-emulator-using-windows-10

/*
ENUNCIADOS:
Enunciado

Considere que os exercícios 1, 2, 3, 4 e 5 fazem parte do mesmo contexto. Uma plataforma de anúncios de roupas usadas precisa ajustar sua listagem de peças no app para suportar diferentes tipos de visualização. Para tal, faça uma tela para exibir as roupas com um botão para alternar entre uma visualização de lista (um item por linha) e mosaico (dois cards por linha). Para construir essa lista, leve em consideração o formato da peça abaixo:

type ClothingAd = {    title: string    type: string    color: string    originalValue: number    currentValue: number    isDiscounted: boolean
    isInStock: boolean}
Observação: você pode se basear na interface mobile dos produtos do https://www.etsy.com/ para criar essa exibição.

Enunciado

Mostre os produtos da plataforma com desconto utilizando uma cor de fundo #00f5d4, o preço original com um strikethrough e o preço atual ao lado (ex: R̶$̶ ̶1̶0̶0̶ → R$ 70,00). Além disso, diminua a opacidade de produtos fora de estoque para 0.5.

Enunciado

Faça um cabeçalho para a plataforma com o texto SwapVest (o texto “Swap” com cor #333 e “Vest” com cor #00f5d4) alinhado à esquerda e um botão de “fazer login” à direita.

Enunciado

Agora faça um botão que permita a um usuário fazer um bookmark das peças (salvar nos favoritos). Ao salvar um item, mude a cor de fundo do botão para #f15bb5. Extra: utilize um ícone em vez de um texto na ação de bookmark com a biblioteca https://github.com/oblador/react-native-vector-icons


*/