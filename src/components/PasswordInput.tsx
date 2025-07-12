import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

type Props = {
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
};

const PasswordInput = ({ value, onChangeText, error }: Props) => {
    const [secure, setSecure] = useState(true);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.input, error && styles.inputError]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder="Enter password"
                    secureTextEntry={secure}
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => setSecure(!secure)}>
                    <Text style={styles.toggle}>{secure ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

export default PasswordInput;

const styles = StyleSheet.create({
    wrapper: { marginBottom: SPACING.md },
    label: { marginBottom: 4, fontWeight: 'bold', color: COLORS.black },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 6,
        paddingHorizontal: SPACING.sm,
        backgroundColor: COLORS.white,
    },
    input: {
        flex: 1,
        paddingVertical: SPACING.sm,
    },
    inputError: {
        borderColor: COLORS.error,
    },
    toggle: {
        color: COLORS.primary,
        marginLeft: SPACING.sm,
        fontWeight: 'bold',
    },
    errorText: {
        marginTop: 4,
        color: COLORS.error,
        fontSize: 12,
    },
});