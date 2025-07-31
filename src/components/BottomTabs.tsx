import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Wishlist from '../screens/Wishlist';
import Login from '../register/login';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: 'transparent', // Important: let gradient show through
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
        },
        tabBarItemStyle: {
          height: 50,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#e6f4ec', '#ffffff', '#c9e4d9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              flex: 1,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text className={`text-xs ${focused ? 'text-[#6dbe94] font-bold' : 'text-gray-500'}`}>
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View className={`p-1 ${focused ? 'bg-green-50 rounded-full' : ''}`}>
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? '#6dbe94' : '#888'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text className={`text-xs ${focused ? 'text-[#6dbe94] font-bold' : 'text-gray-500'}`}>
              Cart
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View className={`p-1 ${focused ? 'bg-green-50 rounded-full' : ''}`}>
              <MaterialCommunityIcons
                name={focused ? 'cart' : 'cart-outline'}
                size={24}
                color={focused ? '#6dbe94' : '#888'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text className={`text-xs ${focused ? 'text-[#6dbe94] font-bold' : 'text-gray-500'}`}>
              Wishlist
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View className={`p-1 ${focused ? 'bg-green-50 rounded-full' : ''}`}>
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                size={24}
                color={focused ? '#6dbe94' : '#888'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text className={`text-xs ${focused ? 'text-[#6dbe94] font-bold' : 'text-gray-500'}`}>
              Account
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View className={`p-1 ${focused ? 'bg-green-50 rounded-full' : ''}`}>
              <FontAwesome
                name={focused ? 'user' : 'user-o'}
                size={22}
                color={focused ? '#6dbe94' : '#888'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
