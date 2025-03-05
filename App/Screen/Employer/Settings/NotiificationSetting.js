import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const NotificationSetting = () => {
  const [allNotifications, setAllNotifications] = useState(false);
  const [personalMessage, setPersonalMessage] = useState(false);
  const [jobPostUpdates, setJobPostUpdates] = useState(false);
  const [candidateRecommendations, setCandidateRecommendations] = useState(false);

  const handleSaveSettings = () => {
    Alert.alert('Settings Saved', 'Your notification settings have been saved.');
  };

  const toggleCheckBox = (setFunction, currentValue) => {
    setFunction(!currentValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.companyName}>Notification Settings</Text>
      <View style={styles.card}>
        <Image source={require('../../../Assets/Icons/Info1.png')}
         style={styles.logo}
         resizeMode="contain"
         />
        <View>
        <Text style={styles.companyName1}>Infosys Limited</Text>
          <Text style={styles.companyInfo}>Information Technology</Text>
          <Text style={styles.companyInfo}>Banglore</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.optionCard} onPress={() => toggleCheckBox(setAllNotifications, allNotifications)}>
        <Text style={styles.optionText}>All Notifications</Text>
        <CheckBox value={allNotifications} onValueChange={setAllNotifications} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionCard} onPress={() => toggleCheckBox(setPersonalMessage, personalMessage)}>
        <Text style={styles.optionText}>Personal Message</Text>
        <CheckBox value={personalMessage} onValueChange={setPersonalMessage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionCard} onPress={() => toggleCheckBox(setJobPostUpdates, jobPostUpdates)}>
        <Text style={styles.optionText}>Job Post Updates</Text>
        <CheckBox value={jobPostUpdates} onValueChange={setJobPostUpdates} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionCard} onPress={() => toggleCheckBox(setCandidateRecommendations, candidateRecommendations)}>
        <Text style={styles.optionText}>Candidate Recommendations</Text>
        <CheckBox value={candidateRecommendations} onValueChange={setCandidateRecommendations} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveSettings}>
        <Text style={styles.saveButtonText}>Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  companyName1:{
    color:'#666666',
    fontSize: 22, 
    
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 38,
    marginTop:10,
    padding: 20,
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    borderColor: '#D3D3D39C', 
    borderWidth: 2 ,
    height:100
  },
  logo: {
    width: 80, 
    height: 80, 
    borderRadius: 60, 
    backgroundColor: '#92C0FF', 
    overflow: 'hidden', 
    marginRight:5,
    marginRight:10
  },
  companyName: {
    fontSize: 22, 
    fontWeight: '500', 
    marginHorizontal: 16, 
    marginBottom: 15, 
    color: '#18191C', 
    textAlign: 'center', 
    marginTop: 35 
  },
  companyInfo: {
    fontSize: 14,
    color: '#666666',
  },
  optionCard: {
    flexDirection: 'row',
    backgroundColor: "#F7F8F9",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: '#D3D3D39C', 
    borderWidth: 2,
    borderRadius:8,
    padding: 15, 
    marginBottom: 10, 
    
  },
  optionText: {
    fontSize: 16,
    color:'#8391A1',
  },
  saveButton: {
    marginTop: 80,
    backgroundColor: '#7900BA',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationSetting;
