import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useThemeMode } from '@rneui/themed';
import { black, white } from '../constant';
const Txt = ({ h1, title }) => {
    const { mode } = useThemeMode();
    return (
        <View>
            <Text style={[h1 ? styles.h1 : styles.h2,{color: mode == 'dark' ? white : black}]}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    h1: {
        fontSize: 15,
        fontWeight: '500',
    },
    h2: {
        fontSize: 14,
    },
});
export default Txt
