import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import {colors} from '../Utils/index';

const {PRIMARY_COLOR,SECONDARY_COLOR} = colors;

const WeatherInfo = ({currentWeather}) => {
    const { 
            main:{ temp },
            weather: [details],
            name
          } = currentWeather;
    const {icon,main,description} = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@6x.png`;

    return (
        <View style={styles.weatherInfo}>
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{uri:iconUrl}} />
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.textSecondary}>{main}</Text>
        </View>
    )
}

export default WeatherInfo

const styles = StyleSheet.create({
    weatherInfo:{
        alignItems:"center"
    },
    weatherIcon:{
        width:100,
        height:100
    },
    weatherDescription:{
        textTransform:"capitalize"
    },
    textPrimary:{
        fontSize:40,
        color:PRIMARY_COLOR
    },
    textSecondary:{
        fontSize:20,
        fontWeight:"500",
        color:SECONDARY_COLOR,
        marginTop:10
    }
})
