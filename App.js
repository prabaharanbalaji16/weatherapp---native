import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from "expo-location";
import WeatherInfo from './Components/WeatherInfo';
import Unitpicker from './Components/Unitpicker';
import {colors} from './Utils/index'
import ReloadIcon from './Components/ReloadIcon';
import WeatherDetails from './Components/WeatherDetails';
import {WEATHER_API_KEY} from '@env'
 
// const WEATHER_API_KEY =  "727d1c55d9cca3e2fddf8a74fe1a26e4";
export default function App() {
  const [errorMessages,seterrorMessages] = useState(null);
  const [currentWeather,setcurrentWeather] = useState(null);
  const [units,setUnits] = useState('metric');
  useEffect(()=>{
    getWeather();
  },[units]);
  const getWeather = async() =>{
    setcurrentWeather(null);
    seterrorMessages(null);
    try {
      let status = await Location.getForegroundPermissionsAsync();
      if(status !== 'granted')
      {
        const location = await Location.getCurrentPositionAsync();
        const {latitude,longitude} = location.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${WEATHER_API_KEY}`
        const response = await fetch(url);
        const result = await response.json()
        if(response.ok)
        {
          setcurrentWeather(result);
        }
        else{
          setcurrentWeather(errorMessages);
        }
      }
    } catch (error) {
     console.log(error.message);
     throw error ;
    }
  }
  if(currentWeather)
  {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <Unitpicker units={units} setUnits={setUnits} />
          <ReloadIcon getWeather={getWeather}/>
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails  currentWeather={currentWeather} units ={units}/>
      </View>
    );
  }
  else if (errorMessages)
  {
    return (
      <View style={styles.container}>
        <ReloadIcon getWeather={getWeather}/>
        <Text style={{textAlign:"center"}}>{errorMessages}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  else{
    return(
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main:{
    flex:1,
    justifyContent:"center"
  }
});
