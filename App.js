import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GoalScreen from './components/GoalScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TestScreen = ({navigation}) => {
	return (
					<View style={styles.main}>
				<Text style={styles.text}>
					Sup Bitches
				</Text>
				<Button title="To Details" onPress={() => {navigation.navigate('Details')}}/>
				<Button title="To Goals" onPress={() => {navigation.navigate('Goals')}}/>
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
		<SafeAreaView style={styles.safe}>
			<NavigationContainer>
			<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
				  let iconName;
	  
				  if (route.name === 'Test Home') {
					iconName = focused
					  ? 'ios-information-circle'
					  : 'ios-information-circle-outline';
				  } else if (route.name === 'Goals') {
					iconName = focused ? 'ios-list-box' : 'ios-list';
				  }
	  
				  // You can return any component that you like here!
				  return <Ionicons name={iconName} size={size} color={color} />;
				}
			  })}
			>	
				<Tab.Screen name="Test Home" component={TestScreen}/>
				<Tab.Screen name="Details" component={Details}/>
				<Tab.Screen name="Goals" component={GoalScreen}/>
			</Tab.Navigator>
		</NavigationContainer>
		</SafeAreaView>
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
	},
	safe: {
		flex: 1,
	}

})

export default App;
