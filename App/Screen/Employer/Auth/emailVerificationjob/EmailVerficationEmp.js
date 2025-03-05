import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { theme } from '../../../../utils';
import { useNavigation } from '@react-navigation/native';

const EmailVerificationErp = ({
  title,
  type,
  subtitle,
  emailOrPhone,
  placeholder,
  onResend,
  onVerify,
  timer = 30,
}) => {
  const [timeLeft, setTimeLeft] = useState(timer);
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const handleVerify = () => {
    if (!inputValue) {
      Alert.alert("Error", "Please enter the verification code.");
      return;
    }
    
    if (onVerify) {
      onVerify();
    }
  };

 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>
        We’ve sent a verification to <Text style={styles.highlight}>{emailOrPhone}</Text> to verify your {title} and activate your account.
      </Text>

      <View style={styles.illustration}>
        <Image
          style={styles.ImageStyle}
          source={require('../../../../Assets/Images/verification1.png')}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type === 'email' ? 'email-address' : 'phone-pad'}
        value={inputValue}
        onChangeText={setInputValue}
      />

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn’t receive any code?</Text>
        <TouchableOpacity
          onPress={onResend}
          disabled={timeLeft > 0}
        >
          <Text style={[styles.resendLink, { color: timeLeft > 0 ? '#999' : '#6A0DAD' }]}>Resend Code</Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity style={styles.button} onPress={handleVerify}> */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerifyDoneErp')}>
     
        <Text style={styles.buttonText} >Verify My Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000',
  },
  ImageStyle: {
    marginTop: 30,
    width: theme.horizontalSpacing.space_230, 
    height: 270
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.lightColor.gray,
  },
  highlight: {
    fontWeight: 'bold',
    color: theme.darkModeColor.blackColor,
  },
  illustration: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendText: {
    fontSize: 14,
    color: '#555',
    marginRight: 5
  },
  button: {
    backgroundColor: theme.lightColor.purple,
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: theme.verticalSpacing.space_30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: theme.fontSizes.size_14,
    fontWeight: '500',
  },
  input: {
    marginTop: theme.verticalSpacing.space_30,
    height: theme.verticalSpacing.space_56,
    borderWidth: 0.3,
    borderColor: theme.lightColor.gray,
    borderRadius: theme.horizontalSpacing.space_10,
    padding: theme.horizontalSpacing.space_16,
    fontSize: theme.fontSizes.size_14,
    marginBottom: theme.verticalSpacing.space_20,
    backgroundColor: theme.lightColor.inputGray
  },
  resendContainer: {
    marginTop: theme.verticalSpacing.space_10,
    flexDirection: "row",
    width: theme.horizontalSpacing.space_370,
    alignItems: "center",
    justifyContent: "center"
  },
  resendLink: {
    fontSize: theme.fontSizes.size_16,
    fontWeight: '900',
    color: theme.lightColor.purple
  }
});

export default EmailVerificationErp;
