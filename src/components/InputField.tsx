import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

type InputFieldProps = {
    label: string;
    error?: string;
} & TextInputProps;

const InputField: React.FC<InputFieldProps> = ({ label, error, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={[styles.input, error && styles.errorBorder]} {...props} />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    container: { marginBottom: 16 },
    label: { fontSize: 14, marginBottom: 6, color: '#333' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    errorText: { color: 'red', marginTop: 4, fontSize: 12 },
    errorBorder: { borderColor: 'red' },
});