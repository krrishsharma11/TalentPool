import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
// import Dropdown from "../../reusableComponents/customDropDownTextInput/CustomDropDownTextInput";
import * as Svg from "../../assets/images/svg";
import CustomDropDownTextInput from "../../reusableComponents/customDropDownTextInput/CustomDropDownTextInput";



const ViewJobsScreen = ({navigation}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState("Last 24 Hours");
    

    const jobs = [
        {
            id: 1,
            company: "Infosys",
            location: "Pune, Maharashtra",
            title: "Jr. UI/UX Designer",
            type: "Full Time",
            salary: "₹30K-₹35K",
            logo: require("../../assets/images/Infosys.png"),
        },
        {
            id: 2,
            company: "Figma",
            location: "Pune, Maharashtra",
            title: "UI/UX Designer",
            type: "Full Time",
            salary: "₹50K-₹70K",
            logo: require("../../assets/images/FigmaImage.png"),
        },
        {
            id: 3,
            company: "Infosys",
            location: "Pune, Maharashtra",
            title: "Jr. UI/UX Designer",
            type: "Full Time",
            salary: "₹30K-₹35K",
            logo: require("../../assets/images/Infosys.png"),
        },
        {
            id: 4,
            company: "Figma",
            location: "Pune, Maharashtra",
            title: "Graphic Designer",
            type: "Full Time",
            salary: "₹50K-₹70K",
            logo: require("../../assets/images/FigmaImage.png"),
        },
        {
            id: 5,
            company: "Figma",
            location: "Pune, Maharashtra",
            title: "Senior UI/UX Designer",
            type: "Full Time",
            salary: "₹50K-₹70K",
            logo: require("../../assets/images/FigmaImage.png"),
        },
    ];

    const filterOptions = [
        { label: "Last 24 Hours", value: "Last 24 Hours" },
        { label: "Last 7 Days", value: "Last 7 Days" },
        { label: "Last 30 Days", value: "Last 30 Days" },
    ];

    const renderJobCard = ({ item }) => (
        <TouchableOpacity
            style={[styles.jobCard, item.id === 1 && styles.selectedJobCard]} 
            onPress={() => item.id === 1 && navigation.navigate('JobOverviewScreen')} 
        >
            {/* Company Logo and Title */}
            <View style={styles.logoWrapper}>
                {item.company === "Infosys" ? (
                    <ImageBackground
                        source={item.logo}
                        style={styles.companyLogo}
                        imageStyle={styles.imageStyle}
                    >
                        <Svg.InfosysTitle
                            size={47}
                            color="#fff"
                            style={styles.companyTitle}
                        />
                    </ImageBackground>
                ) : (
                    <Image source={item.logo} style={styles.companyLogo} />
                )}
            </View>

            <View style={styles.jobDetails}>
                <Text style={styles.companyName}>{item.company}</Text>
                <Text style={styles.location}>
                    <Svg.LocationIcon size={12} color="#666" /> {item.location}
                </Text>
                <View>
                    <Text style={styles.jobTitle}>{item.title}</Text>
                    <Text style={styles.jobInfo}>
                        {item.type} • {item.salary}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={require("../../assets/images/technoKrate.png")}
                    style={styles.companyLogoHeader}
                />

                <View style={styles.headerRight}>
                    <TouchableOpacity>
                        <Svg.MessageIcon color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bellIcon}>
                        <Svg.SimpleBellIcon size={17} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require("../../assets/images/ProfileImage.png")}
                            style={styles.profileImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBarWrapper}>
                <View style={styles.searchBarContainer}>
                    <View style={styles.dropdownSection}>
                        <Image
                            source={require("../../assets/images/IndiaFlag.png")}
                            style={styles.flagIcon}
                        />
                        <Text style={styles.countryText}>India</Text>
                        <Dropdown
                            style={styles.disabledDropdown}
                            data={[]}
                            disabled
                            placeholder=""
                            renderLeftIcon={() => null}
                        />
                    </View>
                    <View style={styles.divider} />
                    <Svg.SearchIcon />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Job title, Keyword, Company"
                    />
                    <TouchableOpacity>
                        <Svg.FilterIcon size={20} color="#666" style={styles.filterIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Newly Posted Jobs */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Newly Posted Jobs</Text>
                <CustomDropDownTextInput
                    value={selectedFilter}
                    onChange={(item) => setSelectedFilter(item.value)}
                    placeholder="Select Filter"
                    data={filterOptions}
                    style={styles.dropdown}
                    inputStyle={styles.dropdownInput}
                />
            </View>

            {/* Job List */}
            <FlatList
                data={jobs}
                renderItem={renderJobCard}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.jobList}
                showsVerticalScrollIndicator={false}
            />

            {/* Pagination */}
            <View style={styles.pagination}>
                <TouchableOpacity style={styles.disabledBackButton} disabled={true}>
                    <Svg.ArrowBack color="#D6CFFF" />
                </TouchableOpacity>
                {[{ label: "01", shadow: true }, { label: "02", shadow: false }, { label: "03", shadow: false }, { label: "04", shadow: true }, { label: "05", shadow: false }].map((page, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.pageButton, currentPage === index + 1 && styles.activePageButton, page.shadow && styles.pageShadow]}
                        onPress={() => setCurrentPage(index + 1)}
                    >
                        <Text style={[styles.pageText, currentPage === index + 1 && styles.activePageText, page.shadow && styles.specialBoldText]}>
                            {page.label}
                        </Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.nextButton}>
                    <Svg.ArrowNext color="#6C63FF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F7F7F7" },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#FFF",
    },
    companyLogoHeader: {
        width: 120,
        height: 40,
        resizeMode: "contain",
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
    },
    bellIcon: {
        marginLeft: 16,
    },
    profileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginLeft: 16,
    },
    searchBarWrapper: {
        paddingHorizontal: 16,
        marginTop: 8,
    },
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 40,
        elevation: 2,
    },
    dropdownSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    flagIcon: {
        width: 20,
        height: 14,
        marginRight: 8,
    },
    countryText: {
        fontSize: 14,
        color: "#666",
        marginRight: 8,
    },
    disabledDropdown: {
        width: 20,
        height: 20,
    },
    divider: {
        width: 1,
        height: "100%",
        backgroundColor: "#E0E0E0",
        marginHorizontal: 12,
    },
    searchInput: {
        flex: 1,
        fontSize: 12,
    },
    filterIcon: {
        marginLeft: 8,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    sectionTitle: { fontSize: 16, fontWeight: "bold" },
    dropdown: {
        width: 162,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#FFF",
    },
    dropdownInput: {
        fontSize: 14,
        color: "#000",
    },
    jobList: { paddingHorizontal: 16 },
    jobCard: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        elevation: 2,
    },
    selectedJobCard: {
        borderColor: "#6C63FF", // Violet border color
        borderWidth: 2, // Ensure the border is visible
    },
    logoWrapper: {
        marginRight: 12,
    },
    companyLogo: {
        width: 62,
        height: 59,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },
    imageStyle: {
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: "center",
    },
    companyTitle: {
        position: "absolute",
        bottom: 5,
        left: 5,
        right: 5,
        top: 7,
        resizeMode: "contain",
        width: "100%", // Ensure full visibility
    },
    jobDetails: { flex: 1 },
    companyName: { fontSize: 14, fontWeight: "bold" },
    location: { fontSize: 12, color: "#666", marginVertical: 4 },
    jobTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 4},
    jobInfo: { fontSize: 12, color: "#666", alignItems: 'flex-start'  },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16,
    },
    disabledBackButton: {
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    pageButton: {
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 4,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    activePageButton: {
        backgroundColor: "#6C63FF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    pageShadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    pageText: { fontSize: 14 },
    activePageText: { color: "white", fontWeight: "bold" },
    specialBoldText: { fontWeight: "bold" },
    nextButton: {
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 8,
        borderRadius: 18,
        backgroundColor: "#EFEAFF",
    },
});

export default ViewJobsScreen;
