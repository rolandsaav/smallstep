import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Goal = ({name, start, current, end}) => {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{name}</Text>
			<Text style={styles.detail}>{current}/{end}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: 60,
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		paddingHorizontal: 15
	},
	title: {
		fontSize: 20,
		fontWeight: '700'
	},
	detail: {
		fontSize: 25
	}
})

export default Goal;
