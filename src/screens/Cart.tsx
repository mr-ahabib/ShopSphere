import { View, Text, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const Cart = () => {
  // Mock cart items
  const cartItems = [
    { id: 1, name: 'Wireless Headphones Pro', price: 59.99, quantity: 1, image: 'headphones', color: 'Space Gray' },
    { id: 2, name: 'Smart Watch Series 5', price: 129.99, quantity: 1, image: 'watch', color: 'Midnight Black' },
    { id: 3, name: 'Running Shoes X3', price: 79.99, quantity: 1, image: 'walk', color: 'Navy Blue' },
    { id: 4, name: 'Bluetooth Speaker', price: 39.99, quantity: 1, image: 'musical-notes', color: 'Red' },
    { id: 5, name: 'Yoga Mat Premium', price: 24.99, quantity: 1, image: 'barbell', color: 'Purple' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <LinearGradient
      colors={['#f0f9f0', '#fafafaff', '#b6c7bbff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      {/* Fixed Search Bar */}
      <View className="p-4 mt-10 ">
                <View className="flex-row items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                  <Ionicons name="search-outline" size={20} color="#6B7280" />
                  <TextInput
                    placeholder="Search products..."
                    className="flex-1 ml-2 text-gray-700"
                  />
                  <TouchableOpacity className="ml-2 p-2 bg-gray-100 rounded-full">
                    <MaterialIcons name="tune" size={20} color="#6B7280" />
                  </TouchableOpacity>
                </View>
              </View>

      {/* Main Content */}
      <View className="flex-1">
        {/* Scrollable Cart Items */}
        <ScrollView 
          className="px-5"
          contentContainerStyle={{ paddingBottom: height * 0.25 }} // Space for fixed summary
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-xl font-bold text-gray-800 mt-2 mb-4">{cartItems.length} Items in Cart</Text>
          
          {cartItems.map((item) => (
            <View key={item.id} className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-100">
              <View className="flex-row">
                <View className="w-20 h-20 bg-gray-50 rounded-lg items-center justify-center mr-4">
                  <Ionicons name={item.image as any} size={28} color="#6B7280" />
                </View>
                <View className="flex-1">
                  <Text className="font-semibold text-gray-900" numberOfLines={1}>{item.name}</Text>
                  <Text className="text-gray-500 text-xs mt-1">{item.color}</Text>
                  <Text className="text-green-600 font-bold mt-1">${item.price.toFixed(2)}</Text>
                  
                  <View className="flex-row items-center mt-3">
                    <TouchableOpacity className="w-8 h-8 bg-gray-50 rounded-full items-center justify-center">
                      <Ionicons name="remove" size={16} color="#6B7280" />
                    </TouchableOpacity>
                    <Text className="mx-3 font-medium text-gray-800">{item.quantity}</Text>
                    <TouchableOpacity className="w-8 h-8 bg-green-50 rounded-full items-center justify-center">
                      <Ionicons name="add" size={16} color="#10B981" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity className="ml-auto p-1">
                      <MaterialIcons name="delete-outline" size={22} color="#EF4444" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Fixed Order Summary */}
        <View className="absolute bottom-0 left-0 right-0 bg-white pt-4 px-5 pb-6 rounded-t-3xl shadow-xl border-t border-gray-200">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-gray-600">Subtotal</Text>
            <Text className="font-medium text-gray-900">${subtotal.toFixed(2)}</Text>
          </View>
          
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-gray-600">Shipping</Text>
            <Text className="font-medium text-gray-900">
              {shipping === 0 ? (
                <Text className="text-green-600">FREE</Text>
              ) : (
                `$${shipping.toFixed(2)}`
              )}
            </Text>
          </View>
          
          <View className="border-t border-gray-100 my-3" />
          
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-900">Total</Text>
            <Text className="text-lg font-bold text-green-600">${total.toFixed(2)}</Text>
          </View>
          
          <TouchableOpacity 
            className="bg-green-600 py-3 rounded-xl items-center justify-center flex-row shadow-md"
            activeOpacity={0.9}
          >
            <Text className="text-white font-bold text-base mr-2">Proceed to Checkout</Text>
            <MaterialIcons name="arrow-forward" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Cart;