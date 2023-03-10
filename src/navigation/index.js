import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingScreen from '../screens/Setting'
import FavoriteStackScreen from './favoriteStack'
import HomeStackScreen from './homeStack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useThemeMode } from '@rneui/themed';
import { backgroundDark, backgroundLight } from '../components/constant'
import Playlist from '../screens/Home/stacks/playlist'
const Tab = createBottomTabNavigator()
const MyApp = () => {
  const { mode } = useThemeMode();
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown:false,
          tabBarActiveTintColor:'orange',
          tabBarStyle:{
            borderTopLeftRadius:21,
            borderTopRightRadius:21,
            borderLeftWidth:0.1,
            borderRightWidth:0.1,
            position:'absolute',
            backgroundColor:mode=='dark'?backgroundDark:backgroundLight,
            paddingVertical:20,
            height:90
          }
        })}
      >
        <Tab.Screen 
        name="HomeScreen" 
        component={HomeStackScreen} 
        options={{
            tabBarLabel:"Home",
            tabBarIcon:({color})=>(
                <MaterialCommunityIcons name="home" color={color} size={26}/>
            )

        }}
        />
        <Tab.Screen 
        name="Favorites" 
        component={FavoriteStackScreen} 
        options={{
            tabBarLabel:"Favorites",
            tabBarIcon:({color})=>(
                <MaterialCommunityIcons name="heart" color={color} size={26}/>
            )
        }}
        />
        <Tab.Screen 
        name="Playlist" 
        component={Playlist} 
        options={{
            tabBarLabel:"Playlist",
            tabBarIcon:({color})=>(
                <MaterialCommunityIcons name="playlist-music" color={color} size={26}/>
            )
        }}
        />
        <Tab.Screen 
        name="Settings" 
        component={SettingScreen} 
        options={{
            tabBarLabel:"Settings",
            tabBarIcon:({color})=>(
                <MaterialCommunityIcons name="cog" color={color} size={26}/>
            )
        }}
        />
      </Tab.Navigator>
  )
}
export default MyApp