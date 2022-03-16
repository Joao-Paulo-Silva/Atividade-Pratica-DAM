import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  StatusBar,
} from 'react-native';

import { styles } from './styles';

export function Home() {
   return (
    <SafeAreaView style = {styles.fundo}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='#000000' 
      />
      <Text style = {styles.nome}>
        João Paulo da Silva Barros
      </Text>
    </SafeAreaView>
    
   );
}