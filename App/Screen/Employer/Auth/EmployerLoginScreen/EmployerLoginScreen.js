import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import CustomHeader from '../../../../Components/reusableComponents/appHeader/customHeader';
import { String } from "../../../../utils";
import { theme } from '../../../../utils';
import CustomTextInput from '../../../../Components/reusableComponents/customTextInput/customTextInput';
import * as Svg from '../../../../Assets/Images/svg';
import CustomButton from '../../../../Components/reusableComponents/button/button';
import SocialLoginButtons from '../../../../Components/reusableComponents/socialLogin/socialLogin';

const EmployerLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={style.main}>
      <CustomHeader title={String.loginTechnohire} />
      <View style={style.cointener}>
        <Text style={style.textStyle}>{String.accessAccount}</Text>
        <View style={{ marginTop: 30, width: '100%' }}>
          <CustomTextInput
            placeholder={'Email or phone number'}
            value={email}
            onChangeText={setEmail}
          />
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
        </View>

        <View style={style.checkBoxContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={style.checkbox} onPress={() => setIsChecked(!isChecked)}>
              {isChecked && <Svg.CheckboxActive color={theme.lightColor.purple} />}
            </TouchableOpacity>
            <Text style={style.text}>Remember me</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordEmp')}>
            <Text style={style.forgetPasswordText}>{String.forgetPassword}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 30 }}>
          <CustomButton title={'Login'} onPress={() => navigation.navigate('EditcompanyDetails')} >
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: '#fff' }}>Login...</Text>}
          </CustomButton>
        </View>

        <View style={{ flexDirection: 'row', marginTop: theme.verticalSpacing.space_38, alignItems: "center" }}>
          <View style={style.lineStyle} />
          <Text style={{ marginHorizontal: 10 }}>{'Or Login with'}</Text>
          <View style={style.lineStyle} />
        </View>
        <SocialLoginButtons />

        <View style={{ flexDirection: "row", marginTop: theme.verticalSpacing.space_100 }}>
          <Text style={[style.text, { fontSize: theme.fontSizes.size_14 }]}>{'Don’t have an account?'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={[style.forgetPasswordText, { marginLeft: 5, fontWeight: '900' }]}>{'Sign up'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF'
  },
  cointener: {
    alignItems: "center",
    padding: 10
  },
  textStyle: {
    fontSize: theme.fontSizes.size_16,
    alignSelf: "center",
    textAlign: "center",
    color: theme.lightColor.gray,
    marginTop: theme.verticalSpacing.space_20
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 20,
    width: '100%',
    justifyContent: "space-between"
  },
  checkbox: {
    width: theme.horizontalSpacing.space_18,
    height: theme.verticalSpacing.space_18,
    borderWidth: 1,
    borderColor: theme.lightColor.purple,
    borderRadius: 5
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
})

export default EmployerLoginScreen;
