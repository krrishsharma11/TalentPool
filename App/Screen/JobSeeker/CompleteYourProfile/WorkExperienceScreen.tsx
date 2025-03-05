import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../Components/reusableComponents/appHeader/customHeader';
import * as Svg from '../../../Assets/Images/svg';
import Stepper from './Stepper';
import CustomTextInput from '../../../Components/reusableComponents/customTextInput/customTextInput';
import {theme} from '../../../utils';
import CustomButton from '../../../Components/reusableComponents/button/button';
import CustomDatePicker from '../../../Components/reusableComponents/CustomDatePicker/CustomDatePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkExperienceScreen = ({navigation}: any): React.JSX.Element => {
  const [iAmFresher, SetiAmFresher] = useState(false);
  const [showStartDatePicker, SetShowStartDatePicker] = useState(false);
  const [selectedStartDate, SetSelectedStartDate] = useState(null);
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [responsiblities, setResponsibilities] = useState('');
  const [showEndDatePicker, SetShowEndDatePicker] = useState(false);
  const [selectedEndDate, SetSelectedEndDate] = useState(null);

  const handleStartDateToggel = () => {
    SetShowStartDatePicker(true);
  };
  const handleEndDateToggel = () => {
    SetShowEndDatePicker(true);
  };

  // Format date to ISO string (YYYY-MM-DD)
  const formatDate = (date) => {
    if (!date) return ''; // Return empty string if date is null or undefined
    const formattedDate = new Date(date);
    if (isNaN(formattedDate.getTime())) return ''; // Return empty string if date is invalid
    return formattedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  const workExperienceData = {
    workExperience: [
      {
        fresher: iAmFresher,
        jobTitle: jobTitle,
        companyName: companyName,
        startDate: formatDate(selectedStartDate), // Format start date
        endDate: formatDate(selectedEndDate), // Format end date
        currentlyWorking: currentlyWorking,
        responsibilities: responsiblities,
      },
    ],
  };

  const PostWorkExperience = async () => {
    try {
      const response = await fetch(
        'https://job-portal-candidate-be.onrender.com/basic/workExperience',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(workExperienceData),
        },
      );
      const data = await response.json();

      if (response.ok) {
        console.log('Success', data);

        await AsyncStorage.setItem('workExperienceUserId', data._id);
        await AsyncStorage.setItem(
          'workExperienceId',
          data.workExperience[0]._id,
        );
        const wuid = await AsyncStorage.getItem('workExperienceUserId');
        const wid = await AsyncStorage.getItem('workExperienceId');
        Alert.alert('Data Saved Sucessfully');
        console.log('wuid=', wuid);
        console.log('wid=', wid);
        navigation.navigate('Certification');
      } else {
        console.log('Error', data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.main}>
      <CustomHeader
        title={'Work Experience'}
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => {
          navigation.goBack();
        }}
        rightIcon={undefined}
        onRightPress={undefined}
      />
      <Text style={styles.titleText}>Tell Us About Your Work Experience</Text>
      <Stepper />
      <View style={styles.checkBoxContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => SetiAmFresher(!iAmFresher)}>
            {iAmFresher && (
              <Svg.CheckboxActive color={theme.lightColor.purple} />
            )}
          </TouchableOpacity>
          <Text style={styles.text}>i am a Fresher</Text>
        </View>
      </View>

      <CustomTextInput
        value={jobTitle}
        onChangeText={(text: string) => setJobTitle(text)}
        placeholder={'Job Title'}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
        style={undefined}
        numberOfLines={undefined}
      />
      <CustomTextInput
        value={companyName}
        onChangeText={(text: string) => setCompanyName(text)}
        placeholder={'Company Name'}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
        style={undefined}
        numberOfLines={undefined}
      />

      <CustomDatePicker
        selectedDate={selectedStartDate}
        showDatePicker={showStartDatePicker}
        placeholder={'Start Date'}
        onPress={handleStartDateToggel}
        onConfirm={(date: React.SetStateAction<null>) => {
          if (date) {
            SetSelectedStartDate(date);
          }
          SetShowStartDatePicker(false);
        }}
        onCancel={() => {
          SetShowStartDatePicker(!showStartDatePicker);
        }}
      />
      <CustomDatePicker
        selectedDate={selectedEndDate}
        showDatePicker={showEndDatePicker}
        placeholder={'End Date'}
        onPress={handleEndDateToggel}
        onConfirm={(date: React.SetStateAction<null>) => {
          if (date) {
            SetSelectedEndDate(date);
          }
          SetShowEndDatePicker(false);
        }}
        onCancel={() => {
          SetShowEndDatePicker(!showEndDatePicker);
        }}
      />
      <TouchableOpacity
        style={styles.WorkingCheck}
        onPress={() => setCurrentlyWorking(!currentlyWorking)}>
        {currentlyWorking ? (
          <Svg.CheckboxActive color={theme.lightColor.purple} />
        ) : (
          <Svg.CheckboxInactive color={theme.lightColor.purple} />
        )}
        <Text style={styles.WorkingCheckText}>Currently Working Here</Text>{' '}
      </TouchableOpacity>
      <CustomTextInput
        value={responsiblities}
        onChangeText={(text: string) => setResponsibilities(text)}
        placeholder={'Responsibilities'}
        numberOfLines={4}
        multiline={true}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
        style={undefined}
      />
      <TouchableOpacity style={styles.AddAnotherJob}>
        <Svg.AddIcon />
        <Text style={styles.AddAnotherJobText}> Add Another Job</Text>
      </TouchableOpacity>
      <CustomButton
        title={'Save and Continue'}
        onPress={() => PostWorkExperience()}
        style={styles.btn}
        textStyle={undefined}
      />
    </View>
  );
};

export default WorkExperienceScreen;

const styles = StyleSheet.create({
  main: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  FresherCheck: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  FresherCheckText: {
    paddingLeft: theme.horizontalSpacing.space_10,
  },
  titleText: {
    fontSize: theme.fontSizes.size_18,
    color: theme.lightColor.gray,
    textAlign: 'center',
    marginTop: theme.verticalSpacing.space_12,
  },
  WorkingCheckText: {
    paddingLeft: theme.horizontalSpacing.space_10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: theme.horizontalSpacing.space_20,
    height: theme.verticalSpacing.space_20,
    borderWidth: 1,
    borderColor: theme.lightColor.purple,
    borderRadius: 5,
  },
  text: {
    fontSize: theme.fontSizes.size_16,
    color: '#00000082',
    marginLeft: 8,
  },
  WorkingCheck: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: theme.verticalSpacing.space_12,
  },
  AddAnotherJobText: {
    paddingLeft: theme.horizontalSpacing.space_10,
  },
  AddAnotherJob: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: theme.verticalSpacing.space_12,
  },
  btn: {
    marginTop: theme.verticalSpacing.space_26,
  },
});