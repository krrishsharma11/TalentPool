import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Header = () => {
    return (
        <LinearGradient colors={["#3E1654", "#9857CF"]} style={styles.headerContainer}>
            <View style={styles.headerContent}>
                <Image
                    source={require('../../../Assets/Icons/profile.png')} // Replace with actual image path
                    style={styles.profileImage}
                />
                <Text style={styles.headerTitle}>Settings</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 140,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 15,
        justifyContent: "center",
    },

    headerContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },

    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        top: 10
    },

    headerTitle: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        position: "absolute",
        left: "40%",
        top: 28

    },
});


export default Header;
