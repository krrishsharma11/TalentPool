import React from "react";
import { View,Text, StyleSheet,Image,  TouchableOpacity } from "react-native";
import CustomHeader from "../../../reusableComponents/appHeader/customHeader";
import * as Svg from '../../../assets/images/svg';
import VerificationScreen from "../../../reusableComponents/verification/verification";
import { MainRoutes } from "../../../navigation/stackNavigation/routeAndParamsList";


const JobPhoneVerificationScreen=({navigation})=>{
return (
    <View>
        <CustomHeader
               title={'Phone Verification'}
               leftIcon={<Svg.ArrowBack/>}
                   onLeftPress={()=>navigation.goBack()}
               />
      <VerificationScreen 
          onVerify={()=>navigation.navigate(MainRoutes.VERIFICATION_SUCCESS_SCREEN,{type:'phone'})}
  subtitle="We’ve sent a verification code to your email."
  emailOrPhone="9155071885"
  placeholder="Enter Verification Code"
      />
    </View>
)
}

export default JobPhoneVerificationScreen;