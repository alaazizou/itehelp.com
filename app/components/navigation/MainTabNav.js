import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../../views/Home'
import DetailScreen from '../../views/DetailScreen'
import ExploreScreen from '../../views/ExploreScreen'
import ProfileScreen from '../../views/ProfileScreen'
import { createStackNavigator } from '@react-navigation/stack';
import BookMarkScreen from '../../views/BookMarkScreen';
import  Settings  from '../../views/Settings';
import SupportScreen from '../../views/SupportScreen';


const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SupportStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabNav = () => (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      activeColor="yellow"
      inactiveColor="#c3c3c3"
      screenOptions={{
        tabBarOptions: {
            style: {
                backgroundColor: '#000',
            },
        },
    }}
        
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        activeColor="#000000"
        inactiveColor="#000000"
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#000000',

          tabBarIcon: ({ color }) => (
            <MaterialIcons  name="home" size={24} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        
        options={{
          tabBarLabel: 'Profile',
        //   tabBarColor: '#000000',
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'ExploreScreen',
          tabBarColor: '#000000',

          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={24} color={color} />          ),
        }}
      />
    </Tab.Navigator>
)

const HomeStackScreen = ({navigation}) => (
	<HomeStack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#009387'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		},
		headerLeft : () =>(
        <AntDesign name="menu-fold" style={{marginLeft: 5}} size={24} color="white"
				  onPress={()=> navigation.openDrawer() }
			  />
		)
		}}>
		  <HomeStack.Screen name="Home" component={HomeScreen} />
      <DetailStack.Screen name="Detail" component={DetailScreen} />
	</HomeStack.Navigator>
)
const DetailStackScreen = ({navigation}) => (
	<DetailStack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#009387'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		},
		headerLeft : () =>(
			<AntDesign style={{marginLeft: 5}}  name="menu-fold" size={24} color="white"
				onPress={()=> navigation.openDrawer() }
			/>
		)
	}}>
		<DetailStack.Screen name="Detail" component={DetailScreen} />
	</DetailStack.Navigator>
)
const ProfileStackScreen = ({navigation}) => (
	<ProfileStack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#009387'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		},
		headerLeft : () =>(
			<AntDesign  name="menu-fold" size={24} color="white"
				onPress={()=> navigation.openDrawer() }
			/>
		)
	}}>
		<ProfileStack.Screen name="Profile" component={ProfileScreen} />
		<ProfileStack.Screen name="BookMark" component={BookMarkScreen} />
		<ProfileStack.Screen name="Support" component={SupportScreen} />
    <ProfileStack.Screen name="Setting" component={Settings} />
	</ProfileStack.Navigator>
)
export default MainTabNav;
