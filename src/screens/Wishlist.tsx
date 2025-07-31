import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const Wishlist = () => {
  // Mock wishlist items
  const wishlistItems = [
    { 
      id: 1, 
      name: 'Wireless Earbuds Pro', 
      price: 89.99, 
      rating: 4.7,
      image: 'https://example.com/earbuds.jpg', // Replace with actual image URL
      isFavorite: true
    },
    { 
      id: 2, 
      name: 'Organic Cotton T-Shirt', 
      price: 24.99, 
      rating: 4.3,
      image: 'https://example.com/tshirt.jpg',
      isFavorite: true
    },
    { 
      id: 3, 
      name: 'Stainless Steel Water Bottle', 
      price: 19.99, 
      rating: 4.8,
      image: 'https://example.com/bottle.jpg',
      isFavorite: true
    },
    { 
      id: 4, 
      name: 'Yoga Mat Premium', 
      price: 34.99, 
      rating: 4.6,
      image: 'https://example.com/yogamat.jpg',
      isFavorite: true
    },
    { 
      id: 5, 
      name: 'Smart Desk Lamp', 
      price: 49.99, 
      rating: 4.4,
      image: 'https://example.com/lamp.jpg',
      isFavorite: true
    },
    { 
      id: 6, 
      name: 'Leather Wallet', 
      price: 29.99, 
      rating: 4.5,
      image: 'https://example.com/wallet.jpg',
      isFavorite: true
    },
  ];

  return (
    <LinearGradient
      colors={['#f0f9f0', '#fafafaff', '#b6c7bbff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      {/* Search Bar */}
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

      {/* Wishlist Content */}
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center my-4">
          <Text className="text-2xl font-bold text-gray-800">My Wishlist</Text>
          <Text className="text-green-600">{wishlistItems.length} items</Text>
        </View>

        {/* Product Grid */}
        <View className="flex-row flex-wrap justify-between">
          {wishlistItems.map((item) => (
            <View key={item.id} className="w-[48%] bg-white rounded-2xl p-3 mb-4 shadow-sm border border-gray-100">
              {/* Product Image */}
              <View className="w-full aspect-square bg-gray-100 rounded-xl mb-3 items-center justify-center overflow-hidden">
                {item.image ? (
                  <Image 
                    source={{ uri: item.image }} 
                    className="w-full h-full" 
                    resizeMode="cover"
                  />
                ) : (
                  <Ionicons name="image-outline" size={40} color="#9CA3AF" />
                )}
                <TouchableOpacity 
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full items-center justify-center shadow-md"
                >
                  <Ionicons 
                    name={item.isFavorite ? "heart" : "heart-outline"} 
                    size={20} 
                    color={item.isFavorite ? "#EF4444" : "#9CA3AF"} 
                  />
                </TouchableOpacity>
              </View>

              {/* Product Info */}
              <Text className="font-medium text-gray-800" numberOfLines={1}>{item.name}</Text>
              <View className="flex-row items-center mt-1">
                <Ionicons name="star" size={14} color="#F59E0B" />
                <Text className="text-xs text-gray-600 ml-1">{item.rating}</Text>
              </View>
              <Text className="text-green-600 font-bold mt-1">${item.price.toFixed(2)}</Text>

              {/* Add to Cart Button */}
              <TouchableOpacity className="mt-3 border border-green-600 py-1 rounded-lg items-center">
                <Text className="text-green-600 text-sm font-medium">Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Empty State (commented out) */}
        {/* <View className="items-center justify-center py-20">
          <Ionicons name="heart-outline" size={60} color="#D1D5DB" />
          <Text className="text-gray-500 text-lg mt-4">Your wishlist is empty</Text>
          <Text className="text-gray-400 mt-1 text-center">Save your favorite items here</Text>
          <TouchableOpacity className="mt-6 bg-green-600 px-6 py-3 rounded-lg">
            <Text className="text-white font-medium">Start Shopping</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </LinearGradient>
  );
};

export default Wishlist;