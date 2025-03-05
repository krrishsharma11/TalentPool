import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../../reusableComponents/appHeader/customHeader';
import * as Svg from '../../../assets/images/svg';
import { String } from '../../../utils/string';
import { theme } from '../../../utils';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import CustomButton from '../../../reusableComponents/button/button';
import { MainRoutes } from '../../../navigation/stackNavigation/routeAndParamsList';

const ResetPassword = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
};
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
};
  return (
    <View style={{backgroundColor:"white"}}>
        <CustomHeader title={'Reset Password'} leftIcon={<Svg.ArrowBack/>} />
      <Text style={styles.SetNewpassText}>{String.SetNewPassword}</Text>
      <CustomTextInput value={undefined}
        onChangeText={undefined}
        placeholder={'New Password'}
        style={styles.Input}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={showPassword ? <Svg.CloseEye/> : <Svg.OpenEye/>}
        secureTextEntry={!showPassword}
        onRightIconPress={toggleShowPassword} />

      <CustomTextInput
       value={undefined}
        onChangeText={undefined}
        placeholder={'Confirm Password'}
        style={styles.Input}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={showConfirmPassword ? <Svg.CloseEye/> : <Svg.OpenEye/>}
        secureTextEntry={!showConfirmPassword}
        onRightIconPress={toggleShowConfirmPassword} />
        <CustomButton
        title={'Reset Password'}
        onPress={()=>navigation.navigate(MainRoutes.RESETPASSWORD_SUCCESS)}
        style={styles.btn}
        textStyle={undefined} />
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  SetNewpassText:{
    color: theme.lightColor.gray,
    marginHorizontal: theme.horizontalSpacing.space_20,
    alignSelf:'center',
    marginBottom: theme.verticalSpacing.space_38,
  },
  Input:{
    marginHorizontal: theme.horizontalSpacing.space_20,
    marginVertical: theme.verticalSpacing.space_20,
  },
  btn:{
    marginTop: theme.verticalSpacing.space_30,
  }
})