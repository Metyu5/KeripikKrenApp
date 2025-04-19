import React from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../utils/color';

const {width} = Dimensions.get('window');

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>HALO INI HALAMAN REGISTER</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.donalds,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: width * 0.9,
    height: width * 0.5,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
