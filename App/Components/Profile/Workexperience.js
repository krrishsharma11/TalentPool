import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {theme} from '../../utils';
import * as Svg from '../../Assets/Images/svg';
import {useFocusEffect} from '@react-navigation/native';

const WorkExperience = ({setCurrTab}) => {
  const [iAmFresher, SetiAmFresher] = useState(false);
  const [showStartDatePicker, SetShowStartDatePicker] = useState(false);
  const [selectedStartDate, SetSelectedStartDate] = useState(null);
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [responsiblities, setResponsibilities] = useState('');
  const [showEndDatePicker, SetShowEndDatePicker] = useState(false);
  const [selectedEndDate, SetSelectedEndDate] = useState(null);
  const [workExperienceUserId, setWorkExperienceUserId] = useState('');
  const [workExperienceId, setWorkExperienceId] = useState('');

  const workExperienceData = {
    workExperience: [
      {
        fresher: iAmFresher,
        jobTitle: jobTitle,
        companyName: companyName,
        startDate: selectedStartDate,
        endDate: selectedEndDate,
        currentlyWorking: currentlyWorking,
        responsibilities: responsiblities,
      },
    ],
  };

const formatDate = (dateTimeString) => {
    if (!dateTimeString) return "Invalid Date";  // Handle null/undefined

    const date = new Date(dateTimeString);
    
    if (isNaN(date.getTime())) {
        return "Invalid Date";  // Handle invalid date values
    }

    return date.toISOString().split('T')[0];
};


  const fetchWorkUserId = async () => {
    try {
      const wuid = await AsyncStorage.getItem('workExperienceUserId');
      const wid = await AsyncStorage.getItem('workExperienceId');
      setWorkExperienceUserId(wuid);
      setWorkExperienceId(wid);
    } catch (error) {
      console.log(error);
    }
  };

  const workExperienceEditUrl =
    'https://job-portal-candidate-be.onrender.com/basic/workExperienceEdit';

  const fetchWorkExperienceData = async () => {
    try {
      const response = await fetch(workExperienceEditUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: workExperienceUserId,
        }),
      });
      const data = await response.json();
      SetiAmFresher(data.workExperience[0].fresher);
      setJobTitle(data.workExperience[0].jobTitle);
      setCompanyName(data.workExperience[0].companyName);
      SetSelectedStartDate(data.workExperience[0].startDate);
      SetSelectedEndDate(data.workExperience[0].endDate);
      setCurrentlyWorking(data.workExperience[0].currentlyWorking);
      setResponsibilities(data.workExperience[0].responsibilities);
      if (response.ok) {
        console.log('Sucess', data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchWorkUserId();
      fetchWorkExperienceData();
    }, [workExperienceUserId]),
  );

  const workExperienceUpdateUrl = `https://job-portal-candidate-be.onrender.com/basic/workExperienceUpdate/${workExperienceUserId}/${workExperienceId}`;

  const updateWorkExperienceData = async () => {
    try {
      const response = await fetch(workExperienceUpdateUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workExperienceData),
      });
      const data = await response.json();
      await AsyncStorage.setItem(
        'workExperienceId',
        data.workExperience[0]._id,
      );
      if (response.ok) {
        console.log('Sucess', data);
        Alert.alert('Successfully Updated');
        setCurrTab('4');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Update Your Work Experience</Text>
      {/* <View style={styles.checkboxContainer}>
        <CheckBox
          value={isFresher}
          onValueChange={setIsFresher}
          tintColors={{true: '#6A0DAD', false: '#6A0DAD'}}
        />
        <Text style={styles.checkboxLabel}>I am a Fresher</Text>
      </View> */}
      {/* <View style={styles.checkBoxContainer}>
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
      </View> */}
      <TouchableOpacity
        style={styles.WorkingCheck}
        onPress={() => setCurrentlyWorking(!iAmFresher)}>
        {iAmFresher ? (
          <Svg.CheckboxActive color={theme.lightColor.purple} />
        ) : (
          <Svg.CheckboxInactive color={theme.lightColor.purple} />
        )}
        <Text style={styles.WorkingCheckText}>i am fresher</Text>{' '}
      </TouchableOpacity>
      {/* {iAmFresher && (
        <> */}
      <TextInput
        value={jobTitle}
        onChangeText={text => setJobTitle(text)}
        style={styles.input}
        placeholder="Job Title"
        placeholderTextColor="#999"
      />
      <TextInput
        value={companyName}
        onChangeText={text => setCompanyName(text)}
        style={styles.input}
        placeholder="Company Name"
        placeholderTextColor="#999"
      />
      <View style={styles.dateInputContainer}>
        <TextInput
          value={formatDate(selectedStartDate)}
          onPress={text => selectedStartDate(text)}
          style={[styles.input, styles.dateInput]}
          placeholder="Start Date"
          placeholderTextColor="#999"
        />
        <Icon name="calendar" size={24} color="#6A0DAD" style={styles.icon} />
      </View>
      <View style={styles.dateInputContainer}>
        <TextInput
          value={formatDate(selectedEndDate)}
          onChangeText={text => SetSelectedEndDate(text)}
          style={[styles.input, styles.dateInput]}
          placeholder="End Date"
          placeholderTextColor="#999"
          editable={!currentlyWorking}
        />
        <Icon name="calendar" size={24} color="#6A0DAD" style={styles.icon} />
      </View>
      {/* <View style={styles.checkboxContainer}>
            <CheckBox
              value={currentlyWorking}
              onValueChange={() => setCurrentlyWorking(!currentlyWorking)}
              tintColors={{true: '#6A0DAD', false: '#6A0DAD'}}
            />
            <Text style={styles.checkboxLabel}>Currently Working Here</Text>
          </View> */}
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
      <TextInput
        value={responsiblities}
        onChangeText={text => setResponsibilities(text)}
        style={[styles.input, styles.textArea]}
        placeholder="Responsibilities"
        placeholderTextColor="#999"
        multiline
      />
      <TouchableOpacity style={styles.addJobButton}>
        <Icon name="plus-box-outline" size={24} color="#6A0DAD" />
        <Text style={styles.addJobText}>Add Another Job</Text>
      </TouchableOpacity>
      {/* </> */}
      {/* ) */}
      {/* } */}

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => [updateWorkExperienceData()]}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    backgroundColor: '#F8F8F8',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  dateInput: {
    flex: 1,
    paddingRight: 40,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  addJobButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addJobText: {
    fontSize: 16,
    color: '#6A0DAD',
    marginLeft: 8,
  },
  saveButton: {
    backgroundColor: '#6A0DAD',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 150,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
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
  WorkingCheckText: {
    paddingLeft: theme.horizontalSpacing.space_10,
  },
});

export default WorkExperience;