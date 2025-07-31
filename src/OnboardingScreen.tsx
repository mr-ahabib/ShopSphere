import { View, Text, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation';
import { useRef, useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'OnboardingScreen'>;

const TypeWriterText = ({ text, speed = 30, style, onComplete }: { text: string, speed?: number, style?: any, onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return <Text style={style}>{displayedText}</Text>;
};

const OnboardingScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [typingComplete, setTypingComplete] = useState(false);

  const feature = {
    icon: 'cart-variant',
    iconLib: MaterialCommunityIcons,
    title: 'ShopSphere',
    description: 'Your Ultimate Shopping Companion',
    details: 'Discover millions of products with personalized recommendations, fast delivery, and secure payments all in one place.',
    color: '#5eac8cff'
  };

  return (
    <LinearGradient
      colors={['#f8f9fa', '#e9ecef', '#dee2e6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 justify-center items-center"
    >
      {/* Skip Button */}
      <TouchableOpacity 
        className="absolute top-12 right-6 z-10"
        onPress={() => navigation.navigate('BottomTabs')}
      >
        <Text className="text-gray-600 font-medium text-base">Skip</Text>
      </TouchableOpacity>

      {/* Main Content */}
      <View className="items-center px-6">
        {/* Animated Shopping Cart Icon */}
        <Animatable.View 
          animation="pulse"
          iterationCount="infinite"
          duration={2000}
          className="w-72 h-72 items-center justify-center mb-2"
        >
          <MaterialCommunityIcons
            name={feature.icon as any} 
            size={140} 
            color={feature.color}
          />
        </Animatable.View>
        
        {/* Content */}
        <View className="px-6 mt-2">
          <TypeWriterText 
            text={feature.title}
            speed={50}
            onComplete={() => setTypingComplete(true)}
            style={{ 
              fontSize: 36,
              fontWeight: '800',
              textAlign: 'center',
              color: '#2b2d42',
              marginBottom: 16,
              fontFamily: 'Helvetica Neue',
              letterSpacing: 1
            }}
          />
          <TypeWriterText 
            text={feature.description}
            speed={30}
            style={{
              fontSize: 22,
              fontWeight: '600',
              textAlign: 'center',
              color: '#4a4e69',
              marginBottom: 24,
              lineHeight: 28,
              fontFamily: 'Helvetica Neue'
            }}
          />
          <TypeWriterText 
            text={feature.details}
            speed={20}
            style={{
              fontSize: 16,
              textAlign: 'center',
              color: '#6c757d',
              paddingHorizontal: 16,
              lineHeight: 24,
              fontFamily: 'Helvetica Neue',
              letterSpacing: 0.3
            }}
          />
        </View>
      </View>

      {/* Get Started Button */}
      {typingComplete && (
        <Animatable.View 
          animation="fadeInUp"
          duration={800}
          className="absolute bottom-12 left-6 right-6"
        >
          <TouchableOpacity
            className="rounded-full py-4 px-8 items-center justify-center flex-row"
            style={{ 
              backgroundColor: '#67ad8fff',
              shadowColor: '#619583ff',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
            }}
            activeOpacity={0.9} 
            onPress={() => navigation.navigate('BottomTabs')}
          >
            <Text className="text-lg font-semibold tracking-wide mr-2" style={{ color: 'white' }}>
              Get Started
            </Text>
            <FontAwesome5 
              name="shopping-bag" 
              size={18} 
              color="white" 
            />
          </TouchableOpacity>
        </Animatable.View>
      )}
    </LinearGradient>
  );
};

export default OnboardingScreen;