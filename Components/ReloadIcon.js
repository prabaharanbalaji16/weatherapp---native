import React from 'react'
import { StyleSheet, View,Platform } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {colors} from '../Utils/index'
const ReloadIcon = ({getWeather}) => {
    const Iconname = Platform.OS === 'ios'? "ios-refresh" : "md-refresh";
    return (
        <View style={styles.reloadIcon}>
            <Ionicons onPress={getWeather} name={Iconname} size={24} color={colors.PRIMARY_COLOR}/>
        </View>
    )
}

export default ReloadIcon

const styles = StyleSheet.create({
    reloadIcon:{
        position:"absolute",
        ...Platform.select({
            android:{
                top:30,
            },
            ios:{
                top:-30
            }
        }),
        right:20,
    }
})
