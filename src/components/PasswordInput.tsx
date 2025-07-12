import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type PasswordInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    placeholder?: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChangeText, error, placeholder }) => {
    const [secure, setSecure] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Password</Text>
            <View style={[styles.inputContainer, error && styles.errorBorder]}>
                <TextInput
                    placeholder={placeholder || 'Enter password'}
                    secureTextEntry={secure}
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity onPress={() => setSecure(!secure)}>
                    <Ionicons name={secure ? 'eye-off' : 'eye'} size={20} color="#666" />
                </TouchableOpacity>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

export default PasswordInput;

const styles = StyleSheet.create({
    container: { marginBottom: 16 },
    label: { fontSize: 14, marginBottom: 6, color: '#333' },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    input: { flex: 1, height: 48, fontSize: 16 },
    errorText: { color: 'red', marginTop: 4, fontSize: 12 },
    errorBorder: { borderColor: 'red' },
});