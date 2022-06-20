import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer,StyleSheet, Text, View } from '@react-navigation/native';
//import { StackNavigator } from '@react-navigation/stack';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createStackNavigation } from '@react-navigation/stack';
//import { createStack } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import StartMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
    
        {/* <Stack.Screen component="Home" name={HomeScreen} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
       
        {/* <Stack.Screen name:"Home" component:{HomeScreen} /> */}
    
        <Stack.Screen name="StarMap" component={StartMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
