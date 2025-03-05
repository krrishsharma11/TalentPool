import React from "react";
import { View,Text, StyleSheet, TouchableNativeFeedbackComponent, TouchableOpacity } from "react-native";
import CustomHeader from "../../../../Components/reusableComponents/appHeader/customHeader";
import { String } from "../../../../utils";
import * as Svg from '../../../../Assets/Images/svg';
import { theme } from "../../../../utils";
// import CustomButton from "../../reusableComponents/button/button";
import CustomButton from "../../../../Components/reusableComponents/button/button";
const VerifyYourAccountScreenEmp = ({ route, navigation }) => {
  const { email, phone } = route?.params || {};

  return (
    <View style={styles.main}>
      <CustomHeader
        title={String.verifyOtp}
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => navigation.goBack()}
      />
      <View style={styles.otpmainView}>
        <Text style={styles.text}>Where should we send your verification code?</Text>

        {/* Phone Verification Box */}
        <View style={styles.mobileView}>
          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <Svg.MobileIcon />
              <Text style={styles.numberStyle}>{phone || "Not Provided"}</Text>
              <TouchableOpacity>
                <Svg.Edit />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => navigation.navigate('EditcompanyDetails', { phone: phone })}
            >
              <Text style={styles.textStyle}>Select phone</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Email Verification Box */}
        <View style={styles.mobileView}>
          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <Svg.MailIcon />
              <Text style={styles.numberStyle}>{email || "Not Provided"}</Text>
              <TouchableOpacity>
                <Svg.Edit />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => navigation.navigate('EmailVerificationEmp', { email: email })}
            >
              <Text style={styles.textStyle}>Select Email</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.makeSureView}>
          <Text style={styles.makeSureText}>Make sure you have access to your selected option to receive the code.</Text>
        </View>

        <CustomButton title={String.createAccount} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  otpmainView: {
    width: '100%',
    alignItems: 'center',
    marginTop: theme.verticalSpacing.space_30,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.lightColor.gray,
  },
  mobileView: {
    width: theme.horizontalSpacing.space_260,
    height: theme.verticalSpacing.space_136,
    borderWidth: 1,
    borderColor: theme.lightColor.purple,
    borderRadius: 10,
    marginTop: theme.verticalSpacing.space_50,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    alignItems: "center",
    width: "100%",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  numberStyle: {
    marginHorizontal: theme.horizontalSpacing.space_12,
    fontSize: theme.fontSizes.size_16,
    color: theme.lightColor.gray,
  },
  selectButton: {
    width: theme.horizontalSpacing.space_187,
    backgroundColor: theme.lightColor.purple,
    height: theme.verticalSpacing.space_40,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: theme.verticalSpacing.space_20,
  },
  textStyle: {
    color: 'white',
    fontWeight: '500',
  },
  makeSureView: {
    width: theme.horizontalSpacing.space_370,
    padding: 15,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  makeSureText: {
    color: theme.lightColor.gray,
    textAlign: "center",
  },
});

export default VerifyYourAccountScreenEmp;
