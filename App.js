/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const TestScreen = ({navigation}) => {
	return (
					<View style={styles.main}>
				<Text style={styles.text}>
					Sup Bitches
				</Text>
				<Button title="To Details" onPress={() => {navigation.navigate('Details')}}/>
			</View>
	)
}

const Details = () => {
	return (
		<View style={styles.main}>
			<Text style={styles.text}>
				The deets...
			</Text>
		</View>
	)
}

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>	
				<Stack.Screen name="Test Home" component={TestScreen}/>
				<Stack.Screen name="Details" component={Details}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 22,
		fontWeight: '800',
	}

})

export default App;
