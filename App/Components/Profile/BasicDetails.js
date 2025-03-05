import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Button,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const BasicDetails = ({setCurrTab}) => {
  const [profileId, setProfileId] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [userAbout, setUserAbout] = useState('');

  const fetchProfileId = async () => {
    try {
      const id = await AsyncStorage.getItem('profileId');
      if (id) setProfileId(id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfileData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('profileData');
      if (storedData) {
        const data = JSON.parse(storedData);
        setName(data.name);
        setDob(data.dob);
        setGender(data.gender);
        setMobile(data.mobile);
        setEmail(data.email);
        setLocation(data.locations);
        setUserAbout(data.userAbout);
        return;
      }
      
      const response = await fetch('https://job-portal-candidate-be.onrender.com/basic/profileEdit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: profileId}),
      });
      const data = await response.json();
      
      if (response.ok) {
        await AsyncStorage.setItem('profileData', JSON.stringify(data));
        setName(data.name);
        setDob(data.dob);
        setGender(data.gender);
        setMobile(data.mobile);
        setEmail(data.email);
        setLocation(data.locations);
        setUserAbout(data.userAbout);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProfileId();
      fetchProfileData();
    }, [profileId])
  );

  const updateProfileData = async () => {
    try {
      const response = await fetch(`https://job-portal-candidate-be.onrender.com/basic/profileUpdate/${profileId}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, dob, gender, mobile, email, locations: location, userAbout}),
      });
      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem('profileData', JSON.stringify(data));
        Alert.alert('Successfully Updated');
        setCurrTab('2');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Update your basic details</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Name" />
      <TextInput value={dob} onChangeText={setDob} style={styles.input} placeholder="DOB" />
      <Dropdown value={gender} onChange={({value}) => setGender(value)} style={styles.input} data={[{label: 'Male', value: 'Male'}, {label: 'Female', value: 'Female'}, {label: 'Others', value: 'Others'}]} labelField="label" valueField="value" placeholder={'Select Gender'} />
      <TextInput value={mobile} onChangeText={setMobile} style={styles.input} placeholder="Mobile" />
      <TextInput value={location} onChangeText={setLocation} style={styles.input} placeholder="Location" />
      <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Email" />
      <TextInput value={userAbout} onChangeText={setUserAbout} style={styles.input} placeholder="About" />
      <TouchableOpacity style={styles.saveButton} onPress={updateProfileData}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#FFF'},
  title: {fontSize: 18, fontWeight: '500', textAlign: 'center', marginBottom: 20, color: '#333'},
  input: {borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16, color: '#333', marginBottom: 12, backgroundColor: '#F8F8F8'},
  saveButton: {backgroundColor: '#6A0DAD', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 20},
  saveButtonText: {fontSize: 18, color: '#FFF', fontWeight: 'bold'},
});

export default BasicDetails;