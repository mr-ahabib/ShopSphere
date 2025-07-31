import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard,TouchableWithoutFeedback  } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgotPassword'>;

const ForgotPassword = () => {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleSendOtp = () => {
    // Validate email
    if (!email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    // In a real app, you would send OTP to email here
    setStep(2);
  };

  const handleVerifyOtp = () => {
    // Validate OTP (in real app, verify with backend)
    if (otp.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter the 6-digit OTP');
      return;
    }
    setStep(3);
  };

  const handleResetPassword = () => {
    // Validate passwords
    if (newPassword.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Mismatch', 'Passwords do not match');
      return;
    }
    // In real app, submit new password to backend
    Alert.alert('Success', 'Password reset successfully!', [
      { text: 'OK', onPress: () => navigation.navigate('Login') }
    ]);
  };

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
          <Ionicons 
            name={step === 1 ? "mail" : step === 2 ? "lock-closed" : "key"} 
            size={60} 
            color="#10b981" 
          />
        </View>
        <Text className="text-4xl font-bold text-emerald-900 mb-2">
          {step === 1 ? 'Reset Password' : step === 2 ? 'Verify OTP' : 'New Password'}
        </Text>
        <Text className="text-lg text-emerald-700/90 text-center px-4">
          {step === 1 ? 'Enter your email to receive OTP' : 
           step === 2 ? 'Enter the 6-digit OTP sent to your email' : 
           'Enter your new password'}
        </Text>
      </View>

      {/* Input Container */}
      <View className="bg-white rounded-[40px] p-8 shadow-2xl shadow-emerald-100">
        {step === 1 && (
          <>
            {/* Email Field */}
            <View className="bg-gray-50 rounded-2xl p-4 h-16 mb-6 border border-emerald-100 shadow-sm shadow-emerald-100">
              <View className="flex-row items-center">
                <Ionicons name="mail-outline" size={22} color="#10b981" className="mr-3" />
                <TextInput
                  placeholder="Your Email"
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

            {/* Send OTP Button */}
            <TouchableOpacity
              className="rounded-2xl overflow-hidden mt-4 shadow-lg shadow-emerald-500/30"
              activeOpacity={0.9}
              onPress={handleSendOtp}
            >
              <LinearGradient
                colors={['#10b981', '#059669']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="py-4"
              >
                <Text className="text-white text-center text-lg font-bold">
                  Send OTP
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        )}

        {step === 2 && (
          <>
            {/* OTP Field */}
            <View className="bg-gray-50 rounded-2xl p-4 h-16 mb-6 border border-emerald-100 shadow-sm shadow-emerald-100">
              <View className="flex-row items-center">
                <Ionicons name="lock-closed-outline" size={22} color="#10b981" className="mr-3" />
                <TextInput
                  placeholder="Enter OTP"
                  placeholderTextColor="#9ca3af"
                  value={otp}
                  onChangeText={setOtp}
                  className="flex-1 text-gray-800 text-base"
                  keyboardType="number-pad"
                  maxLength={6}
                  style={{ 
                    paddingVertical: 0,
                    height: '100%',
                    textAlignVertical: 'center',
                    includeFontPadding: false 
                  }}
                />
              </View>
            </View>

            {/* Verify OTP Button */}
            <TouchableOpacity
              className="rounded-2xl overflow-hidden mt-4 shadow-lg shadow-emerald-500/30"
              activeOpacity={0.9}
              onPress={handleVerifyOtp}
            >
              <LinearGradient
                colors={['#10b981', '#059669']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="py-4"
              >
                <Text className="text-white text-center text-lg font-bold">
                  Verify OTP
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Resend OTP */}
            <TouchableOpacity className="items-center mt-4">
              <Text className="text-emerald-600 font-medium">
                Didn't receive OTP? <Text className="font-bold">Resend</Text>
              </Text>
            </TouchableOpacity>
          </>
        )}

        {step === 3 && (
          <>
            {/* New Password Field */}
            <View className="bg-gray-50 rounded-2xl p-4 h-16 mb-4 border border-emerald-100 shadow-sm shadow-emerald-100">
              <View className="flex-row items-center">
                <Ionicons name="lock-closed-outline" size={22} color="#10b981" className="mr-3" />
                <TextInput
                  placeholder="New Password"
                  placeholderTextColor="#9ca3af"
                  value={newPassword}
                  onChangeText={setNewPassword}
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
                >
                  <Ionicons 
                    name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} 
                    size={22} 
                    color="#10b981" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password Field */}
            <View className="bg-gray-50 rounded-2xl p-4 h-16 mb-6 border border-emerald-100 shadow-sm shadow-emerald-100">
              <View className="flex-row items-center">
                <Ionicons name="lock-closed-outline" size={22} color="#10b981" className="mr-3" />
                <TextInput
                  placeholder="Confirm New Password"
                  placeholderTextColor="#9ca3af"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  className="flex-1 text-gray-800 text-base"
                  secureTextEntry={!isConfirmPasswordVisible}
                  style={{ 
                    paddingVertical: 0,
                    height: '100%',
                    textAlignVertical: 'center',
                    includeFontPadding: false 
                  }}
                />
                <TouchableOpacity 
                  onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                  className="ml-2"
                >
                  <Ionicons 
                    name={isConfirmPasswordVisible ? "eye-off-outline" : "eye-outline"} 
                    size={22} 
                    color="#10b981" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Reset Password Button */}
            <TouchableOpacity
              className="rounded-2xl overflow-hidden mt-4 shadow-lg shadow-emerald-500/30"
              activeOpacity={0.9}
              onPress={handleResetPassword}
            >
              <LinearGradient
                colors={['#10b981', '#059669']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="py-4"
              >
                <Text className="text-white text-center text-lg font-bold">
                  Reset Password
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        )}

        {/* Back to Login */}
        <TouchableOpacity 
          className="items-center mt-6"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-emerald-600 font-medium">
            <Ionicons name="arrow-back" size={16} color="#10b981" /> Back to Login
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;