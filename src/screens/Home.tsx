import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
const Home = () => {
  // Mock data for the sections
  const categories = [
    { name: 'Fashion', icon: 'shirt-outline' },
    { name: 'Electronics', icon: 'phone-portrait-outline' },
    { name: 'Beauty', icon: 'sparkles-outline' },
    { name: 'Home', icon: 'home-outline' },
    { name: 'Sports', icon: 'basketball-outline' },
    { name: 'Books', icon: 'book-outline' },
  ];

  const products = [
    { name: 'Wireless Headphones', price: '$59.99', rating: 4.5 },
    { name: 'Smart Watch', price: '$129.99', rating: 4.2 },
    { name: 'Running Shoes', price: '$79.99', rating: 4.7 },
    { name: 'Bluetooth Speaker', price: '$39.99', rating: 4.0 },
    { name: 'Yoga Mat', price: '$24.99', rating: 4.8 },
    { name: 'Coffee Maker', price: '$49.99', rating: 4.3 },
  ];

  return (
    
    <LinearGradient
      colors={['#f0f9f0', '#fafafaff', '#b6c7bbff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* 🔍 Search Bar */}
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

        {/* 🏷️ Promotional Banner */}
        <View className="px-4 mb-6">
          <View className="bg-white rounded-xl p-4 shadow-sm">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-800">Up to 50% off!</Text>
                <Text className="text-gray-600 mt-1">On selected electronics</Text>
                <TouchableOpacity className="mt-2 bg-green-500 py-1 px-3 rounded-full self-start">
                  <Text className="text-white text-sm font-medium">Shop Now</Text>
                </TouchableOpacity>
              </View>
              <View className="w-20 h-20 bg-green-100 rounded-lg items-center justify-center">
                <FontAwesome name="bolt" size={24} color="#10B981" />
              </View>
            </View>
          </View>
        </View>

        {/* 📦 Categories Section */}
        <View className="mb-6">
          <Text className="text-xl font-bold px-4 mb-3 text-gray-800">Categories</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="px-4"
          >
            {categories.map((category, index) => (
              <TouchableOpacity 
                key={index}
                className="items-center mr-4"
              > 
                <View className="w-16 h-16 bg-white rounded-full items-center justify-center shadow-sm">
                  <Ionicons name={category.icon as any} size={24} color="#10B981" />
                </View>
                <Text className="mt-2 text-sm font-medium text-gray-700">{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* ⭐ Top Deals */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center px-4 mb-3">
            <Text className="text-xl font-bold text-gray-800">Top Deals</Text>
            <TouchableOpacity>
              <Text className="text-green-600 font-medium">See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="px-4"
          >
            {products.slice(0, 4).map((product, index) => (
              <TouchableOpacity 
                key={index}
                className="bg-white rounded-lg p-3 mr-4 w-40 shadow-sm"
              >
                <View className="w-full h-24 bg-gray-100 rounded mb-2 items-center justify-center">
                  <Ionicons name="image-outline" size={32} color="#9CA3AF" />
                </View>
                <Text className="font-medium text-gray-800" numberOfLines={1}>{product.name}</Text>
                <View className="flex-row items-center mt-1">
                  <Ionicons name="star" size={14} color="#F59E0B" />
                  <Text className="text-xs text-gray-600 ml-1">{product.rating}</Text>
                </View>
                <Text className="text-green-600 font-bold mt-1">{product.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* 🆕 New Arrivals */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center px-4 mb-3">
            <Text className="text-xl font-bold text-gray-800">New Arrivals</Text>
            <TouchableOpacity>
              <Text className="text-green-600 font-medium">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="px-4">
            <View className="bg-white rounded-lg p-4 shadow-sm">
              <View className="flex-row">
                <View className="w-20 h-20 bg-gray-100 rounded mr-4 items-center justify-center">
                  <Ionicons name="image-outline" size={24} color="#9CA3AF" />
                </View>
                <View className="flex-1">
                  <View className="flex-row items-center">
                    <Text className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mr-2">Just In</Text>
                    <Text className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Limited Stock</Text>
                  </View>
                  <Text className="font-medium text-gray-800 mt-2">Premium Wireless Earbuds</Text>
                  <Text className="text-green-600 font-bold mt-1">$89.99</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* 🔥 Popular Products */}
        <View className="mb-6">
          <Text className="text-xl font-bold px-4 mb-3 text-gray-800">Popular Products</Text>
          <View className="px-4">
            <View className="flex-row flex-wrap justify-between">
              {products.map((product, index) => (
                <TouchableOpacity 
                  key={index}
                  className="bg-white rounded-lg p-3 mb-4 w-[48%] shadow-sm"
                >
                  <View className="w-full h-24 bg-gray-100 rounded mb-2 items-center justify-center">
                    <Ionicons name="image-outline" size={32} color="#9CA3AF" />
                  </View>
                  <Text className="font-medium text-gray-800" numberOfLines={1}>{product.name}</Text>
                  <View className="flex-row items-center mt-1">
                    <Ionicons name="star" size={14} color="#F59E0B" />
                    <Text className="text-xs text-gray-600 ml-1">{product.rating}</Text>
                  </View>
                  <Text className="text-green-600 font-bold mt-1">{product.price}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* 🎁 Flash Sale */}
        <View className="mb-6 px-4">
          <View className="bg-white rounded-xl p-4 shadow-sm">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-lg font-bold text-gray-800">Flash Sale</Text>
              <View className="flex-row items-center bg-red-100 px-2 py-1 rounded">
                <Ionicons name="time-outline" size={14} color="#EF4444" />
                <Text className="text-red-600 text-xs font-medium ml-1">02:45:33</Text>
              </View>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
            >
              {products.slice(0, 3).map((product, index) => (
                <TouchableOpacity 
                  key={index}
                  className="bg-gray-50 rounded-lg p-3 mr-4 w-32"
                >
                  <View className="w-full h-16 bg-gray-200 rounded mb-2 items-center justify-center">
                    <Ionicons name="image-outline" size={24} color="#9CA3AF" />
                  </View>
                  <Text className="text-xs font-medium text-gray-800" numberOfLines={1}>{product.name}</Text>
                  <Text className="text-red-600 font-bold text-sm mt-1">{product.price}</Text>
                  <View className="absolute top-0 right-0 bg-red-500 px-2 py-1 rounded-bl rounded-tr">
                    <Text className="text-white text-xs font-bold">-20%</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;