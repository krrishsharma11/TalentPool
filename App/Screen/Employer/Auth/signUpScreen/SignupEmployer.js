import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import CustomHeader from '../../../../Components/reusableComponents/appHeader/customHeader';
import { String } from "../../../../utils";
import { theme } from '../../../../utils';
import CustomTextInput from '../../../../Components/reusableComponents/customTextInput/customTextInput';
import * as Svg from '../../../../Assets/Images/svg';
import CustomButton from '../../../../Components/reusableComponents/button/button';
import SocialLoginButtons from '../../../../Components/reusableComponents/socialLogin/socialLogin';

const SignUpEmpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <View style={style.main}>
      <CustomHeader title={'Create Your Account'} />
      <View style={style.container}>
        <View style={{ flexDirection: "row", marginTop: theme.verticalSpacing.space_5 }}>
          <Text style={[style.text, { fontSize: theme.fontSizes.size_18 }]}> 
            <Text style={{ color: '#7900BA', fontWeight: 'bold' }}>Signup </Text> to find your ideal candidate.
          </Text>
        </View>

        <View style={{ marginTop: 30, width: '100%' }}>
          <CustomTextInput placeholder={'Name of Organization'} />
          <CustomTextInput placeholder={'Email'} value={email} onChangeText={setEmail} keyboardType="email-address" />
          <CustomTextInput
            value={password}
            onChangeText={setPassword}
            placeholder={'Password'}
            secureTextEntry={!showPassword}
            rightIcon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <Svg.CloseEye /> : <Svg.EyeOpen />}
              </TouchableOpacity>
            }
          />
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
        </View>

        <View style={{ marginTop: 30 }}>
          <CustomButton title={'Sign Up'} onPress={() => navigation.navigate('VerifyAccountEmp')}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: '#fff' }}>Sign Up</Text>}
          </CustomButton>
        </View>

        <View style={{ flexDirection: 'row', marginTop: theme.verticalSpacing.space_38, alignItems: "center" }}>
          <View style={style.lineStyle} />
          <Text style={{ marginHorizontal: 10 }}>{'Or Sign Up with'}</Text>
          <View style={style.lineStyle} />
        </View>
        <SocialLoginButtons />

        <View style={{ flexDirection: "row", marginTop: theme.verticalSpacing.space_100 }}>
          <Text style={[style.text, { fontSize: theme.fontSizes.size_14 }]}>{'Already have an account ?'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[style.forgetPasswordText, { marginLeft: 5, fontWeight: '900' }]}onPress={() => navigation.navigate('EmployerLoginScreen')}>{'Login'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF'
  },
  container: {
    alignItems: "center",
    padding: 10
  },
  text: {
    fontSize: theme.fontSizes.size_16,
    color: '#00000082',
    marginLeft: 8,
  },
  forgetPasswordText: {
    color: theme.lightColor.purple,
    fontSize: theme.fontSizes.size_14,
    fontWeight: '400'
  },
  lineStyle: {
    width: 115,
    height: 1,
    backgroundColor: "gray"
  }
});

export default SignUpEmpScreen;
