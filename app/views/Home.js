import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Welcome Home</Text>
            <TouchableOpacity 
                style={{backgroundColor: 'black', padding: 10}}
                onPress={() => navigation.navigate('Detail') }
            >
                <Text style={{color: 'white'}}>Go to Detail Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
