import { StyleSheet, ScrollView, View, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { useThemeMode } from '@rneui/themed';
import { backgroundDark, backgroundLight } from '../../../components/constant';
import Txt from '../../../components/ui/Txt'; 
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height
const DATA = [
  {
    id: 1,
    name: 'Waiting For You',
    author: 'MONO, Onionn',
    img: 'https://thethaovanhoa.mediacdn.vn/Upload/3uPkfvAxvuOpUQrmKeiDaA/files/2022/10/C/02/Mono2.jpg'
  },
  {
    id: 2,
    name: 'Waiting For You',
    author: 'MONO, Onionn',
    img: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/10/22/photo-2-166643862563980708315.jpg'
  },
  {
    id: 3,
    name: 'Waiting For You',
    author: 'MONO, Onionn',
    img: 'https://i1.sndcdn.com/artworks-hBFEiKqtsesdepPN-39EoIw-t500x500.jpg'
  },
  {
    id: 4,
    name: 'Waiting For You',
    author: 'MONO, Onionn',
    img: 'https://i.vgt.vn/2022/9/24/mono-bat-ngo-xuat-hien-sau-khi-tao-bao-voi-waiting-for-you-body-cuc-chay-tiep-tuc-gay-sot-289-6656027.png'
  },
];

const Suggested = () => {
  const { mode, setMode } = useThemeMode();
  const Item = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          width: width / 3,
          marginRight: 10,
        }}
      >
        <View style={{
          height: '70%',
          marginBottom: 10,
          borderRadius: 15,
        }}>
          <Image
            source={{ uri: item.img }}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 15
            }}
          />
        </View>
        <View>
          <Txt h2 title={item.name}/>
          <Txt h2 title={item.author}/>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <ScrollView
      style={{
        padding: 20,
        backgroundColor: mode == 'dark' ? backgroundDark : backgroundLight
      }}
    >
      <View
      style={{
        height:height/4
      }}
      >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10
        }}
      >
        <Txt h1 title="Recently Played"/>
        <Txt h1 title="See All"/>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      </View>
    </ScrollView>
  )
}

export default Suggested

const styles = StyleSheet.create({})