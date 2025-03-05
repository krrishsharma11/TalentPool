import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../../Components/reusableComponents/appHeader/customHeader';
import * as Svg from '../../../Assets/Images/svg';
import Stepper from './Stepper';
import { String, theme } from '../../../utils';
import CustomTextInput from '../../../Components/reusableComponents/customTextInput/customTextInput';
import CustomButton from '../../../Components/reusableComponents/button/button';
import DocumentPicker from 'react-native-document-picker';

const UploadDocumentsScreen = ({ navigation }) => {
  const [documents, setDocuments] = useState({
    photo: 'Upload Photo',
    resume: 'Upload Resume',
    additional: 'Additional Documents (Optional)',
  });

  const [loading, setLoading] = useState(false);

  const handleUpload = async (type, fileType) => {
    try {
      const file = await DocumentPicker.pickSingle({ type: [fileType] });

      // Set document name in UI
      setDocuments((prev) => ({ ...prev, [type]: file.name }));

      // Create FormData
      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.name,
      });

      setLoading(true);

      // Upload to API
      const response = await fetch('https://job-portal-candidate-be.onrender.com/basic/uploaddocument', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        Alert.alert('Success', `${file.name} uploaded successfully!`);
      } else {
        Alert.alert('Error', result.message || 'Upload failed. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      if (!DocumentPicker.isCancel(error)) {
        Alert.alert('Error', 'An error occurred while uploading. Please try again.');
      }
    }
  };

  const UploadField = ({ label, type, fileType }) => (
    <TouchableOpacity onPress={() => handleUpload(type, fileType)} disabled={loading}>
      <CustomTextInput
        placeholder={documents[type]}
        editable={false}
        leftIcon={loading ? <ActivityIndicator size="small" color="blue" /> : <Svg.UploadIcon />}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.main}>
      <CustomHeader
        title="Upload Documents"
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => navigation.goBack()}
      />
      <Text style={styles.titleText}>Upload Supporting Documents</Text>
      <Stepper />
      <Text style={styles.titleText}>{String.UploadDocumentsubTitle}</Text>

      <UploadField label="Upload Photo" type="photo" fileType={DocumentPicker.types.images} />
      <UploadField label="Upload Resume" type="resume" fileType={DocumentPicker.types.pdf} />
      <UploadField label="Additional Documents (Optional)" type="additional" fileType={DocumentPicker.types.allFiles} />

      <CustomButton title="Save and Continue" onPress={() => navigation.navigate('ProfileCompletion')} style={styles.btn} disabled={loading} />
    </View>
  );
};

export default UploadDocumentsScreen;

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
    marginTop: theme.verticalSpacing.space_38,
  },
});
