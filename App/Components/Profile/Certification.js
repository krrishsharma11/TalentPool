import React, { useState } from 'react';
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
import axios from 'axios';
import { COLORS } from '../../Constants/Colors';


const Certification = ({ setCurrTab }) => {
  const [certifications, setCertifications] = useState([
    { certificationName: '', issuingOrganization: '', credentialsId: '', dateCompletion: '', aboutCourse: '' }
  ]);

  // Function to handle text input change
  const handleChange = (index, field, value) => {
    const newCertifications = [...certifications];
    newCertifications[index][field] = value;
    setCertifications(newCertifications);
  };

  // Function to add a new certification field
  const addCertification = () => {
    setCertifications([
      ...certifications,
      { certificationName: '', issuingOrganization: '', credentialsId: '', dateCompletion: '', aboutCourse: '' }
    ]);
  };

  // Function to submit data
  const handleSubmit = async () => {
    try {
      console.log("Sending request to API:", certifications);

      const response = await axios.post(
        'https://job-portal-candidate-be.onrender.com/basic/certification',
        { certification: certifications },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log("Response Data:", response.data);

      Alert.alert('Success', 'Certification details added successfully!');
      setCurrTab('5');
    } catch (error) {
      if (error.response) {
        console.error('Error Response:', error.response.data);
        // Alert.alert('Server Error', Error: ${error.response.status} - ${error.response.data.message || "Internal Server Error"});
      } else if (error.request) {
        console.error('No Response from Server:', error.request);
        Alert.alert('Network Error', 'No response from server. Check API availability.');
      } else {
        console.error('Error Message:', error.message);
        Alert.alert('Request Error', error.message);
      }
    }
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Certifications</Text>

      {certifications.map((cert, index) => (
        <View key={index}>
          <TextInput
            style={styles.input}
            placeholder="Certification Name"
            placeholderTextColor="#999"
            value={cert.certificationName}
            onChangeText={(text) => handleChange(index, 'certificationName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Issuing Organization"
            placeholderTextColor="#999"
            value={cert.issuingOrganization}
            onChangeText={(text) => handleChange(index, 'issuingOrganization', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Credentials ID"
            placeholderTextColor="#999"
            value={cert.credentialsId}
            onChangeText={(text) => handleChange(index, 'credentialsId', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Date of Completion (YYYY)"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={cert.dateCompletion}
            onChangeText={(text) => handleChange(index, 'dateCompletion', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="About Course"
            placeholderTextColor="#999"
            value={cert.aboutCourse}
            onChangeText={(text) => handleChange(index, 'aboutCourse', text)}
          />
        </View>
      ))}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.addJobButton} onPress={addCertification}>
          <Icon name="plus-box-outline" size={24} color="#6A0DAD" />
          <Text style={styles.addJobText}>Add Another Certification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addJobButton} onPress={() => setCurrTab('5')}>
          <Text style={{ color: COLORS.primaryThemeColor, fontWeight: '500', fontSize: 17 }}>Skip</Text>
          <Icon name="arrow-right" size={24} color="#6A0DAD" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
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
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
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

export default Certification;