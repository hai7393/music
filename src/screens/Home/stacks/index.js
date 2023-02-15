import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import HeaderHome from '../component/Header'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Suggested from '../component/Suggested';
import { useThemeMode } from '@rneui/themed';
import { activeDark, activeLight, backgroundDark, backgroundLight } from '../../../components/constant';
const Tab = createMaterialTopTabNavigator();
const Screen = () => {
  return (
    <View></View>
  )
}
const HomeScreen = () => {
  const {mode} = useThemeMode();
  return (
    <SafeAreaProvider>
      <HeaderHome />
      <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor:mode=='dark'?backgroundDark:backgroundLight
      }}
      screenOptions={{
        tabBarStyle:{
          height:50,
          backgroundColor:mode=='dark'?backgroundDark:backgroundLight,
          paddingTop:5
        },
        tabBarScrollEnabled:true,
        tabBarActiveTintColor:mode==='light'?activeLight:activeDark,
        tabBarInactiveTintColor:mode ==='light'?activeLight:activeDark,
        tabBarItemStyle:{
          width:'auto',
          alignItem:'flex-start'
        }
      }}
      >
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Songs" component={Screen} />
      <Tab.Screen name="Artists" component={Screen} />
      <Tab.Screen name="Albums" component={Screen} />
      <Tab.Screen name="Favorites" component={Screen} />
    </Tab.Navigator>
    </SafeAreaProvider>
  )
}

export default HomeScreen