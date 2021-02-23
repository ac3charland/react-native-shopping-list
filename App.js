import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import StoresScreen from './containers/StoresScreen'
import ListScreen from './containers/ListScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Stores"
          component={StoresScreen}
        />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 
