

import React from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import weatherIcons from "../icons.json";
import { LinearGradient } from 'expo-linear-gradient';



export default function DetailedInfo(props) {
const forecast=props.route.params.forecast 
  return (
    <ScrollView >
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex:1 }}>
        

      <View style={styles.container}>
      {forecast &&  <Ionicons name={weatherIcons[forecast.current.weather[0].icon].icon} size={100} color="white" /> }
      {forecast &&  <Text style={styles.mainText}> {forecast.current.weather[0].main} </Text>}


  
      <View style={styles.col}> 
      {forecast && <Text style={styles.textsub}> <Ionicons name="sunny" size={20} color="white" /> Sunrise:
      {new Date((forecast.current.sunrise)* 1000).toLocaleString('en-us',{ hour:'2-digit',minute:'2-digit'}) } </Text> }
      {forecast && <Text style={styles.textsub}><Ionicons name="moon" size={20} color="white" /> Sunset :
      {new Date((forecast.current.sunset)* 1000).toLocaleString('en-us',{ hour:'2-digit',minute:'2-digit'})} </Text> }

     </View>
    
     {forecast && <Text style={styles.textsub}> Humidity: {forecast.current.humidity} % </Text>}
     {forecast && <Text style={styles.textsub}> Wind degree: {forecast.current.wind_deg} ° </Text>}
      <Text style={styles.textsub}>  -- Temp --</Text>
     {forecast && <Text style={styles.textsub}> Max: {Math.round(forecast.daily[0].temp.max)}  ° C </Text>}
     {forecast && <Text style={styles.textsub}> Min: {Math.round(forecast.daily[0].temp.min)}  ° C </Text>}
     {forecast && <Text style={styles.textsub}> Night: {Math.round(forecast.daily[0].temp.night)}  ° C </Text>}
     {forecast && <Text style={styles.textsub}> Morning: {Math.round(forecast.daily[0].temp.morn)}  ° C </Text>}
     {forecast && <Text style={styles.textsub}> Feels like:{Math.round(forecast.daily[0].feels_like.day)}  ° C </Text>}
  
      
   
      </View>
      </LinearGradient>
      </ScrollView>
  );

}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  mainText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginBottom:30
  },
  textsub: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    margin:20
  },


  textcenterLarge: {
    color: "white",
    fontSize: 45,
    textAlign: "center",
  },

  row: {
    marginTop: 25,
    flexDirection: 'row',
  },
 
  col: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop:10
  },
 

});

