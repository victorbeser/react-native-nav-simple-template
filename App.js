import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entrar from './src/Pages/Entrar/Entrar';
import SelecionarUnidade from './src/Pages/SelecionarUnidade/SelecionarUnidade';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// const DetailsScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to HomeScreen"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrar">
        <Stack.Screen name="Entrar" component={Entrar} />
        <Stack.Screen name="SelecionarUnidade" component={SelecionarUnidade} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;