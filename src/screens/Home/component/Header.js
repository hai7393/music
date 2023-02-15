import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useCallback } from 'react';
import React from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useThemeMode } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import { backgroundDark, backgroundLight, black, white, blue, lightBlue } from '../../../components/constant';
SplashScreen.preventAutoHideAsync();
const HeaderHome = () => {
  const { mode } = useThemeMode();
  const [fontsLoaded] = useFonts({
    'Lobster': require("../../../../assets/fonts/Lobster-Regular.ttf")
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      alignItems: 'center',
      paddingTop: 30,
      backgroundColor: mode == 'dark' ? backgroundDark : backgroundLight
    }}
      onLayout={onLayoutRootView}
    >
      <View style={{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
      }}>
        <Image
          source={require('../../../../assets/images/phone.png')}
          style={{
            width: 34,
            height: 34,
            marginRight: 24,
            resizeMode: 'contain'
          }} />
        <Text style={{ fontFamily: 'Lobster', fontSize: 20, color: mode == 'dark' ? white : black }}>Book Library</Text>
      </View>
      <View style={{ flexDirection: "row",justifyContent: 'center', alignItems: 'center'  }}>
        <TouchableOpacity style={{marginHorizontal:5}}>
          <Ionicons name="search-outline"
            size={30} color={blue} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:5}}>
          <Ionicons name="alarm-outline" size={30} color={blue} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:5}}>
          <Ionicons name="notifications"
            size={30}
            color={blue} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderHome