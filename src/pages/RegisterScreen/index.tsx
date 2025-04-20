import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/color';

const {width, height} = Dimensions.get('window');

const RegisterScreen = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const onChange = (key: keyof typeof form, value: string) => {
    setForm({...form, [key]: value});
  };

  const handleRegister = () => {
    console.log('🔥 Data form:', form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled">
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>Create Account</Text>
          </View>

          <View style={styles.formContainer}>
            {/** Username */}
            <InputField
              label="Username"
              placeholder="Masukan username anda"
              value={form.username}
              icon="person-outline"
              onChangeText={text => onChange('username', text)}
            />

            {/** Email */}
            <InputField
              label="Email"
              placeholder="Masukan email anda"
              value={form.email}
              icon="mail-outline"
              onChangeText={text => onChange('email', text)}
              keyboardType="email-address"
            />

            {/** Phone */}
            <InputField
              label="No Telpon"
              placeholder="Masukan nomor hp anda"
              value={form.phone}
              icon="call-outline"
              onChangeText={text => onChange('phone', text)}
              keyboardType="phone-pad"
            />

            {/** Password */}
            <InputField
              label="Password"
              placeholder="Masukan password anda"
              value={form.password}
              icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
              onChangeText={text => onChange('password', text)}
              secureTextEntry={!showPassword}
              onIconPress={() => setShowPassword(!showPassword)}
            />

            <View style={styles.signInWrapper}>
              <Text style={styles.signInText}>Already have an account?</Text>
              <Text style={styles.signInLink}> Sign In</Text>
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Create Account</Text>
            </TouchableOpacity>

            <View style={styles.orWrapper}>
              <View style={styles.line} />
              <Text style={styles.orText}>Or continue with</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.socialWrapper}>
              <TouchableOpacity style={styles.socialButton}>
                <Image
                  source={require('../../assets/google.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image
                  source={require('../../assets/facebook.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image
                  source={require('../../assets/instagram.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>
              © 2023 Matthew TPMHU. All rights reserved.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  icon,
  onIconPress,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: any;
  secureTextEntry?: boolean;
  icon: string;
  onIconPress?: () => void;
}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#fff"
        />
        <TouchableOpacity onPress={onIconPress}>
          <Ionicons name={icon} size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.underline} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.donalds,
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: height * 0.06,
  },
  logo: {
    width: width * 0.8,
    height: width * 0.25,
    resizeMode: 'contain',
  },
  title: {
    fontSize: width * 0.05,
    color: '#fff',
    fontFamily: fonts.Msemibold,
    marginTop: 15,
  },
  formContainer: {
    width: '90%',
    marginTop: height * 0.04,
  },
  field: {
    marginBottom: height * 0.025,
  },
  label: {
    color: '#fff',
    fontFamily: fonts.Msemibold,
    marginBottom: 6,
    fontSize: width * 0.035,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    color: '#fff',
    fontSize: width * 0.04,
    fontFamily: fonts.Mregular,
    flex: 1,
    paddingVertical: 5,
  },
  underline: {
    height: 1,
    backgroundColor: '#fff',
    marginTop: 5,
  },
  signInWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signInText: {
    color: '#fff',
    fontFamily: fonts.Mregular,
    fontSize: width * 0.035,
  },
  signInLink: {
    color: '#FFD700',
    fontFamily: fonts.Msemibold,
    fontSize: width * 0.035,
  },
  registerButton: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  registerButtonText: {
    fontSize: width * 0.045,
    fontFamily: fonts.Msemibold,
    color: colors.donalds,
  },
  footerText: {
    color: '#fff',
    fontSize: width * 0.03,
    textAlign: 'center',
    marginTop: 25,
    fontFamily: fonts.Mregular,
  },

  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
    opacity: 0.3,
  },
  orText: {
    marginHorizontal: 10,
    color: '#fff',
    fontFamily: fonts.Mregular,
    fontSize: width * 0.035,
  },
  socialWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8, 
  },

  socialIcon: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },
});
