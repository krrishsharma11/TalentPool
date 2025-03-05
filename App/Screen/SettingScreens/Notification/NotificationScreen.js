import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import SettingsHeader from '../SettingHeader/SettingsHeader';

const NotificationScreen = () => {
    const [allNotifications, setAllNotifications] = useState(true);
    const [personalMessage, setPersonalMessage] = useState(true);
    const [jobPostUpdates, setJobPostUpdates] = useState(true);
    const [jobRecommendations, setJobRecommendations] = useState(true);
    const [shortlisted, setShortlisted] = useState(true);
    const [rejected, setRejected] = useState(true);

    const toggleAllNotifications = () => {
        const newValue = !allNotifications;
        setAllNotifications(newValue);
        setPersonalMessage(newValue);
        setJobPostUpdates(newValue);
        setJobRecommendations(newValue);
        setShortlisted(newValue);
        setRejected(newValue);
    };

    return (
        <View >
            {/* Header */}
            <SettingsHeader />
            {/* Notification Settings */}
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Notification Settings</Text>

                {/* All Notifications (Now using Checkbox) */}
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>All Notifications</Text>
                    <Checkbox status={allNotifications ? "checked" : "unchecked"} onPress={toggleAllNotifications} />
                </View>

                {/* Individual Notification Options */}
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Personal Message</Text>
                    <Checkbox
                        status={personalMessage ? "checked" : "unchecked"}
                        onPress={() => setPersonalMessage(!personalMessage)}
                    />
                </View>

                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Job Post Updates</Text>
                    <Checkbox
                        status={jobPostUpdates ? "checked" : "unchecked"}
                        onPress={() => setJobPostUpdates(!jobPostUpdates)}
                    />
                </View>

                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Job Recommendations</Text>
                    <Checkbox
                        status={jobRecommendations ? "checked" : "unchecked"}
                        onPress={() => setJobRecommendations(!jobRecommendations)}
                    />
                </View>

                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Notify when employers shortlisted me</Text>
                    <Checkbox
                        status={shortlisted ? "checked" : "unchecked"}
                        onPress={() => setShortlisted(!shortlisted)}
                    />
                </View>

                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Notify me when employers rejected me</Text>
                    <Checkbox
                        status={rejected ? "checked" : "unchecked"}
                        onPress={() => setRejected(!rejected)}
                    />
                </View>

                {/* Save Button */}
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Save Settings</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = {

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
        fontSize: 16,
        color: "#333",
    },

    saveButton: {
        backgroundColor: "#6A1B9A",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },

};

export default NotificationScreen;
