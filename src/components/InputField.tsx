import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

type Props = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    error?: string;
    keyboardType?: 'default' | 'email-address';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
};

const InputField = ({
    label,
    value,
    onChangeText,
    placeholder,
    error,
    keyboardType = 'default',
    autoCapitalize = 'none',
}: Props) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, error && styles.inputError]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    wrapper: { marginBottom: SPACING.md },
    label: { marginBottom: 4, fontWeight: 'bold', color: COLORS.black },
    input: {
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 6,
        padding: SPACING.sm,
        backgroundColor: COLORS.white,
    },
    inputError: {
        borderColor: COLORS.error,
    },
    errorText: {
        marginTop: 4,
        color: COLORS.error,
        fontSize: 12,
    },
});