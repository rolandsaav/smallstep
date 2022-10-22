import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonBar = ({navigator}) => {
  return (
    <View style={styles.container}>
        <Button title="Goals" onPress={() => {navigator.navigate('Goals')}}/>
        <Button title="Details" onPress={() => {navigator.navigate('Details')}}/>
        <Button title='Home' onPress={() => {navigator.navigate('Test Home')}}/>
    </View>
  )
}

export default ButtonBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 120,
        width: '100%',
        backgroundColor: '#000',
        paddingBottom: 40
    }
})