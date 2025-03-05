import React,{useState} from "react";
import { View,Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import CustomHeader from "../../../Components/reusableComponents/appHeader/customHeader";
import CustomTextInput from "../../../Components/reusableComponents/customTextInput/customTextInput";
import CustomButton from "../../../Components/reusableComponents/button/button";
import { String } from "../../../utils";
import {theme} from '../../../utils'
import * as Svg from '../../../Assets/Images/svg';
import axios from 'axios';
import { Alert } from 'react-native';

const SignUpScreen=({navigation})=>{
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [_id, set_id] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    


  const handlePasswordChange = (input) => {
    setPassword(input);
    setIsValidLength(input.length >= 8);
    setHasNumber(/\d/.test(input));
    setHasUppercase(/[A-Z]/.test(input));
    setHasLowercase(/[a-z]/.test(input));
    setHasSpecialChar(/[^A-Za-z0-9]/.test(input));
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (!isChecked) {
      Alert.alert("Error", "You must agree to the Terms of Service");
      return;
    }

    const data = {
      fullName,
      userName,
      mobileNumber,
      email,
      password,
      confirmPassword,
      _id,
    };

    try {
      const response = await axios.post('https://job-portal-candidate-be.onrender.com/v1/registration/', data);
      console.log('Response:', response);
      console.log('Response Data:', response.data);

      if (response.data.message === "user registered successfully") {
        Alert.alert("Success", response.data.message);
        navigation.navigate('verifyAccount', { phone: mobileNumber, email: email });
      } else {
        Alert.alert("Error", response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Registration Error:", error.response);

      // 👇 Backend se aane wale error message ko handle karo
      const errorMessage = error.response?.data?.message;

      if (errorMessage === "User already exists") {
        Alert.alert("Error", "This email is already registered. Please log in.");
      } else {
        Alert.alert("Error", errorMessage || "An error occurred. Please try again.");
      }
    }
  };

  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <CustomHeader
        title='Create Account'
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => navigation.goBack()}
      />
      <CustomTextInput
        placeholder={'Full Name'}
        value={fullName}
        onChangeText={setFullName}
      />
      <CustomTextInput
        placeholder={'User Name'}
        value={userName}
        onChangeText={setUserName}
      />
      <CustomTextInput
        placeholder={'Phone'}
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <CustomTextInput
        placeholder={'Email'}
        value={email}
        onChangeText={setEmail}
      />
       {/* Password Input with Visibility Toggle */}
       <CustomTextInput
        value={password}
        onChangeText={handlePasswordChange}
        placeholder={'Password'}
        secureTextEntry={!showPassword}
        rightIcon={
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <Svg.CloseEye /> : <Svg.EyeOpen />}
          </TouchableOpacity>
        }
      />
      <View style={style.guidelinesContainer}>

        <View style={style.guidelineRow}>
          <View style={[style.bullet, { backgroundColor: isValidLength ? '#7900BA' : 'transparent' }]}></View>
          <Text style={style.guidelineText}>Use 8 or more characters</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={style.guidelineRow}>
            <View style={[style.bullet, { backgroundColor: hasNumber ? '#7900BA' : 'transparent' }]}></View>
            <Text style={style.guidelineText}>One number</Text>
          </View>
          <View style={style.guidelineRow}>
            <View style={[style.bullet, { backgroundColor: hasUppercase ? '#7900BA' : 'transparent' }]}></View>
            <Text style={style.guidelineText}>One uppercase character</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={style.guidelineRow}>
            <View style={[style.bullet, { backgroundColor: hasLowercase ? '#7900BA' : 'transparent' }]}></View>
            <Text style={style.guidelineText}>One lowercase character</Text>
          </View>
          <View style={style.guidelineRow}>
            <View style={[style.bullet, { backgroundColor: hasSpecialChar ? '#7900BA' : 'transparent' }]}></View>
            <Text style={style.guidelineText}>One special character</Text>
          </View>
        </View>

      </View>
      {/* Confirm Password Input with Visibility Toggle */}
      <CustomTextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder={'Confirm Password'}
        secureTextEntry={!showConfirmPassword}
        rightIcon={
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <Svg.CloseEye /> : <Svg.EyeOpen />}
          </TouchableOpacity>
        }
      />
      <View style={style.checkBoxContainer}>
        <TouchableOpacity
          style={style.checkbox}
          onPress={() => setIsChecked(!isChecked)}
        >
          {isChecked && (
            <Svg.CheckboxActive
              color={theme.lightColor.purple}
            />
          )}
        </TouchableOpacity>
        <Text style={style.text}>
          I’ve read and agree with your{' '}
          <Text style={style.link}>
            Terms of Services
          </Text>
        </Text>
      </View>
      <CustomButton
        title={String.createAccount}
        style={{ marginTop: theme.verticalSpacing.space_20 }}
        onPress={handleSubmit}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: theme.verticalSpacing.space_18, justifyContent: 'center' }}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={style.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  loginText: {
    color: theme.lightColor.purple,
    fontWeight: '500',
    fontSize: 15,
    marginLeft: 5
  },
  guidelinesContainer: {
    marginTop: 10,
  },
  guidelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  bullet: {
    height: 10,
    width: 10,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 10,
  },
  guidelineText: {
    fontSize: 16,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: theme.fontSizes.size_16,
    color: '#00000082',
    marginLeft: 8,
  },
  link: {
    color: '#6200ea',
    fontWeight: 'bold',
  },
  checkbox: {
    width: theme.horizontalSpacing.space_20,
    height: theme.verticalSpacing.space_20,
    borderWidth: 1,
    borderColor: theme.lightColor.purple,
    borderRadius: 5
  },
});

export default SignUpScreen;
