import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../Constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const EducationDetails = ({ setCurrTab }) => {
  const [isFresher, setIsFresher] = useState(false);
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  const [highestDegree, setHighestDegree] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [yearOfGraduation, setYearOfGraduation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [educationUserId, setEductionUserId] = useState('');
  const [educationId, setEductionId] = useState('');

  const educationData = {
    education: [
      {
        highestDegree: highestDegree,
        institutionName: institutionName,
        yearOfGraduation: Number(yearOfGraduation),
        specialization: specialization,
      },
    ],
  };

  const fetchEducationId = async () => {
    try {
      const euid = await AsyncStorage.getItem('EducationUserId');
      const eid = await AsyncStorage.getItem('EducationId');
      setEductionUserId(euid);
      setEductionId(eid);
      console.log('educationUserId=', euid);
      console.log('educationId=', eid);
      return euid; // Return ID for chaining
    } catch (error) {
      console.log(error);
    }
  };

  const educationEditUrl =
    'https://job-portal-candidate-be.onrender.com/basic/educationUserEdit';

  const fetchEducationData = async (userId) => {
    try {
      const response = await fetch(educationEditUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: userId,
        }),
      });

      const data = await response.json();
      if (data.education && data.education.length > 0) {
        const edu = data.education[0];
        setHighestDegree(edu.highestDegree || '');
        setInstitutionName(edu.institutionName || '');
        setYearOfGraduation(edu.yearOfGraduation?.toString() || '');
        setSpecialization(edu.specialization || '');
        console.log('Fetched Data:', edu);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const educationUpdateUrl = `https://job-portal-candidate-be.onrender.com/basic/educationUserUpdate/${educationUserId}/${educationId}`;

  const updateEducationData = async () => {
    try {
      const response = await fetch(educationUpdateUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(educationData),
      });

      const data = await response.json();
      await AsyncStorage.setItem('EducationId', data.education[0]._id);
      if (response.ok) {
        console.log('Success', data);
        Alert.alert('Successfully Updated');
        setCurrTab('3');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        const userId = await fetchEducationId();
        if (userId) {
          await fetchEducationData(userId);
        }
      };
      loadData();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Update your Educational Background</Text>

      {!isFresher && (
        <>
          <TextInput
            value={highestDegree}
            onChangeText={(text) => setHighestDegree(text)}
            style={styles.input}
            placeholder="Highest Degree"
            placeholderTextColor="#999"
          />
          <TextInput
            value={institutionName}
            onChangeText={(text) => setInstitutionName(text)}
            style={styles.input}
            placeholder="Institution Name"
            placeholderTextColor="#999"
          />
          <TextInput
            value={yearOfGraduation ? yearOfGraduation.toString() : ''}
            onChangeText={(text) => setYearOfGraduation(text)}
            keyboardType="numeric"
            style={styles.input}
            placeholder="Year of Graduation"
            placeholderTextColor="#999"
          />
          <TextInput
            value={specialization}
            onChangeText={(text) => setSpecialization(text)}
            style={styles.input}
            placeholder="Specialization (optional)"
            placeholderTextColor="#999"
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.addJobButton}>
              <Icon name="plus-box-outline" size={24} color="#6A0DAD" />
              <Text style={styles.addJobText}>Add Another Education</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => updateEducationData()}
      >
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
    color: '#333',
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
  addJobButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  addJobText: {
    fontSize: 16,
    color: '#666666',
    marginLeft: 8,
  },
  saveButton: {
    backgroundColor: '#6A0DAD',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 150,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default EducationDetails;
