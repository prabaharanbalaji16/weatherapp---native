import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {color, colors} from '../Utils/index';
import {FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';
 
const WeatherDetails = ({currentWeather,units}) => {
    const {
            main :{feels_like,humidity,pressure},
            wind:{speed}} = currentWeather;

    const windspeed = units === 'metric'?`${Math.round(speed)} m/s`:`${Math.round(speed)} km/h`
    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={{...styles.weatherDetailsBox,borderRightWidth:1,borderColor:colors.BORDER_COLOR}}>
                    <View style={styles.DetailsRow}>
                        <FontAwesome5 name="temperature-low" size={25} color={colors.PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Feels like :</Text>
                            <Text style={styles.textSecondary}>{feels_like}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.DetailsRow}>
                        <MaterialCommunityIcons name="water" size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Humidity :</Text>
                            <Text style={styles.textSecondary}>{humidity}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{...styles.weatherDetailsRow,borderTopWidth:1,borderColor:colors.BORDER_COLOR}}>
                <View style={{...styles.weatherDetailsBox,borderRightWidth:1,borderColor:colors.BORDER_COLOR}}>
                    <View style={styles.DetailsRow}>
                        <MaterialCommunityIcons name="weather-windy" size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Wind speed :</Text>
                            <Text style={styles.textSecondary}>{windspeed}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.DetailsRow}>
                        <MaterialCommunityIcons name="speedometer" size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.weatherDetailsItems}>
                            <Text>Pressure :</Text>
                            <Text style={styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default WeatherDetails

const styles = StyleSheet.create({
    weatherDetails:{
        marginTop:"auto",
        margin:15,
        borderWidth:1,
        borderColor:colors.BORDER_COLOR,
        borderRadius:10
    },
    weatherDetailsRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    weatherDetailsBox:{
        flex:1,
        padding:10
    },
    DetailsRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    weatherDetailsItems:{
        alignItems:"flex-end",
        justifyContent:"flex-end"
    },
    textSecondary:{
        color:colors.SECONDARY_COLOR,
        fontSize:15,
        fontWeight:"700",
        margin:7
    }
})
