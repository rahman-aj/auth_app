import React, { useState } from 'react';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import InputField from '../components/InputField';
import PasswordInput from '../components/PasswordInput';
import AuthButton from '../components/AuthButton';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setLoading } from '../store';
import { signupStyles as styles } from '../styles/styles';
import { validateEmail, validatePassword, validateName } from '../utils/validators';

const SignupScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Signup'>>();
    const { signup } = useAuth();
    const dispatch = useDispatch<AppDispatch>();
    const isLoading = useSelector((state: RootState) => state.loading);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

    const validate = () => {
        const nameError = validateName(name);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        setErrors({
            name: nameError || undefined,
            email: emailError || undefined,
            password: passwordError || undefined,
        });

        return !nameError && !emailError && !passwordError;
    };

    const handleSignup = async () => {
        if (!validate()) return;

        dispatch(setLoading(true));
        try {
            await signup(name, email, password);
        } catch (err: any) {
            dispatch(setLoading(false)); // ✅ Corrected
            setTimeout(() => {
                Alert.alert('Signup Failed', err.message);
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
                        <Text style={styles.header}>Signup</Text>

                        <InputField
                            label="Name"
                            value={name}
                            onChangeText={setName}
                            placeholder="Enter your name"
                            error={errors.name}
                        />

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

                        <AuthButton title="Signup" onPress={handleSignup} loading={isLoading} />

                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.link}>Already have an account? Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignupScreen;