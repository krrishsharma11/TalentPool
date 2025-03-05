import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PasswordChangeSetting = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntryOld, setSecureTextEntryOld] = useState(true);
  const [secureTextEntryNew, setSecureTextEntryNew] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New passwords do not match.');
    } else {
      Alert.alert('Password Changed', 'Your password has been successfully changed.');
    }
  };

  const toggleSecureTextEntry = (setSecureTextEntry, secureTextEntry) => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Change Password</Text>
      <Text style={styles.subHeader}>Set a new password to access your account</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Old Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter old password"
            value={oldPassword}
            secureTextEntry={secureTextEntryOld}
            onChangeText={setOldPassword}
          />
          <TouchableOpacity onPress={() => toggleSecureTextEntry(setSecureTextEntryOld, secureTextEntryOld)}>
            <Icon name={secureTextEntryOld ? 'visibility-off' : 'visibility'} size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>New Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            value={newPassword}
            secureTextEntry={secureTextEntryNew}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity onPress={() => toggleSecureTextEntry(setSecureTextEntryNew, secureTextEntryNew)}>
            <Icon name={secureTextEntryNew ? 'visibility-off' : 'visibility'} size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Confirm new password"
            value={confirmPassword}
            secureTextEntry={secureTextEntryConfirm}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => toggleSecureTextEntry(setSecureTextEntryConfirm, secureTextEntryConfirm)}>
            <Icon name={secureTextEntryConfirm ? 'visibility-off' : 'visibility'} size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forget Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
        <Text style={styles.changePasswordButtonText}>Change Password</Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#18191C',
    textAlign: 'center',
    marginBottom: 10,

    marginTop:40,
    
  },
  subHeader: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
    marginTop:20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D3D3D39C',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F7F8F9',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  forgotPassword: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#7900BA',
  },
  changePasswordButton: {
    backgroundColor: '#7900BA',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  changePasswordButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PasswordChangeSetting;
