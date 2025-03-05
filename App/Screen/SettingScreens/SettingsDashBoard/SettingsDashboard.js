import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsHeader from '../SettingHeader/SettingsHeader'


const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            {/* Call Header outside the container */}
            <SettingsHeader />

            <View style={styles.container}>
                <TouchableOpacity style={styles.optionContainer}
                    onPress={() => navigation.navigate("AppPreference")}>

                    <Icon name="cog-outline" size={24} color="#6B44E0" />
                    <Text style={styles.optionText}>App Preferences</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionContainer}
                    onPress={() => navigation.navigate('NotificationScreenSetting')}>
                    <Icon name="bell-outline" size={24} color="#6B44E0" />
                    <Text style={styles.optionText}>Notification</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('SiginandSecurity')}>
                    <Icon name="lock-outline" size={24} color="#6B44E0" />
                    <Text style={styles.optionText}>Sign In & Security</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('FaQ')}>
                    <Icon name="headset" size={24} color="#6B44E0" />
                    <Text style={styles.optionText}>Help & Support</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('TermsandCondition')}>
                    <Icon name="file-document-outline" size={24} color="#6B44E0" />
                    <Text style={styles.optionText}>User Terms & Conditions</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionContainer} onPress={() => console.log("Sign Out")}>
                    <Icon name="logout" size={24} color="#6B44E0" />
                    <Text style={styles.optionText}>Sign Out</Text>
                    <Icon name="chevron-right" size={24} color="#ccc" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },

    optionContainer: {
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

    optionText: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: "#333",
    },

});

export default SettingsScreen;
