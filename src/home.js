

import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import backgroundImage from '../assets/day.png';
import weatherIcons from "../icons.json";




export default function Home({ navigation, route }) {
  const [forecast, setForecast] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)


  useEffect(() => {
    async function didMount() {

      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

      return fetch(`https://api.openweathermap.org/data/2.5/onecall?l&units=metric&exclude=minutely&lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=da4ff156937c474d64069a4fe689ac4c`)
        .then(response => {
          return response.json()
        })
        .then(result => {
          setForecast(result);
          setIsLoaded(true)
        })

        .catch(error => {
          alert(error.message)
        })
    }

    didMount();
  }, [])


  const [city, setCity] = useState(null)
  useEffect(() => {
    async function didMount() {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      return fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=da4ff156937c474d64069a4fe689ac4c`)
        .then(response => {
          return response.json()
        })
        .then(result => {
          setCity(result);
        })

        .catch(error => {
          alert(error.message)
        })


    }
    didMount();

  }, [])

  if (!isLoaded) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color="#000" />
    </View>
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <ImageBackground source={{ uri: backgroundImage }} style={styles.testImg}>
          <View style={styles.outercontainer} >
            <View style={styles.col}>
              <View style={styles.row}>
                {forecast && <Text style={[styles.textleftLarge, styles.shadow]}> {Math.round(forecast.current.temp)}</Text>}
                <Text style={[styles.subfont, styles.shadow]} >° C </Text>
              </View>
              {city && <Text style={[styles.textleft, styles.subfont]}> {city[0].name},{city[0].country}</Text>}
            </View>

            <View style={styles.col}>
              <View style={styles.rowRe}>
                {forecast && <Text style={styles.textright}><Ionicons name={weatherIcons[forecast.current.weather[0].icon].icon} size={20} color="white" /> {forecast.current.weather[0].main} </Text>}
              </View>
              {forecast && <Text style={[styles.textright, styles.subfont]}>Wind {forecast.current.wind_speed} km/h </Text>}
            </View>
          </View>
          <TouchableOpacity
            style={styles.transparentButton}
            onPress={() => { navigation.navigate('DetailedInfo', { forecast }) }}>
            <Text style={styles.subfont}>Detailed info</Text>

          </TouchableOpacity>

        </ImageBackground>
        {forecast &&
          forecast.daily.slice(0, 5).map(d => {
            const weather = d.weather[0];
            var dt = new Date(d.dt * 1000);

            var code = weather.icon;
            var icon = weatherIcons[code].icon;

            return (<View style={[styles.outercontainer, styles.horizontalLine]} key={d.dt}>
              <Text style={styles.allweather}>{dt.toLocaleString('en-us', { weekday: 'long' })}</Text>
              <Text style={styles.allweather}> <Ionicons name={icon} size={20} color="black" />  {weather.main}</Text>
              <Text style={styles.allweather}> {Math.round(d.temp.max)}/{Math.round(d.temp.min)}°C</Text>




            </View>)
          })}



      </View>
    </ScrollView>

  );

}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  testImg: {
    width: 375,
    height: 400,
    flex: 1,
    marginBottom: 30,


  },
  textright: {
    color: "white",
    fontSize: 18,
    marginHorizontal: 5,
    textAlign: "right",
  },
  textleft: {
    color: "white",
    fontSize: 18,
    textAlign: "left",
  },

  textleftLarge: {
    color: "white",
    fontSize: 45,
    textAlign: "left",
  },
  shadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
  transparentButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "white",
    alignSelf: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    marginTop: 230,
    flexDirection: 'center',

  },
  item: {
    padding: 15,
    fontSize: 14,
    height: 44,
    backgroundColor: "#ffffff",
  },
  row: {
    marginTop: 25,
    flexDirection: 'row',
  },
  rowRe: {
    marginTop: 40,
    flexDirection: 'row-reverse',

  },
  col: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10
  },
  subfont: {
    fontSize: 12,
    color: "white"
  },
  outercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  allweather: {
    fontSize: 18,
    margin: 20
  },

  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.25,
  },


});

