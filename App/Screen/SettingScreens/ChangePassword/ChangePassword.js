import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsHeader from '../SettingHeader/SettingsHeader';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [secureOldPassword, setSecureOldPassword] = useState(true);
    const [secureNewPassword, setSecureNewPassword] = useState(true);
    const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

    return (
        <View style={styles.wrapper}>
            <SettingsHeader />
            <View style={styles.container}>
                <Text style={styles.header}>Change Password</Text>
                <Text style={styles.subHeader}>Set a new password to access your account</Text>

                {/* Old Password */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Old Password"
                        placeholderTextColor="#5E6670"
                        secureTextEntry={secureOldPassword}
                        value={oldPassword}
                        onChangeText={setOldPassword}
                    />
                    <TouchableOpacity onPress={() => setSecureOldPassword(!secureOldPassword)}>
                        <Icon name={secureOldPassword ? "eye-off" : "eye"} size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* New Password */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="New Password"
                        placeholderTextColor="#5E6670"
                        secureTextEntry={secureNewPassword}
                        value={newPassword}
                        onChangeText={setNewPassword}
                    />
                    <TouchableOpacity onPress={() => setSecureNewPassword(!secureNewPassword)}>
                        <Icon name={secureNewPassword ? "eye-off" : "eye"} size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* Confirm Password */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="#5E6670"
                        secureTextEntry={secureConfirmPassword}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TouchableOpacity onPress={() => setSecureConfirmPassword(!secureConfirmPassword)}>
                        <Icon name={secureConfirmPassword ? "eye-off" : "eye"} size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* Forgot Password */}
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forget Password?</Text>
                </TouchableOpacity>

                {/* Change Password Button */}
                <TouchableOpacity style={styles.changeButton}>
                    <Text style={styles.buttonText}>Change Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: { flex: 1 },
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    header: { fontSize: 22, marginBottom: 5, textAlign: 'center', color: '#18191C', fontWeight: '500' },
    subHeader: { fontSize: 17, color: "#666666", marginBottom: 25, textAlign: 'center' },
    inputContainer: {
        backgroundColor: "#F7F8F9",
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 70,
        borderWidth: 1,
        borderColor: "#D3D3D3",
    },
    input: { flex: 1, fontSize: 16, color: "#333" },
    forgotPassword: { alignSelf: "flex-end", color: "#6A1B9A", fontSize: 14, marginBottom: 20 },
    changeButton: { backgroundColor: "#7900BA", padding: 15, borderRadius: 8, alignItems: "center" },
    buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default ChangePassword;
