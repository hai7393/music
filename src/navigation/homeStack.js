import { View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DetailScreen from '../screens/Detail';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home/stacks';
import { useNavigation } from '@react-navigation/native'
const Stack = createStackNavigator();
const HomeStackScreen = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    //backgroundColor: COLORS.bgHeader
                },
                //headerTintColor: COLORS.second
            }}
        >
            <Stack.Screen name="HomeStackScreen" component={HomeScreen}
            options={{
                title:"home",
                headerShown:false
            }}
            />
            <Stack.Screen name="DetailScreen" component={DetailScreen}
                options={{
                    title: 'Chi tiết',
                    headerRight: () => (
                        <>
                            <View style={{ flexDirection: "row", marginRight: 10 }}>
                                <Ionicons name="search-outline" style={{ marginRight: 5 }} size={24}
                                    onPress={() => navigation.navigate('SearchScreen')}
                                />
                                <MaterialCommunityIcons name="dots-vertical" size={24} />
                            </View>
                        </>
                    )
                }}
            />
            {/* <Stack.Screen name="Notification" component={Notification}
                options={{
                    title: 'Thông báo',
                    headerRight: () => (
                        <>
                            <View style={{ flexDirection: "row", marginRight: 10 }}>
                                <Ionicons name="search-outline" style={{ marginRight: 5 }} size={24}
                                    onPress={() => navigation.navigate('SearchScreen')}
                                    color={COLORS.second}
                                />
                                <MaterialCommunityIcons name="dots-vertical" size={24} color={COLORS.second} />
                            </View>
                        </>
                    )
                }}
            />
            <Stack.Screen name="SearchScreen" component={SearchScreen}
                options={{
                    title: 'Tìm kiếm',

                }}
            /> */}
        </Stack.Navigator>
    );
}

export default HomeStackScreen