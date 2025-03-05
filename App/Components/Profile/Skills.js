import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../Constants/Colors';
import { CommonStyles } from '../../Constants/Styles';
import * as Svg from '../../Assets/Images/svg';

const UpdateSkillsScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [skillsAndPreferencesId, setSkillsAndPreferencesId] = useState('');
  const [jobType, setJobType] = useState('');
  const [fullTime, setFullTime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [freelance, setFreelance] = useState(false);
  const [internship, setInternship] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [preferredDesignation, setPreferredDesignation] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [desiredSalary, setDesiredSalary] = useState({ min: '', max: '' });

  const skillsList = ['Figma', 'Canva', 'Photoshop', 'Html', 'C++'];

  // Fetch skillsAndPreferencesId from AsyncStorage
  const fetchSkillsAndPreferencesId = async () => {
    try {
      const id = await AsyncStorage.getItem('skillsAndPreferencesId');
      setSkillsAndPreferencesId(id);
      console.log('Skills and Preferences ID:', id);
    } catch (error) {
      console.log('Error fetching skillsAndPreferencesId:', error);
    }
  };

  // Fetch saved skills and preferences data
  const fetchSkillsData = async () => {
    try {
      const response = await fetch(
        'https://job-portal-candidate-be.onrender.com/basic/skillsAndExperienceEdit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: skillsAndPreferencesId,
          }),
        },
      );

      const data = await response.json();
      console.log('Fetched Data:', data);

      // Populate fetched data into state
      setSelectedSkills(data.skills || []);
      setPreferredDesignation(data.preferredDesignation || '');
      setPreferredLocation(data.preferredLocation || '');
      setDesiredSalary(data.desiredSalary || { min: '', max: '' });
      setJobType(data.jobType || '');

      // Set job type checkboxes
      setFullTime(data.jobType === 'Full Time');
      setPartTime(data.jobType === 'Part Time');
      setFreelance(data.jobType === 'Freelance');
      setInternship(data.jobType === 'Internship');

      setLoading(false);
    } catch (error) {
      console.log('Error fetching skills data:', error);
      setLoading(false);
    }
  };

  // Fetch data on focus
  useFocusEffect(
    useCallback(() => {
      fetchSkillsAndPreferencesId();
      fetchSkillsData();
    }, [skillsAndPreferencesId]),
  );

  // Update skills and preferences data
  const updateSkillsData = async () => {
    try {
      const response = await fetch(
        `https://job-portal-candidate-be.onrender.com/basic/skillsandexperienceUpdate/${skillsAndPreferencesId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            skills: selectedSkills,
            jobType: fullTime ? 'Full Time' : partTime ? 'Part Time' : freelance ? 'Freelance' : 'Internship',
            preferredDesignation,
            preferredLocation,
            desiredSalary,
          }),
        },
      );

      const data = await response.json();
      if (response.ok) {
        console.log('Update Success:', data);
        Alert.alert('Success', 'Skills and preferences updated successfully!');
        navigation.goBack(); // Navigate back to the previous screen
      } else {
        Alert.alert('Error', data.message || 'Failed to update details.');
      }
    } catch (error) {
      console.log('Error updating skills data:', error);
      Alert.alert('Error', 'Failed to update details. Please try again.');
    }
  };

  // Toggle skill selection
  const toggleSkill = (skill) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill) // Remove skill if already selected
        : [...prevSkills, skill], // Add skill if not selected
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color={COLORS.primary} />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
        <Text style={styles.label}>Job Type</Text>

        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <Text style={styles.title}>
            Highlight Your Skills and Preferences to stand out
          </Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillsLabel}>Skills</Text>
            <View style={styles.skillsList}>
              {skillsList.map((skill) => (
                <TouchableOpacity
                  key={skill}
                  style={[
                    styles.skillButton,
                    selectedSkills.includes(skill) && styles.selectedSkill,
                  ]}
                  onPress={() => toggleSkill(skill)}>
                  <Text
                    style={[
                      styles.skillText,
                      selectedSkills.includes(skill) && styles.selectedSkillText,
                    ]}>
                    {skill}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.JobTypeTitle}>Job Type</Text>
        <View style={styles.JobTypeContainer}>
          <TouchableOpacity
            style={styles.JobTypeBtn}
            onPress={() => {
              setJobType('Full Time');
              setFullTime(true);
              setPartTime(false);
              setFreelance(false);
              setInternship(false);
            }}>
            <Svg.CheckboxActive />
            <Text style={styles.JobTypeText}>Full Time</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.JobTypeBtn}
            onPress={() => {
              setJobType('Part Time');
              setFullTime(false);
              setPartTime(true);
              setFreelance(false);
              setInternship(false);
            }}>
            <Svg.CheckboxActive />
            <Text style={styles.JobTypeText}>Part Time</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.JobTypeBtn}
            onPress={() => {
              setJobType('Freelance');
              setFullTime(false);
              setPartTime(false);
              setFreelance(true);
              setInternship(false);
            }}>
            <Svg.CheckboxActive />
            <Text style={styles.JobTypeText}>Freelance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.JobTypeBtn}
            onPress={() => {
              setJobType('Internship');
              setFullTime(false);
              setPartTime(false);
              setFreelance(false);
              setInternship(true);
            }}>
            <Svg.CheckboxActive />
            <Text style={styles.JobTypeText}>Internship</Text>
          </TouchableOpacity>
        </View>

        <Dropdown
          style={[styles.input]}
          itemTextStyle={{
            color: 'black',
            marginVertical: -8,
          }}
          data={[
            { label: 'Software Developer', value: 'Software Developer' },
            { label: 'Data Scientist', value: 'Data Scientist' },
          ]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Preferred Designation'}
          value={preferredDesignation}
          onChange={(item) => setPreferredDesignation(item.value)}
        />

        <Dropdown
          style={[styles.input]}
          itemTextStyle={{
            color: 'black',
            marginVertical: -8,
          }}
          data={[
            { label: 'Nagpur', value: 'Nagpur' },
            { label: 'Kolkata', value: 'Kolkata' },
            { label: 'Mumbai', value: 'Mumbai' },
            { label: 'Bangalore', value: 'Bangalore' },
            { label: 'Delhi', value: 'Delhi' },
          ]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Preferred Location'}
          value={preferredLocation}
          onChange={(item) => setPreferredLocation(item.value)}
        />

        <Text style={{ fontSize: 15, marginVertical: 10 }}>
          Desired Salary Range
        </Text>
        <View style={styles.salaryContainer}>
          <Dropdown
            style={[styles.salaryInput]}
            itemTextStyle={{
              color: 'black',
              marginVertical: -8,
            }}
            data={[
              { label: '15k', value: '15000' },
              { label: '30k', value: '30000' },
              { label: '45k', value: '45000' },
              { label: '60k', value: '60000' },
            ]}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Min'}
            value={desiredSalary.min}
            onChange={(item) =>
              setDesiredSalary({ ...desiredSalary, min: item.value })
            }
          />

          <Dropdown
            style={[styles.salaryInput]}
            itemTextStyle={{
              color: 'black',
              marginVertical: -8,
            }}
            data={[
              { label: '30k', value: '30000' },
              { label: '45k', value: '45000' },
              { label: '60k', value: '60000' },
              { label: '80k', value: '80000' },
            ]}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Max'}
            value={desiredSalary.max}
            onChange={(item) =>
              setDesiredSalary({ ...desiredSalary, max: item.value })
            }
          />
        </View>

        <TouchableOpacity
          style={CommonStyles.button}
          onPress={updateSkillsData}>
          <Text style={styles.buttonText}>Save and Continue</Text>
          <Icon name={'arrow-right'} size={22} color={'#FFFFFF'} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UpdateSkillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#D3D3D39C',
  },
  skillsLabel: {
    fontSize: 16,
    color: '#000000',
    marginRight: 10,
  },
  skillsList: {
    flexDirection: 'row',
  },
  skillButton: {
    backgroundColor: '#666666',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  selectedSkill: {
    backgroundColor: '#666',
  },
  skillText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  selectedSkillText: {
    color: '#FFF',
  },
  label: {
    fontSize: 16,
    color: COLORS.regularText,
    marginBottom: 5,
    marginTop: 12,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#F7F8F9',
  },
  salaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  salaryInput: {
    width: '48%',
    height: 55,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F7F8F9',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  JobTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  JobTypeBtn: {
    flexDirection: 'row',
  },
  JobTypeText: {
    marginLeft: 4,
    color: 'gray',
  },
  JobTypeTitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 18,
  },
});