import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet,Image,  TouchableOpacity } from "react-native";
import CustomHeader from "../../../Components/reusableComponents/appHeader/customHeader";
import * as Svg from '../../../Assets/Images/svg';
import VerificationScreen from "../../../Components/reusableComponents/verification/verification";
import axios from "axios";
import { Alert } from 'react-native';

const EmailVerificationScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const [verificationSent, setVerificationSent] = useState(false);

  useEffect(() => {
    if (verificationSent) return;
    const sendEmailVerification = async () => {
      try {
        const response = await axios.post('https://job-portal-candidate-be.onrender.com/v1/mailVerification', {
          email: email,
        });

        console.log('Full Response:', response);
        console.log('Response Data:', response.data);

        if (response.data && response.data === "Verification email sent") {
          // Success - show success message
          Alert.alert("Success", "A verification code has been sent to your email.");

          // Set the verificationSent state to prevent duplicate requests
          setVerificationSent(true);
        } else {
          // Handle error responses
          Alert.alert("Error", "Something went wrong. Please try again later.");
        }
      } catch (error) {
        console.error('Error Response:', error.response);
        const errorMessage = error.response?.data?.message || 'An error occurred. Please try again later.';
        Alert.alert("Error", errorMessage);
      }
    };

    sendEmailVerification();
  }, [email, verificationSent]);

  return (
    <View>
      <CustomHeader
        title={'Email Verification'}
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => navigation.goBack()}
      />

      <VerificationScreen
        subtitle="We’ve sent a verification code to your email."
        emailOrPhone={email}
        placeholder="Enter Verification Code"
        onVerify={() => navigation.navigate('verificationSuccessful', { type: 'email' })}
      />

    </View>
  );
};

export default EmailVerificationScreen;