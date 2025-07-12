import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import { useAuth } from '../context/AuthContext';

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    const { user } = useAuth();

    return (
        <Stack.Navigator>
            {user ? (
                <Stack.Screen name="Home" component={HomeScreen} />
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={SignupScreen} />
                </>
            )}
        </Stack.Navigator>
    );
};

export default AppNavigator;