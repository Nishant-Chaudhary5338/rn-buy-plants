import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen name = "HomeScreen" component={ HomeScreen } />
        <Stack.Screen name = "DetailScreen" component = {DetailScreen } />
      </Stack.Navigator>
      </SafeAreaProvider>




    </NavigationContainer>
  );
}