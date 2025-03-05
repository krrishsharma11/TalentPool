import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';

const UploadDocuments = ({ navigation }) => {
  const [documents, setDocuments] = useState({
    photo: null,
    resume: null,
    additionalDocument: null,
  });

  const handleUpload = async (docType) => {
    try {
      const res = await DocumentPicker.pickSingle({
        type:
          docType === 'photo'
            ? [DocumentPicker.types.images]
            : docType === 'resume'
            ? [DocumentPicker.types.pdf]
            : [DocumentPicker.types.allFiles],
      });

      await uploadDocument(res, docType);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the document picker');
      } else {
        console.error('Document Picker Error: ', err);
      }
    }
  };

  const uploadDocument = async (file, docType) => {
    const formData = new FormData();
    formData.append(docType, {
      uri: file.uri,
      name: file.name,
      type: file.type,
    });

    try {
      const response = await fetch(
        'https://job-portal-candidate-be.onrender.com/basic/uploaddocument',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const contentType = response.headers.get('content-type');
      let result;

      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Received non-JSON response from server');
      }

      if (response.ok) {
        Alert.alert('Success', `${docType} uploaded successfully!`);
        setDocuments((prev) => ({ ...prev, [docType]: file.name }));
      } else {
        Alert.alert('Upload Failed', result.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Failed to upload document');
    }
  };

  const isSaveEnabled = Object.values(documents).some((doc) => doc !== null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Supporting Documents</Text>
      <Text style={styles.subtitle}>
        Upload your resume, photo, and additional documents (optional).
      </Text>

      {['photo', 'resume', 'additionalDocument'].map((type) => (
        <TouchableOpacity
          key={type}
          style={[styles.uploadButton, documents[type] && styles.selectedButton]}
          onPress={() => handleUpload(type)}
        >
          <Icon name="cloud-upload" size={16} color="#666" style={styles.icon} />
          <Text
            style={[
              styles.buttonText,
              documents[type] && styles.selectedText,
            ]}
          >
            Upload {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
          {documents[type] && (
            <Text style={styles.fileName}> ({documents[type]})</Text>
          )}
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.saveButton, !isSaveEnabled && styles.disabledButton]}
        disabled={!isSaveEnabled}
        onPress={() => navigation.navigate('ProfileCompletion')}
      >
        <Text style={styles.saveButtonText}>Save and Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 35,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: '#E0E0E0',
  },
  buttonText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  selectedText: {
    color: '#000',
    fontWeight: 'bold',
  },
  fileName: {
    fontSize: 12,
    color: '#333',
    marginLeft: 5,
  },
  icon: {
    marginLeft: 10,
  },
  saveButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#6A0DAD',
    alignItems: 'center',
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: '#B8B8B8',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UploadDocuments;