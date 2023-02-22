import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Favorite from '../screens/Favorite';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const FavoriteStack = createStackNavigator();
const FavoriteStackScreen = () => {
    return (
        <FavoriteStack.Navigator
        screenOptions={{
          headerStyle:{
            ///backgroundColor:COLORS.bgHeader,
          },
          //headerTintColor : COLORS.second
        }}
        >
          <FavoriteStack.Screen
          name="FavoriteScreen"
          component={Favorite}
          options={{
            title : 'Phim Yêu thích',
            headerRight : () => (
                <>
                        <View style={{flexDirection:"row", marginRight:10}}>
                            <Ionicons name="search-outline" style={{ marginRight: 5 }} size={24} />
                            <MaterialCommunityIcons name="dots-vertical" size={24} />
                        </View>
                    </>
            )
          }}
          />
        </FavoriteStack.Navigator>
      );
}

export default FavoriteStackScreen