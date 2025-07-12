import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

type Props = {
    title: string;
    onPress: () => void;
    loading?: boolean;
};

const AuthButton = ({ title, onPress, loading }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} disabled={loading}>
            {loading ? (
                <ActivityIndicator color={COLORS.white} />
            ) : (
                <Text style={styles.label}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default AuthButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        padding: SPACING.md,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: SPACING.md,
    },
    label: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
});