import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard,TouchableWithoutFeedback, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
    <LinearGradient
      colors={['#f0f9f0', '#fafafaff', '#b6c7bbff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 justify-center px-8"
    >
      {/* Top Content */}
      <View className="items-center mb-10">
        <View className="bg-white rounded-3xl p-5 shadow-lg shadow-emerald-200/80 mb-6">
          <Image 
            source={require('../../assets/login.png')} 
            className="w-24 h-24"
          />
        </View>
        <Text className="text-4xl font-bold text-emerald-900 mb-2">Welcome Back</Text>
        <Text className="text-lg text-emerald-700/90">Sign in to your account</Text>
      </View>

      {/* Input Container */}
      <View className="bg-white rounded-[40px] p-8 shadow-2xl shadow-emerald-100">
        {/* Email Field */}
        <View className="bg-gray-50 rounded-2xl p-4 h-16 mb-6 border border-emerald-100 shadow-sm shadow-emerald-100">
          <View className="flex-row items-center">
            <Ionicons name="mail-outline" size={22} color="#10b981" className="mr-3" />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#9ca3af"
              value={email}
              onChangeText={setEmail}
              className="flex-1 text-gray-800 text-base"
              keyboardType="email-address"
              autoCapitalize="none"
              style={{ 
                paddingVertical: 0,
                height: '100%',
                textAlignVertical: 'center',
                includeFontPadding: false 
              }}
            />
          </View>
        </View>

        {/* Password Field */}
        <View className="bg-gray-50 rounded-2xl p-4 h-16 border border-emerald-100 shadow-sm shadow-emerald-100">
          <View className="flex-row items-center">
            <Ionicons name="lock-closed-outline" size={22} color="#10b981" className="mr-3" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#9ca3af"
              value={password}
              onChangeText={setPassword}
              className="flex-1 text-gray-800 text-base"
              secureTextEntry={!isPasswordVisible}
              style={{ 
                paddingVertical: 0,
                height: '100%',
                textAlignVertical: 'center',
                includeFontPadding: false 
              }}
            />
            <TouchableOpacity 
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              className="ml-2"
              onPressIn={() => console.log('Toggle confirm password visibility')}

            >
              <Ionicons 
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} 
                size={22} 
                color="#10b981" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Remember Me & Forgot Password */}
        <View className="flex-row justify-between items-center mt-4 mb-6">
          <TouchableOpacity 
            className="flex-row items-center"
            onPress={() => setRememberMe(!rememberMe)}
            onPressIn={() => console.log('Remember me toggled')}
          >
            <View className="w-5 h-5 border border-emerald-300 rounded-md mr-2 flex items-center justify-center">
              {rememberMe && <Ionicons name="checkmark" size={16} color="#10b981" />}
            </View>
            <Text className="text-emerald-800">Remember me</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text className="text-emerald-600 font-medium">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          className="rounded-2xl overflow-hidden mt-4 shadow-lg shadow-emerald-500/30"
          activeOpacity={0.9}
          onPress={() => {navigation.navigate('BottomTabs', { screen: 'Home' }); Alert.alert('Login Successful', 'Welcome back!');}}
        >
          <LinearGradient
            colors={['#10b981', '#059669']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="py-4"
          >
            <Text className="text-white text-center text-lg font-bold">
              Login
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-8">
          <View className="flex-1 h-px bg-gray-200" />
          <Text className="text-gray-400 mx-4">or continue with</Text>
          <View className="flex-1 h-px bg-gray-200" />
        </View>

        {/* Social Login */}
        <View className="flex-row justify-center space-x-6">
          <TouchableOpacity className="bg-white p-3 rounded-xl shadow shadow-gray-300">
            <Ionicons name="logo-google" size={28} colors={['#DB4437', '#F4B400', '#0F9D58', '#4285F4']} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-3 rounded-xl shadow shadow-gray-300">
            <Ionicons name="logo-facebook" size={28} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-3 rounded-xl shadow shadow-gray-300">
            <Ionicons name="logo-apple" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign up link */}
      <View className="flex-row justify-center mt-8">
        <Text className="text-emerald-800">Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text className="text-emerald-600 font-bold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Login;