import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CustomHeader from '../../../Components/reusableComponents/appHeader/customHeader';
import CustomTextInput from '../../../Components/reusableComponents/customTextInput/customTextInput';
import CustomDropDownTextInput from '../../../Components/reusableComponents/customDropDownTextInput/CustomDropDownTextInput';
import { theme } from '../../../utils';
import * as Svg from "../../../Assets/Images/svg";

const EditCompanyDetailsScreen = ({ navigation }) => {
    const [companyName, setCompanyName] = useState("Infosys Limited");
    const [foundedYear, setFoundedYear] = useState("2003");
    const [industry, setIndustry] = useState("IT Service & C");
    const [employees, setEmployees] = useState("2000-3000");
    const [location, setLocation] = useState("Bangalore");
    const [description, setDescription] = useState(
        "Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation."
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <CustomHeader
                title="Company Details"
                leftIcon={<Svg.ArrowBack size={24} />}
                onLeftPress={() => navigation.goBack()}
            />

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                {/* Edit Your Company Details Text */}
                <Text style={styles.editText}>Edit Your Company Details</Text>

                {/* Upload Picture Section */}
                <View style={styles.uploadContainer}>
                    <View style={styles.lightBlueCircle}>
                        <Svg.UploadIcon color="rgba(255, 255, 255, 0.8)" style={styles.uploadCircleIcon} />
                        <Text style={styles.uploadCircleText}>Upload Picture</Text>
                    </View>
                </View>

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
                    
                    <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("UpdateCompnayDetails")}>
                        <Text style={styles.nextText}>Save and Continue</Text>
                        <Svg.ArrowNext size={16} color="rgba(255, 255, 255, 1)" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default EditCompanyDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    content: {
        flexGrow: 1,
        padding: theme.horizontalSpacing.space_20,
    },
    editText: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
        color: "rgba(94, 102, 112, 1)",
        marginBottom: 10,
        marginTop:-20,
    },
    uploadContainer: {
        alignItems: "center",
        marginBottom: theme.verticalSpacing.space_20,
    },
    lightBlueCircle: {
        width: 165,
        height: 165,
        borderRadius: 82.5,
        backgroundColor: "#D9D9D9",
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadCircleText: {
        fontSize: 16,
        lineHeight: 19.36,
        color: "#5E6670",
        textAlign: "center",
    },
    uploadCircleIcon: {
        marginBottom: 18,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    inputContainer: {
        width: "100%",
        marginBottom: theme.verticalSpacing.space_4,
    },
    inputBox: {
        width: "100%",
    },
    inputHalf: {
        width: "48%",
    },
    descriptionBox: {
        height: 120,
        textAlignVertical: 'top',
    },
    nextButton: {
        backgroundColor: "rgba(121, 0, 186, 1)",
        height: theme.verticalSpacing.space_50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: theme.boderRadius.large_10,
        flexDirection: 'row',
        top:"40"
        
    },
    nextText: {
        fontSize: theme.fontSizes.size_16,
        fontWeight: "bold",
        color: "rgba(255, 255, 255, 1)",
        marginRight: 10,
    },
});
