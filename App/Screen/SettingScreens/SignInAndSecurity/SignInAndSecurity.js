import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import SettingHeader from "../SettingHeader/SettingsHeader";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SignInAndSecurity = ({ navigation }) => {
  const [profileId, setProfileId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const fetchProfileId = async () => {
    try {
      const id = await AsyncStorage.getItem("profileId");
      setProfileId(id);
      console.log("profileId =", id);
    } catch (error) {
      console.log("Error fetching profile ID:", error);
    }
  };

  const fetchProfileData = async () => {
    try {
      const response = await fetch(
        "https://job-portal-candidate-be.onrender.com/basic/profileEdit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: profileId }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setEmail(data.email);
        setPhone(data.mobile);
        console.log("Profile fetched:", data);
      }
    } catch (error) {
      console.log("Error fetching profile data:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProfileId();
      if (profileId) {
        fetchProfileData();
      }
    }, [profileId])
  );

  const updateProfileData = async () => {
    try {
      const response = await fetch(
        `https://job-portal-candidate-be.onrender.com/basic/profileUpdate/${profileId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            mobile: phone,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Profile updated successfully");
        setIsEditing(false);
        console.log("Updated:", data);
      }
    } catch (error) {
      console.log("Update failed:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SettingHeader />
      <ScrollView style={styles.container}>
        <Text style={styles.SectionTitle}>Sign In & Security</Text>

        {/* Email Field */}
        <View style={styles.InputContainer}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            editable={isEditing}
            placeholderTextColor="#5E6670"
          />
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Icon name="square-edit-outline" size={24} color="#ccc" />
          </TouchableOpacity>
        </View>

        {/* Phone Number Field */}
        <View style={styles.InputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            editable={isEditing}
            placeholderTextColor="#5E6670"
          />
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Icon name="square-edit-outline" size={24} color="#ccc" />
          </TouchableOpacity>
        </View>

        {/* Change Password */}
        <TouchableOpacity
          style={styles.InputContainer}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Text style={styles.label}>Change Password</Text>
          <Icon name="chevron-right" size={25} color="#ccc" />
        </TouchableOpacity>

        {/* Save Button */}
        {isEditing && (
          <TouchableOpacity style={styles.saveButton} onPress={updateProfileData}>
            <Text style={styles.saveButtonText}>Save Settings</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  SectionTitle: {
    fontSize: 22,
    color: "#18191C",
    fontWeight: "500",
    marginBottom: 20,
  },
  InputContainer: {
    backgroundColor: "#F7F8F9",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  label: {
    fontSize: 15,
    color: "#5E6670",
    fontWeight: "500",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "#6A0DAD",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default SignInAndSecurity;
