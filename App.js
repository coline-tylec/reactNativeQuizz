import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './components/Home'
import Game from './components/Game'

export default function App() {

  const [selectedComponent, setSelectedComponent] = useState('')

  function game () {
    console.log('Je suis dans le game')
    setSelectedComponent('Game')
  }

  let sc;
  let btn;
  if (selectedComponent === '') {
    sc = <Home game={game}/>
    btn = null
  } ;
  if (selectedComponent === 'Game') {
    sc = <Game/>
    btn = null
  } ;

  

  return (
    <View style={styles.container}>
      { btn }
      { sc }
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
