import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import AuthButton from '../components/AuthButton';
import { useAuth } from '../context/AuthContext';
import { homeStyles as styles } from '../styles/styles';

const HomeScreen = () => {
    const { user, logout } = useAuth();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome 👋</Text>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.info}>{user?.name}</Text>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.info}>{user?.email}</Text>

                <View style={styles.buttonContainer}>
                    <AuthButton title="Logout" onPress={logout} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;