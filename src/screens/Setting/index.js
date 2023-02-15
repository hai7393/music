import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Divider, List, Switch } from 'react-native-paper'
import Header from '../../components/Header'
import { useThemeMode } from '@rneui/themed';
import {white,black,orange, backgroundDark, backgroundLight} from '../../components/constant'
const SettingScreen = () => {
  const {mode,setMode} = useThemeMode();
  const onToggleSwitch = (val) => {
    if(val){
      setMode('dark');
    }else{
      setMode('light');
    }
  };
  return (
    <View style={{ flex: 1 ,backgroundColor:mode=='dark'?backgroundDark:backgroundLight}}>
      <Header></Header>
      <Divider
        style={{
          width: '90%',
          alignSelf: 'center'
        }}
      ></Divider>
      <ScrollView
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10
        }}
      >
        <List.Item
          title="Dark Mode"
          titleStyle={{
            color:mode =='dark'?white:black
          }}
          left={props => <List.Icon {...props} icon="eye" color={mode =='dark'?white:black}/>}
          right={props => <Switch value={mode=='dark'} color={mode=='dark'?orange:black} onValueChange={(val)=>onToggleSwitch(val)}/>}
        />
      </ScrollView>
    </View>
  )
}

export default SettingScreen