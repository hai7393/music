import { View, Text,Image } from 'react-native'
import React from 'react'
import HeaderHome from '../../component/Header'
const Playlist = () => {
  return (
    <View>
    <HeaderHome />
      <Image
      source={require('../../../../../assets/images/thap.jpeg')}
      style={{
        width:'120%',
        height:'60%',
        resizeMode:'center',
        transform: [
            {rotate:'-15deg'},
            {translateX:-30}
        ]
      }}
      />
    </View>
  )
}

export default Playlist