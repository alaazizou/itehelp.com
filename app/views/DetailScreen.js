import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DetailScreen = ({navigation}) => {
    return(
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text> Detail Screen</Text>
				<TouchableOpacity 
					style={{backgroundColor: 'black', padding: 10, marginBottom: 3}}
					onPress={() => navigation.push('Detail') }
				>
					<Text style={{color: 'white'}}>Go to Detail Screen again</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={{backgroundColor: 'black', padding: 10, marginBottom: 3}}
					onPress={() => navigation.navigate('Home') }
				>
					<Text style={{color: 'white'}}>Go to Home Screen</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={{backgroundColor: 'black', padding: 10, marginBottom: 3}}
					onPress={() => navigation.goBack() }
				>
					<Text style={{color: 'white'}}>Go to back</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={{backgroundColor: 'black', padding: 10, marginBottom: 3}}
					onPress={() => navigation.popToTop()}
				>
					<Text style={{color: 'white'}}>Go to the first screen</Text>
			</TouchableOpacity>
		</View>
    )
}

export default DetailScreen