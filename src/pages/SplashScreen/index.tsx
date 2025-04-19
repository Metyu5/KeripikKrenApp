import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  Animated,
} from 'react-native';
import Spinner from 'react-native-spinkit';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  Register: undefined;
};

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    // Animasi fade-in logo
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Pindah ke RegisterScreen setelah 3 detik
    const timeout = setTimeout(() => {
      navigation.replace('Register');
    }, 5000);

    // Clear timeout kalau komponen unmount
    return () => clearTimeout(timeout);
  }, [fadeAnim, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
      />
      <Animated.View style={[styles.logoContainer, {opacity: fadeAnim}]}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logoImage}
        />
      </Animated.View>
      <Spinner
        isVisible={true}
        size={80}
        type="ThreeBounce"
        color="#FFE100"
        style={styles.spinner}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoContainer: {
    padding: 20,
  },
  logoImage: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  spinner: {
    marginTop: 30,
  },
});

export default SplashScreen;
