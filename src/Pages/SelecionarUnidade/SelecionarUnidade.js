import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SelecionarUnidade = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SelecionarUnidade</Text>
      <Button
        title="Go to Entrar"
        onPress={() => navigation.navigate('Entrar')}
      />
    </View>
  );
}

export default SelecionarUnidade;