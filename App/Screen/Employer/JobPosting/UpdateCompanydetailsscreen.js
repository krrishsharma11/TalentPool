import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../../reusableComponents/appHeader/customHeader';
import CustomTextInput from '../../reusableComponents/customTextInput/customTextInput';
import { theme } from '../../utils';
import * as Svg from "../../assets/images/svg";

const UpdateCompanydetailsscreen = ({ navigation }) => {

  const [companyLink, setCompanyLink] = useState("WWW.infosys.com");
  const [linkedinLink, setLinkedinLink] = useState("www.infosysLinkedin.com");
  const [facebookLink, setFacebookLink] = useState("www.infosysFacebook.com");
  const [twitterLink, setTwitterLink] = useState("www.infosysTwitter.com");
  const [medium, setMedium] = useState("Medium");

  return (
    <View style={styles.container}>
      {/* Header */}
      <CustomHeader
        title="Company Details"
        leftIcon={<Svg.ArrowBack size={24} />}
        onLeftPress={() => navigation.goBack()}
      />

      <Text style={styles.editText}>Edit Your Company Details</Text>

      <View style={styles.companyLinkContainer}>
        <CustomTextInput
          placeholder={companyLink}
          editable={false}
          style={styles.companyLinkInput}
        />
      </View>

      <Text style={styles.socialLinksText}>Social Links</Text>

     
      <View style={styles.socialLinkInputContainer}>
        <CustomTextInput
          placeholder={linkedinLink}
          editable={false}
          style={styles.socialLinkInput}
        />
      </View>

      <View style={styles.socialLinkInputContainer}>
        <CustomTextInput
          placeholder={facebookLink}
          editable={false}
          style={styles.socialLinkInput}
        />
      </View>

      <View style={styles.socialLinkInputContainer}>
        <CustomTextInput
          placeholder={twitterLink}
          editable={false}
          style={styles.socialLinkInput}
        />
      </View>

      <View style={styles.socialLinkInputContainer}>
        <CustomTextInput
          placeholder={medium}
          editable={false}
          style={styles.socialLinkInput}
        />
      </View>

      <View style={styles.updateButtonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("")}>
          <Text style={styles.nextText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  editText: {
    width: 183,
    height: 21,
    marginTop: -30,
    marginBottom: 20,
    marginLeft: 100,
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    color: "rgba(94, 102, 112, 1)",
  },
  companyLinkContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: theme.verticalSpacing.space_10, 
    marginTop: 20,
  },
  companyLinkInput: {
    width: "100%",
    paddingHorizontal: 15, 
  },
  socialLinksText: {
    width: 136,
    height: 29,
    marginBottom: 10, 
    marginTop:40,
    left: 23,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 29.05,
    color: 'rgba(0, 0, 0, 1)',
  },
  socialLinkInputContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: theme.verticalSpacing.space_10,
  },
  socialLinkInput: {
    width: "100%",
    paddingHorizontal: 15,
  },
  updateButtonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: theme.verticalSpacing.space_70, 
  },
  nextButton: {
    backgroundColor: "rgba(121, 0, 186, 1)",
    width: "100%",
    height: theme.verticalSpacing.space_50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.boderRadius.large_10,
    flexDirection: 'row',
  },
  nextText: {
    fontSize: theme.fontSizes.size_16,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 10,
  },
});

export default UpdateCompanydetailsscreen;