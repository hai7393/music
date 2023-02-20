import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useThemeMode } from '@rneui/themed';
import { black, white } from '../constant';
const Txt = ({ h1,h2, title }) => {
    const { mode } = useThemeMode();
    return (
        <View>
            <Text style={[
                h1 && StyleSheet.flatten([mode == 'dark' ? styles.h1StyleDark : styles.h1Style]),
                h2 && StyleSheet.flatten([mode == 'dark' ? styles.h2StyleDark : styles.h2Style]),
            ]}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    h1Style: {
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline',
        textDecorationColor: "orange",
        textDecorationStyle: 'solid',
        color:black

    },
    h1StyleDark:{
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline',
        textDecorationColor: "orange",
        textDecorationStyle: 'solid',
        color:white
    },
    h2StyleDark: {
        fontSize: 14,
        color:white
    },
    h2Style: {
        fontSize: 14,
        color:black
    },
});
export default Txt
