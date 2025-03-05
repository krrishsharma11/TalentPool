import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsHeader from '../SettingHeader/SettingsHeader';


const Apppreference = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <SettingsHeader />

            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>App Preference</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Language</Text>
                    <TextInput style={styles.input} value="English" editable={false} />
                    <Icon name="chevron-down" size={24} color="#999" style={styles.icon} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Profile Type</Text>
                    <TextInput style={styles.input} value="Public" editable={false} />
                    <Icon name="chevron-down" size={24} color="#999" style={styles.icon} />
                </View>

                <TouchableOpacity style={styles.inputContainer}
                    onPress={() => navigation.navigate("SearchHistory")} >
                    <Text style={styles.label}>Search history</Text>
                    <Icon name="chevron-right" size={24} color="#999" style={styles.iconRight} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save Settings</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    headerContainer: {
        height: 120,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },

    headerTitle: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },

    container: {
        padding: 20,
    },

    sectionTitle: {
        fontSize: 22,
        fontWeight: "poppins",
        color: '#18191C',
        fontWeight: '500',
        marginBottom: 20
    },

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

    label: {
        fontSize: 16,
        color: "#555",
    },

    input: {
        flex: 1,
        textAlign: "right",
        fontSize: 16,
        color: "#555",
    },

    icon: {
        marginLeft: 10,
    },

    iconRight: {
        marginLeft: "auto",
    },

    saveButton: {
        backgroundColor: "#7900BA",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },

    saveButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Apppreference;
