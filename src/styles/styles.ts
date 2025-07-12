import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export const loginStyles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: SPACING.lg,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
    },
    header: {
        fontSize: FONT_SIZE.xl,
        fontWeight: 'bold',
        marginBottom: SPACING.lg,
        textAlign: 'center',
        color: COLORS.text,
    },
    link: {
        marginTop: SPACING.md,
        color: COLORS.primary,
        textAlign: 'center',
        fontSize: FONT_SIZE.md,
    },
});

export const signupStyles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: SPACING.lg,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
    },
    header: {
        fontSize: FONT_SIZE.xl,
        fontWeight: 'bold',
        marginBottom: SPACING.lg,
        textAlign: 'center',
        color: COLORS.text,
    },
    link: {
        marginTop: SPACING.md,
        color: COLORS.primary,
        textAlign: 'center',
        fontSize: FONT_SIZE.md,
    },
});

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        padding: SPACING.lg,
    },
    title: {
        fontSize: FONT_SIZE.xl,
        fontWeight: 'bold',
        marginBottom: SPACING.lg,
        textAlign: 'center',
        color: COLORS.text,
    },
    label: {
        fontSize: FONT_SIZE.md,
        fontWeight: '600',
        marginTop: SPACING.md,
        color: COLORS.text,
    },
    info: {
        fontSize: FONT_SIZE.lg,
        marginTop: SPACING.xs,
        color: COLORS.text,
    },
    buttonContainer: {
        marginTop: SPACING.xl,
    },
});