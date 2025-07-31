// src/navigation/index.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../register/login';
import Signup from '../register/signup';
import ForgotPassword from '../register/forgotPassword';
import OnboardingScreen from '../OnboardingScreen';
import BottomTabs from '../components/BottomTabs';
import Home from '../screens/Home';
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  OnboardingScreen: undefined;
  BottomTabs: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }} 
    >
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />  
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />

    </Stack.Navigator>
  );
}
