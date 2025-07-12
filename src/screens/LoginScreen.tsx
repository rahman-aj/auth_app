import React, { useState } from 'react';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import InputField from '../components/InputField';
import PasswordInput from '../components/PasswordInput';
import AuthButton from '../components/AuthButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useAuth } from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setLoading } from '../store';
import { loginStyles as styles } from '../styles/styles';
import { Alert } from 'react-native';
import { validateEmail, validatePassword } from '../utils/validators';

const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();
    const { login } = useAuth();

    const dispatch = useDispatch<AppDispatch>();
    const isLoading = useSelector((state: RootState) => state.loading);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validate = () => {
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        setErrors({ email: emailError || undefined, password: passwordError || undefined });

        return !emailError && !passwordError;
    };

    const handleLogin = async () => {
        if (!validate()) return;

        dispatch(setLoading(true));
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await login(email, password);
        } catch (err: any) {
            dispatch(setLoading(false)); // ✅ fix here
            setTimeout(() => {
                Alert.alert('Login Failed', err.message);
            }, 300);
            return;
        }

        dispatch(setLoading(false));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{ flex: 1 }}
                keyboardVerticalOffset={60}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.container}>
                        <Text style={styles.header}>Login</Text>

                        <InputField
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            error={errors.email}
                        />

                        <PasswordInput value={password} onChangeText={setPassword} error={errors.password} />

                        <AuthButton title="Login" onPress={handleLogin} />

                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.link}>Don't have an account? Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;