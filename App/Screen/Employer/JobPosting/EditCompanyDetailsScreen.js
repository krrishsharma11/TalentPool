import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../../reusableComponents/appHeader/customHeader';
import CustomTextInput from '../../reusableComponents/customTextInput/customTextInput';
import CustomDropDownTextInput from '../../reusableComponents/customDropDownTextInput/CustomDropDownTextInput';
import { theme } from '../../utils';
import * as Svg from "../../assets/images/svg";

const EditCompanyDetailsScreen = ({ navigation }) => {
    const [companyName, setCompanyName] = useState("Infosys Limited");
    const [foundedYear, setFoundedYear] = useState("2003");
    const [industry, setIndustry] = useState("IT Service & C");
    const [employees, setEmployees] = useState("2000-3000");
    const [location, setLocation] = useState("Bangalore");
    const [description, setDescription] = useState(
        "Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation. With over three decades of experience in managing the systems and "
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <CustomHeader
                title="Company Details"
                leftIcon={<Svg.ArrowBack size={24} />}
                onLeftPress={() => navigation.goBack()}
            />

            {/* Edit Your Company Details Text */}
            <Text style={styles.editText}>Edit Your Company Details</Text>

            <View contentContainerStyle={styles.content}>
                {/* Upload Picture Section */}
                <View style={styles.uploadContainer}>
                    <Image
                        source={require('../../assets/images/InfosysBackground.png')}
                        style={styles.uploadImage}
                    />
                    <View style={styles.lightBlueCircle}>
                    <Svg.UploadIcon color="rgba(255, 255, 255, 0.8)" style={styles.uploadCircleIcon} />
                        <Text style={styles.uploadCircleText}>Upload Picture</Text>
                    </View>

                    <View style={styles.iconOverlay}>
                        {/* <Svg.InfosysTitle size={100} /> */}
                    </View>

                    {/* Upload Icon + Text (Bottom Left) */}
                    <View style={styles.uploadSection}>
                        {/* Upload Icon */}

                        <Svg.UploadIcon color="rgba(255, 255, 255, 0.8)" style={styles.uploadIcon} />

                        {/* Upload Image Text */}
                        <Text style={styles.uploadText}>Upload Image</Text>
                    </View>

                </View>
                {/* </View> */}

                {/* Input Fields */}
                <View style={styles.inputContainer}>
                    <CustomTextInput
                        placeholder={companyName}
                        editable={false}
                        style={styles.inputBox}
                    />
                </View>

                {/* Dropdown Fields (Disabled) */}
                <View style={[styles.row, styles.inputContainer]}>
                    <CustomDropDownTextInput
                        value={foundedYear}
                        placeholder="2003"
                        data={[]}
                        onChange={() => { }}
                        style={styles.inputHalf}
                    />
                    <CustomDropDownTextInput
                        value={industry}
                        placeholder="IT Service & C"
                        data={[]}
                        onChange={() => { }}
                        style={styles.inputHalf}
                    />
                </View>

                <View style={[styles.row, styles.inputContainer]}>
                    <CustomTextInput
                        placeholder={employees}
                        editable={false}
                        style={styles.inputHalf}
                    />
                    <CustomTextInput
                        placeholder={location}
                        editable={false}
                        style={styles.inputHalf}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <CustomTextInput
                        value={description}
                        editable={false}
                        numberOfLines={5}
                        multiline={true}
                        style={[styles.inputBox, styles.descriptionBox]}
                        inputStyle={styles.inputText}
                    />
                </View>

                {/* Next Button */}
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("UpdateCompanydetailsscreen")}>
                        <Text style={styles.nextText}>Next</Text>
                        <Svg.ArrowNext size={16} color="rgba(255, 255, 255, 1)" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default EditCompanyDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    inputContainer: {
        width: "100%",
        paddingHorizontal: 20,
        marginBottom: theme.verticalSpacing.space_4,
        marginTop: 8,
    },
    editText: {
        width: 183,
        height: 21,
        marginTop: -30,
        marginBottom: 20,
        marginLeft: 100,
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
        color: "rgba(94, 102, 112, 1)",
    },
    content: {
        paddingHorizontal: theme.horizontalSpacing.space_20,
        paddingVertical: theme.verticalSpacing.space_20,
    },
    uploadContainer: {
        position: "relative",
        alignItems: "center",
        marginBottom: theme.verticalSpacing.space_20,
        // Remove gap if you don't want space between image and circle
    },
    uploadImage: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: theme.verticalSpacing.space_16,
    },
    inputBox: {
        width: "100%",
    },
    inputHalf: {
        width: "48%",
    },
    inputText: {
        color: "rgba(131, 145, 161, 1)",
    },
    nextButton: {
        backgroundColor: "rgba(121, 0, 186, 1)",
        width: "100%",
        height: theme.verticalSpacing.space_50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: theme.boderRadius.large_10,
        marginTop: theme.verticalSpacing.space_20,
        flexDirection: 'row',
    },
    nextText: {
        fontSize: theme.fontSizes.size_16,
        fontWeight: "bold",
        color: "rgba(255, 255, 255, 1)",
        marginRight: 10,
    },
    uploadContainer: {
        position: "relative", // Ensures child elements (icon & text) are positioned inside
        alignItems: "center",
    },

    uploadImage: {
        width: "100%",
        height: 200, // Adjust based on your image size
        resizeMode: "cover",
        color: "rgba(255, 255, 255, 0.8)"
    },

    uploadSection: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 10, // Adjust position from bottom of image
        left: 10, // Adjust position from left of image
        //  backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight background for visibility
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        paddingRight: 10,
    },

    uploadIcon: { // Keep this style if you use the upload icon elsewhere
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: "rgba(128, 123, 123, 1)",
        marginEnd: 8,
    },
    uploadText: { // Keep this style if you use the upload text elsewhere
        fontSize: 14,
        color: "rgba(128, 123, 123, 1)",
        fontWeight: "400",
    },
    iconOverlay: { // Style for the Infosys logo overlay
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -55 }, { translateY: -44 }],
    },
    lightBlueCircle: {
        position: "absolute",
        width: 165,
        height: 165,
        borderRadius: 82.5,
        backgroundColor: "rgba(173, 216, 230, 0.8)",
        top: 20,
        left: 110,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',   // Center content horizontally
    },
    uploadCircleText: {
        width: 'auto', // Adjust width as needed
        // height: 19, // Remove fixed height, let it wrap
        fontFamily: "Inter",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19.36,
        color: "rgba(255, 255, 255, 1)",
        textAlign: "center",
        // Remove fixed marginTop and marginLeft
    },
    uploadCircleIcon: {
        marginBottom: 8, // Space between icon and text
    },
    descriptionBox: {
        height: 120, // Set a fixed height to accommodate 5 lines. Adjust as needed.
        justifyContent: 'flex-start', // Important for multiline input to start from top
        textAlignVertical: 'top', // Align text to the top
    },

    
});
