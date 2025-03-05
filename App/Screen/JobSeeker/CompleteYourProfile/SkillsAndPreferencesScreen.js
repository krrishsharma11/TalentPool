import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../../Components/reusableComponents/appHeader/customHeader';
import * as Svg from '../../../Assets/Images/svg';
import Stepper from './Stepper';
import { theme } from '../../../utils';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomDropDownTextInput from '../../../Components/reusableComponents/customDropDownTextInput/CustomDropDownTextInput';
import CustomButton from '../../../Components/reusableComponents/button/button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SkillsAndPreferencesScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: 'Python', value: 'Python' },
    { label: 'DSA', value: 'DSA' },
    { label: 'PHP', value: 'PHP' },
    { label: 'React Native', value: 'React Native' },
    { label: 'Node.js', value: 'Node.js' },
  ]);
  const [jobType, setJobType] = useState('');
  const [preferredDesignation, setPreferredDesignation] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [errors, setErrors] = useState({});

  // Validate all fields
  const validateFields = () => {
    const newErrors = {};

    if (value.length === 0) {
      newErrors.skills = 'Skills are required';
    }
    if (!jobType) {
      newErrors.jobType = 'Job type is required';
    }
    if (!preferredDesignation) {
      newErrors.preferredDesignation = 'Preferred designation is required';
    }
    if (!preferredLocation) {
      newErrors.preferredLocation = 'Preferred location is required';
    }

    const parsedMinSalary = Number(minSalary);
    const parsedMaxSalary = Number(maxSalary);

    if (isNaN(parsedMinSalary)) {
      newErrors.minSalary = 'Minimum salary must be a number';
    }
    if (isNaN(parsedMaxSalary)) {
      newErrors.maxSalary = 'Maximum salary must be a number';
    }

    if (!isNaN(parsedMinSalary) && !isNaN(parsedMaxSalary) && parsedMinSalary >= parsedMaxSalary) {
      newErrors.salaryRange = 'Minimum salary must be less than maximum salary';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveAndContinue = async () => {
    if (!validateFields()) {
      Alert.alert('Validation Error', 'Please fill all required fields correctly.');
      return;
    }

    const headersList = {
      Accept: '/',
      'Content-Type': 'application/json',
    };

    const bodyContent = JSON.stringify({
      skills: value,
      jobType: jobType,
      preferredDesignation: preferredDesignation,
      preferredLocation: preferredLocation,
      desiredSalary: {
        min: Number(minSalary),
        max: Number(maxSalary),
      },
    });

    console.log('Request Body:', bodyContent);

    try {
      const response = await fetch('https://job-portal-candidate-be.onrender.com/basic/skillsandexperience', {
        method: 'POST',
        body: bodyContent,
        headers: headersList,
      });

      const data = await response.json();
      console.log('API Response:', JSON.stringify(data, null, 2));

      if (!response.ok) {
        console.error('API Error:', data);
        Alert.alert('Error', data.message || 'Invalid response from server.');
        return;
      }

      if (data._id) {
        console.log('Received ID:', data._id);
        await AsyncStorage.setItem('skillsAndPreferencesId', data._id); // Save ID to AsyncStorage
        const skillsAndPreferencesId = await AsyncStorage.getItem('skillsAndPreferencesId'); // Retrieve ID from AsyncStorage
        console.log('Skills and Preferences ID:', skillsAndPreferencesId);
        Alert.alert('Success', 'Skills and preferences saved successfully!');
        navigation.navigate('UploadDocument'); // Navigate to UploadDocument screen
      } else {
        console.error('No ID received in response.');
        Alert.alert('Error', 'ID not received from the server.');
      }
    } catch (error) {
      console.error('Network Error:', error);
      Alert.alert('Error', 'Failed to save data. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.main}>
      <CustomHeader
        title={'Skills and Preferences'}
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => navigation.goBack()}
        rightIcon={undefined}
        onRightPress={undefined}
      />
      <Text style={styles.titleText}>
        Highlight Your Skills and Preferences to stand out
      </Text>
      <Stepper />

      <View style={styles.container}>
        <Text style={styles.label}>Skills</Text>
        <DropDownPicker
          multiple={true}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select skills"
          dropDownContainerStyle={styles.dropdown}
          style={styles.dropdownButton}
          listMode="SCROLLVIEW"
        />
        {errors.skills && <Text style={styles.errorText}>{errors.skills}</Text>}

        <View style={styles.selectedSkillsContainer}>
          {value.map((skill, index) => (
            <View key={index} style={styles.skillButton}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.JobTypeTitle}>Job Type</Text>
      <View style={styles.JobTypeContainer}>
        <TouchableOpacity style={styles.JobTypeBtn} onPress={() => setJobType('Full Time')}>
          <Svg.CheckboxActive />
          <Text style={styles.JobTypeText}>Full Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.JobTypeBtn} onPress={() => setJobType('Part Time')}>
          <Svg.CheckboxActive />
          <Text style={styles.JobTypeText}>Part Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.JobTypeBtn} onPress={() => setJobType('Freelance')}>
          <Svg.CheckboxActive />
          <Text style={styles.JobTypeText}>Freelance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.JobTypeBtn} onPress={() => setJobType('Internship')}>
          <Svg.CheckboxActive />
          <Text style={styles.JobTypeText}>Internship</Text>
        </TouchableOpacity>
      </View>
      {errors.jobType && <Text style={styles.errorText}>{errors.jobType}</Text>}

      <CustomDropDownTextInput
        value={preferredDesignation}
        onChange={(selected) => setPreferredDesignation(selected.value)}
        placeholder={'Preferred Designation'}
        data={[
          { label: 'Backend Developer', value: 'Backend Developer' },
          { label: 'Frontend Developer', value: 'Frontend Developer' },
          { label: 'Full Stack Developer', value: 'Full Stack Developer' },
          { label: 'Software Engineer', value: 'Software Engineer' },
          { label: 'Other', value: 'Other' },
        ]}
        inputStyle={undefined}
      />
      {errors.preferredDesignation && <Text style={styles.errorText}>{errors.preferredDesignation}</Text>}

      <CustomDropDownTextInput
        value={preferredLocation}
        onChange={(selected) => setPreferredLocation(selected.value)}
        placeholder={'Preferred Location'}
        data={[
          { label: 'Nagpur', value: 'Nagpur' },
          { label: 'Pune', value: 'Pune' },
          { label: 'San Francisco', value: 'San Francisco' },
          { label: 'London', value: 'London' },
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Remote', value: 'Remote' },
          { label: 'Other', value: 'Other' },
        ]}
        inputStyle={undefined}
      />
      {errors.preferredLocation && <Text style={styles.errorText}>{errors.preferredLocation}</Text>}

      <Text style={styles.SalaryRangeTitle}>Desired Salary Range</Text>
      <View style={styles.SalaryRangeContainer}>
        <CustomDropDownTextInput
          value={minSalary}
          onChange={({ value }) => setMinSalary(value)}
          placeholder={'Min'}
          data={[
            { label: '₹30000', value: '30000' },
            { label: '₹40000', value: '40000' },
            { label: '₹50000', value: '50000' },
            { label: '₹60000', value: '60000' },
            { label: '₹70000', value: '70000' },
            { label: 'Other', value: 'Other' },
          ]}
          style={styles.MinSalary}
        />
        <CustomDropDownTextInput
          value={maxSalary}
          onChange={({ value }) => setMaxSalary(value)}
          placeholder={'Max'}
          data={[
            { label: '₹50000', value: '50000' },
            { label: '₹60000', value: '60000' },
            { label: '₹70000', value: '70000' },
            { label: '₹80000', value: '80000' },
            { label: '₹100000', value: '100000' },
            { label: 'Other', value: 'Other' },
          ]}
          style={styles.MaxSalary}
        />
      </View>
      {errors.minSalary && <Text style={styles.errorText}>{errors.minSalary}</Text>}
      {errors.maxSalary && <Text style={styles.errorText}>{errors.maxSalary}</Text>}
      {errors.salaryRange && <Text style={styles.errorText}>{errors.salaryRange}</Text>}

      <TouchableOpacity style={styles.skips}>
        <Text style={styles.skipsText}>Skip</Text>
        <Svg.ArrowNext />
      </TouchableOpacity>

      <CustomButton
        title={'Save and Continue'}
        onPress={handleSaveAndContinue}
        style={styles.btn}
        textStyle={undefined}
      />
    </ScrollView>
  );
};

export default SkillsAndPreferencesScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    padding: 10,
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
  JobTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  JobTypeBtn: {
    flexDirection: 'row',
  },
  JobTypeText: {
    marginLeft: theme.horizontalSpacing.space_4,
    color: theme.lightColor.gray,
  },
  JobTypeTitle: {
    fontSize: theme.fontSizes.size_16,
    color: theme.lightColor.gray,
    marginBottom: theme.verticalSpacing.space_18,
  },
  SalaryRangeTitle: {
    fontSize: theme.fontSizes.size_16,
    color: theme.lightColor.gray,
    marginTop: theme.verticalSpacing.space_18,
  },
  SalaryRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MinSalary: {
    width: 150,
  },
  MaxSalary: {
    width: 150,
  },
  skips: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.verticalSpacing.space_18,
    marginRight: theme.horizontalSpacing.space_12,
  },
  skipsText: {
    marginRight: theme.horizontalSpacing.space_6,
    fontSize: theme.fontSizes.size_14,
  },
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  label: {
    fontSize: theme.fontSizes.size_16,
    color: theme.lightColor.gray,
    marginBottom: 8,
  },
  dropdownButton: {
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
  },
  dropdown: {
    borderColor: '#ccc',
  },
  selectedSkillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  skillButton: {
    backgroundColor: theme.lightColor.gray,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 5,
    marginBottom: 5,
  },
  skillText: {
    color: '#fff',
    fontSize: 14,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});