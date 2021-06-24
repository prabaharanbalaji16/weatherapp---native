import React from 'react'
import { StyleSheet, Text, View,Platform } from 'react-native';
import {Picker} from '@react-native-community/picker'

const Unitpicker = ({units,setUnits}) => {
    return (
        <View style={styles.units}>
            <Picker 
                selectedValue={units} 
                onValueChange={(item)=>setUnits(item)} 
                mode="dropdown"
                itemStyle={{fontSize:12}}>
                <Picker.Item label="C°" value="metric"/>
                <Picker.Item label="F°" value="imperial"/>
            </Picker>
        </View>
    )
}

export default Unitpicker

const styles = StyleSheet.create({
    units:{
        position:"absolute",
        ...Platform.select({
            android:{
                top:30,
            },
            ios:{
                top:-30
            }
        }),
        height:50,
        left:20,
        width:100,
    }
})
