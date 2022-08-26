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
        ticket: {value: 44445523},

      }} />
      {/* <List /> */}
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
