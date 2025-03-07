import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../../../Components/reusableComponents/appHeader/customHeader';
import * as Svg from '../../../../Assets/Images/svg';
import CustomTextInput from '../../../../Components/reusableComponents/customTextInput/customTextInput';
import { theme } from '../../../../utils';
import CustomButton from '../../../../Components/reusableComponents/button/button';
import { String } from '../../../../utils';


const ForgotPasswordEmp = ({navigation}) => {
  return (
    <View style={{padding:10,backgroundColor:"white"}}>
    <CustomHeader
      title={'Forget Password'}
      leftIcon={<Svg.ArrowBack />}
      onLeftPress={()=>navigation.goBack()}
      rightIcon={undefined}
      onRightPress={undefined}
    />
    <Text style={styles.forgetText}>{String.ForgetPassword}</Text> 
    <CustomTextInput
      value={undefined}
      onChangeText={undefined}
      placeholder={'Email or Phone Number'}
      // style={styles.Input}
      inputStyle={undefined}
      leftIcon={undefined}
      onLeftIconPress={undefined}
      rightIcon={undefined}
      onRightIconPress={undefined}
    />

    <Text style={styles.gotobackText}>
      Go Back To <Text style={{color: theme.lightColor.purple}} onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
    </Text>
    <CustomButton
      title={'Reset Password'}
      onPress={()=>navigation.navigate('ResetPasswordEmp')}
      style={styles.btn}
      textStyle={undefined}
    />
    <Text style={styles.signupText}>
      Don't have an account{' '}
      <Text style={{color: theme.lightColor.purple}}>Sign Up</Text>
    </Text>
  </View>
  )
}

export default ForgotPasswordEmp

const styles = StyleSheet.create({
    forgetText: {
      marginHorizontal: theme.horizontalSpacing.space_20,
      alignSelf: 'center',
      textAlign:'center',
      color: theme.lightColor.gray,
      marginVertical: theme.verticalSpacing.space_30,
    },
    Input: {
      marginHorizontal: theme.horizontalSpacing.space_22,
    },
    gotobackText: {
      fontSize: theme.fontSizes.size_16,
      color: theme.lightColor.gray,
      marginHorizontal: theme.horizontalSpacing.space_20,
      alignSelf: 'flex-end',
      marginBottom: theme.verticalSpacing.space_28,
      marginTop: theme.verticalSpacing.space_14,
    },
    signupText: {
      color: theme.lightColor.gray,
      flex: 1,
      alignSelf: 'center',
      marginHorizontal: theme.horizontalSpacing.space_18,
      marginVertical: theme.verticalSpacing.space_320,
    },
    btn: {
      marginHorizontal: theme.horizontalSpacing.space_30,
    },
  });