import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../../Components/reusableComponents/appHeader/customHeader';
import * as Svg from '../../../Assets/Images/svg';
import Stepper from './Stepper';
import { theme } from '../../../utils';
import CustomTextInput from '../../../Components/reusableComponents/customTextInput/customTextInput';
import CustomButton from '../../../Components/reusableComponents/button/button';
import CustomDropDownTextInput from '../../../Components/reusableComponents/customDropDownTextInput/CustomDropDownTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EducationDetailsScreen = ({ navigation }) => {
  const [highestDegree, setHighestDegree] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [yearOfGraduation, setYearOfGraduation] = useState('');
  const [specialization, setSpecialization] = useState('');

  const educationData = {
    education: [
      {
        highestDegree: highestDegree,
        institutionName: institutionName,
        yearOfGraduation: yearOfGraduation,
        specialization: specialization,
      },
    ],
  };

  const PostEducationDetails = async () => {
    try {
      const response = await fetch(
        'https://job-portal-candidate-be.onrender.com/basic/education',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(educationData),
        }
      );

      const data = await response.json();

      // Store values only if they are valid
      if (data?._id) {
        await AsyncStorage.setItem('EducationUserId', data._id.toString());
      } else {
        console.warn('No EducationUserId received from API');
      }

      if (data?.education && data.education[0]?._id) {
        await AsyncStorage.setItem(
          'EducationId',
          data.education[0]._id.toString()
        );
      } else {
        console.warn('No EducationId received from API');
      }

      const euid = await AsyncStorage.getItem('EducationUserId');
      const eid = await AsyncStorage.getItem('EducationId');

      if (response.ok) {
        console.log('Success', data);
        console.log('euid = ', euid);
        console.log('eid = ', eid);
        Alert.alert('Data Saved Successfully');
        navigation.navigate('WorkExperience');
      } else {
        console.log('Error', data);
        Alert.alert('Failed to save data', data.message || 'Unknown error');
      }
    } catch (error) {
      console.log('Error posting education details:', error);
      Alert.alert('Network Error', 'Failed to connect to the server.');
    }
  };

  return (
    <View style={styles.main}>
      <CustomHeader
        title={'Education Details'}
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => navigation.goBack()}
      />
      <Text style={styles.titleText}>Your Educational Background</Text>
      <Stepper />


{/* We have to send Hear the  hadcode values  */}
      <CustomDropDownTextInput
        value={highestDegree}
        onChange={({ value }) => setHighestDegree(value)}
        placeholder={'Highest Degree'}
        data={[
          { label: 'High School Diploma or Equivalent', value: 'High School' },
          { label: "Associate's Degree (A.A., A.S.)", value: "Associate's Degree" },
          { label: "Bachelor's Degree (B.A., B.S.)", value: "Bachelor's Degree" },
          { label: "Bachelor's Degree in Engineering (BEng, B.Tech, B.Sc. Eng.)", value: "Bachelor's Degree in Engineering" },
          { label: "Master's Degree (M.A., M.S.)", value: "Master's Degree" },
          { label: "Master's Degree in Engineering (MEng, M.Sc. Eng.)", value: "Master's Degree in Engineering" },
          { label: 'Doctoral Degree (Ph.D., Ed.D., M.D.)', value: 'Doctoral Degree' },
          { label: 'Doctoral Degree in Engineering (D.Eng, Ph.D. in Engineering)', value: 'Doctoral Degree in Engineering' },
          { label: 'Professional Degree (J.D., M.D., D.D.S.)', value: 'Professional Degree' },
          { label: 'Other', value: 'Other' },
        ]}
      />

      <CustomTextInput
        value={institutionName}
        onChangeText={text => setInstitutionName(text)}
        placeholder={'Institution Name'}
      />
      <CustomTextInput
        value={yearOfGraduation}
        onChangeText={text => setYearOfGraduation(text)}
        placeholder={'Year of Graduation'}
      />
      <CustomTextInput
        value={specialization}
        onChangeText={text => setSpecialization(text)}
        placeholder={'Specialization (optional)'}
      />

      <TouchableOpacity style={styles.AddEducation}>
        <Svg.AddIcon />
        <Text style={styles.AddEducationText}>Add Another Education</Text>
      </TouchableOpacity>

      <CustomButton
        title={'Save and Continue'}
        onPress={() => PostEducationDetails()}
        style={styles.btn}
      />
    </View>
  );
};

export default EducationDetailsScreen;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  titleText: {
    fontSize: theme.fontSizes.size_18,
    color: theme.lightColor.gray,
    textAlign: 'center',
    marginTop: theme.verticalSpacing.space_12,
  },
  btn: {
    marginTop: theme.verticalSpacing.space_26,
  },
  AddEducation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.verticalSpacing.space_14,
  },
  AddEducationText: {
    color: theme.lightColor.gray,
    paddingLeft: theme.horizontalSpacing.space_10,
  },
});
