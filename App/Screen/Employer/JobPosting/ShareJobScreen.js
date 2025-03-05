import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Svg from "../../assets/images/svg";

const ShareJobScreen = () => {
    const jobUrl = "https://www.technohire.com/jobs/view/9887778";

    const copyToClipboard = () => {
        alert("Copied to clipboard!");
    };

    return (
        <View style={styles.container}>
            {/* Top White Background (30% height) */}
            <View style={styles.topContainer}>
                <Text style={styles.topText}>Background Page</Text>
                {/* <Image source={require('../../assets/images/JobOverview.png')} style={styles.logo} /> */}
            </View>

            {/* Bottom Black Section with Curved Edges (70% height) */}
            <View style={styles.bottomContainer}>
            <View style={styles.borderedBox}>
                </View>
                {/* Job Link Section */}
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Check out this job at</Text>
                    <Text style={styles.link}>{jobUrl}</Text>
                </View>

                {/* Copy Button */}
                <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
                    <View style={styles.rowContainer}>
                        <Svg.CopyIcon size={16} style={styles.icon} />
                        <Text style={styles.copyText}>Copy</Text>
                    </View>
                </TouchableOpacity>

                {/* Social Media Icons */}
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconWrapper}>
                        <Svg.WhatsappIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                        <Svg.BluetoothIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                        <Svg.GmailIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                        <Svg.LinkDin />
                    </TouchableOpacity>
                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconWrapper}>
                        <Svg.WhatsappIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                        <Svg.BluetoothIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                        <Svg.GmailIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                        <Svg.LinkDin />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF', 
    },
    topContainer: {
        flex: 0.3, 
        backgroundColor: '#FFF', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    bottomContainer: {
        flex: 0.7, // 70% height
        backgroundColor: '#333', // Black page
        borderTopLeftRadius: 30, // Curved top-left corner
        borderTopRightRadius: 30, // Curved top-right corner
        padding: 20,
        alignItems: 'center',
    },
    textContainer: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
    },
    link: {
        color: '#4DA6FF',
        textDecorationLine: 'underline',
    },
    copyButton: {
        width: 102,
        height: 33,
        backgroundColor: 'rgba(217, 217, 217, 1)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 50,
    },
    iconWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    rowContainer: {
        flexDirection: "row",
    },
    icon: {
        alignItems: "center",
    },
    copyText: {
        marginLeft: 7,
    },
    borderedBox: {
        width: 62,
        height: 0,
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        marginTop:20,
    },
});

export default ShareJobScreen;
