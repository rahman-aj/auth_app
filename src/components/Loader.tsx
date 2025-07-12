import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Animated } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Loader = () => {
    const isLoading = useSelector((state: RootState) => state.loading);
    const opacity = useRef(new Animated.Value(0)).current;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setVisible(true);
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => setVisible(false));
        }
    }, [isLoading]);

    if (!visible) return null;

    return (
        <Animated.View style={[styles.overlay, { opacity }]}>
            <ActivityIndicator size="large" color="#fff" />
        </Animated.View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
});