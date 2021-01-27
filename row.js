import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const styles = StyleSheet.create({ // this still need editing 
    row:{
    padding: 20},
}
    );

const Row = prop => ( // getting the data for the table below
    <View style={styles.row}>
        <Text>prop.day</Text>
        <Text>prop.weather</Text>
        <Text>prop.degree</Text>
    </View>
)

export default Row;