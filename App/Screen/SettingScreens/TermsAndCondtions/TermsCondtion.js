import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TermsAndConditions = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            {/* Status Bar */}
            <StatusBar barStyle="dark-content" backgroundColor="#E6F4EA" />

            {/* Header */}
            <View style={styles.header}>
                <Icon name="arrow-left" size={24} color="#000" />
                <Text style={styles.headerTitle}>Terms & Conditions</Text>
            </View>

            {/* Content */}
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Terms & Conditions</Text>
                <Text style={styles.text}>
                    1) Users must be at least 18 years old or the minimum age required for employment in their jurisdiction.
                </Text>
                <Text style={styles.text}>
                    2) Users must provide accurate and truthful information during registration and when using the App.
                </Text>
                <Text style={styles.text}>
                    3) Users are required to create an account to access certain features of the App.
                </Text>
                <Text style={styles.text}>
                    4) Users are responsible for keeping their account information secure and confidential.
                </Text>
                <Text style={styles.text}>
                    5) The App is not liable for any unauthorized access to your account resulting from your negligence.
                </Text>
                <Text style={styles.text}>
                    6) Provide accurate and up-to-date information in their profiles, resumes, and applications.
                </Text>
                <Text style={styles.text}>
                    7) Apply only for positions you are qualified for and genuinely interested in.
                </Text>
                <Text style={styles.text}>
                    8) Refrain from engaging in any fraudulent or unethical activities.
                </Text>

                <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadText}>Download</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        top: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9'
    },

    headerTitle: {
        fontSize: 22,
        fontFamily: "Poppins",
        color: "#19191C",
        alignSelf: "center",
        flex: 1,
        textAlign: "center",
    },

    container: {
        padding: 20,
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#7900BA",
        marginBottom: 15,
        top: 40
    },

    text: {
        fontSize: 14,
        color: "#333",
        marginBottom: 15,
        lineHeight: 22,
        textAlign: 'justify',
        top: 40,
    },

    downloadButton: {
        backgroundColor: "#7900BA",
        borderRadius: 10,
        alignItems: "center",
        top: 60,
        width: 350,
        height: 60,
        justifyContent: "center",
    },

    downloadText: {
        color: "white",
        fontSize: 18,
        fontFamily: "Poppins",

    }
});

export default TermsAndConditions;
