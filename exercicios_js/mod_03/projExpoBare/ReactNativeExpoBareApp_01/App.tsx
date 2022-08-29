import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConcertCard from './components/ConcertCard';
import List from './components/list/List';
import { Ticket } from './components/ConcertCard';

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: '#121212' }]}>
      <ConcertCard {...{
        bandName: 'Carlinhos Brown',
        country: 'Brasil',
        city: 'Salvador',
        date: new Date('2022-09-22'),
        tickets: [
          { value: 100.58, type: 'standard' },
          { value: 170.35, type: 'vip' },
          { value: 300.40, type: 'platinum' }
        ],
        ticketsSimulation: [
          {
            amount: 2,
            type: "standard",
            value: 100,
          },
          {
            amount: 3,
            type: "vip",
            value: 300,
          },

        ]
      }} />

      <ConcertCard {...{
        bandName: 'Zeca Pagodinho',
        country: 'Brasil',
        city: 'Petrolina',
        date: new Date('2022-09-28'),
        tickets: [
          {value: 200.78, type: 'standard'},
          {value: 300.15, type: 'vip'},
          {value: 400.10, type: 'platinum'}
        ],
        ticketsSimulation: [
          {
            amount: 2,
            type: "standard",
            value: 200.78,
          },
          {
            amount: 3,
            type: "vip",
            value: 300,
          },
          {
            amount: 1,
            type: "platinum",
            value: 500,
          },

        ]

      }} />
      
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
