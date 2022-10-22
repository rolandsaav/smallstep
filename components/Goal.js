import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Goal = ({name, start, current, end}) => {

	return (
		<View style={styles.container}>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'spaceBetween'
	}
})

export default Goal;
