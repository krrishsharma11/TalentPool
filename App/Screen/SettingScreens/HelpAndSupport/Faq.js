import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsHeader from "../SettingHeader/SettingsHeader";


const FaqContactScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState("FAQ");

    return (
        <View style={styles.wrapper}>
            <SettingsHeader />

            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: "poppins", color: '#18191C', fontWeight: '500' }}>Help & Support</Text>
            </View>

            {/* Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={styles.tabButton}
                    onPress={() => setActiveTab("FAQ")}>
                    <Text style={[styles.tabText, activeTab === "FAQ" && styles.activeTabText]}>FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tabButton}
                    onPress={() => setActiveTab("Contact")}>
                    <Text style={[styles.tabText, activeTab === "Contact" && styles.activeTabText]}>Contact Us</Text>
                </TouchableOpacity>

                {/* Active Tab Indicator */}
                <View
                    style={[
                        styles.activeTabIndicator,
                        { left: activeTab === "FAQ" ? "0%" : "50%" }
                    ]}
                />
            </View>

            {/* Content */}
            <ScrollView style={styles.container}>
                {activeTab === "FAQ" ? (
                    <>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>How Can I Apply For Jobs?</Text>
                            <Icon name="chevron-down" size={24} color="#999" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>Troubleshoot Guides</Text>
                            <Icon name="chevron-down" size={24} color="#999" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>How To Contact Support Team?</Text>
                            <Icon name="chevron-down" size={24} color="#999" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>How Can I Apply For Jobs?</Text>
                            <Icon name="chevron-down" size={24} color="#999" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>Troubleshoot Guides</Text>
                            <Icon name="chevron-down" size={24} color="#999" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>How To Contact Support Team?</Text>
                            <Icon name="chevron-down" size={24} color="#999" />
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Icon name="web" size={24} color="#6C5CE7" />
                            <Text style={styles.optionText}>Website</Text>
                            <Icon name="arrow-right" size={24} color="#999" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionContainer}>
                            <Icon name="facebook" size={24} color="#6C5CE7" />
                            <Text style={styles.optionText}>Facebook</Text>
                            <Icon name="arrow-right" size={24} color="#999" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionContainer}>
                            <Icon name="instagram" size={24} color="#6C5CE7" />
                            <Text style={styles.optionText}>Instagram</Text>
                            <Icon name="arrow-right" size={24} color="#999" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionContainer}>
                            <Icon name="whatsapp" size={24} color="#6C5CE7" />
                            <Text style={styles.optionText}>WhatsApp</Text>
                            <Icon name="arrow-right" size={24} color="#999" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionContainer}>
                            <Icon name="twitter" size={24} color="#6C5CE7" />
                            <Text style={styles.optionText}>Twitter</Text>
                            <Icon name="arrow-right" size={24} color="#999" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionContainer}
                            onPress={() => navigation.navigate(MainRoutes.CUSTOMER_SERVICE)}>
                            <Icon name="headset" size={24} color="#6C5CE7" />
                            <Text style={styles.optionText}>Customer Service</Text>
                            <Icon name="arrow-right" size={24} color="#999" />
                        </TouchableOpacity>
                    </>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        top: 10
    },

    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 10,
        //  position: "relative",
        width: 345,
        left: 20
    },

    tabButton: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 10,
    },

    tabText: {
        fontSize: 16,
        color: "#999",
    },

    activeTabText: {
        color: "#6C5CE7",
        fontWeight: "bold",
    },

    activeTabIndicator: {
        position: "absolute",
        bottom: 0,
        width: "50%",
        height: 3,
        backgroundColor: "#6C5CE7",
        transition: "left 0.3s",
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

export default FaqContactScreen;
