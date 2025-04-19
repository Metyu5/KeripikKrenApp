import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/pages/SplashScreen';
import {SafeAreaProvider } from 'react-native-safe-area-context';
import RegisterScreen from './src/pages/RegisterScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
