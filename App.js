import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import StoresScreen from './containers/StoresScreen'
import ListScreen from './containers/ListScreen'
import {FontAwesome5, AntDesign} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            if (route.name === 'List') {
              return <AntDesign name='bars' size={size} color={color} />
            }
            else if (route.name === 'Stores') {
              return <FontAwesome5 name='store' size={size} color={color} />
            }
          }
        })}
        tabBarOptions={{
          activeTintColor: '#5088db',
          inactiveTintColor: 'gray'
        }}>
        {/* TODO - Move screen names into constants */}
        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen name="Stores" component={StoresScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
} 
