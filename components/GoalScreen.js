import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Goal from './Goal'

const GoalScreen = () => {
  return (
    <View style={styles.container}>
        <Goal name="Run everyday this week" current={3} end={5}/>
        <Goal/>
        <Goal/>
    </View>
  )
}

export default GoalScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})