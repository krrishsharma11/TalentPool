import React, { useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsHeader from "../SettingHeader/SettingsHeader";

const jobs = [
    { id: "1", title: "Project Manager", location: "Dhaka, Bangladesh", salary: "$50k-80k/month", remaining: "4 Days Remaining" },
    { id: "2", title: "Project Manager", location: "Dhaka, Bangladesh", salary: "$50k-80k/month", remaining: "4 Days Remaining" },
    { id: "3", title: "Project Manager", location: "Dhaka, Bangladesh", salary: "$50k-80k/month", remaining: "4 Days Remaining" },
    { id: "4", title: "Project Manager", location: "Dhaka, Bangladesh", salary: "$50k-80k/month", remaining: "4 Days Remaining" },
    { id: "5", title: "Project Manager", location: "Dhaka, Bangladesh", salary: "$50k-80k/month", remaining: "4 Days Remaining" },
];

const JobCard = ({ job }) => (
    <View style={styles.card}>
        {/* Left Side – Logo and Job Details */}
        <Image
            source={require("../../../Assets/Images/apple1.png")}
            style={styles.logo}
        />
        <View style={styles.details}>
            <Text style={styles.title}>{job.title}</Text>
            <View style={styles.infoRow}>
                <View style={styles.info}>
                    <Icon name="map-marker" size={16} color="gray" />
                    <Text style={styles.text}>{job.location}</Text>
                </View>
                <View style={styles.info}>
                    <Icon name="cash" size={16} color="gray" />
                    <Text style={styles.text}>{job.salary}</Text>
                </View>
                <View style={styles.info}>
                    <Icon name="calendar-clock" size={16} color="gray" />
                    <Text style={styles.text}>{job.remaining}</Text>
                </View>

            </View>
        </View>

        {/* Right Side – Full Time Button */}
        <TouchableOpacity style={styles.fullTimeBtn}>
            <Text style={styles.fullTimeText}>Full Time</Text>
        </TouchableOpacity>
    </View>
);

const JobListScreen = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <View style={{ flex: 1 }}>
            <SettingsHeader />
            <View style={styles.container}>
                <Text style={styles.header}>Search History</Text>
                <FlatList
                    data={jobs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <JobCard job={item} />}
                />

                {/* Pagination */}
                <View style={styles.pagination}>
                    {/* Page Numbers */}
                    {[1, 2, 3, 4, 5].map((page) => (
                        <TouchableOpacity key={page} onPress={() => setCurrentPage(page)}>
                            <Text style={[styles.pageNumber, currentPage === page && styles.activePage]}>
                                {page}
                            </Text>
                        </TouchableOpacity>
                    ))}

                    {/* Right Arrow Icon */}
                    <TouchableOpacity onPress={() => setCurrentPage((prev) => Math.min(prev + 1, 5))} style={styles.paginationIcon}>
                        <Icon name="chevron-right" size={24} color="#7900BA" />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        padding: 18,
    },

    header: {
        fontSize: 22,
        fontWeight: "500",
        color: "#18191C",
        marginBottom: 20,
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#FAFAFA",
        padding: 5,
        height: 90,
        borderRadius: 12,
        marginBottom: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D3D3D3",
        shadowOpacity: 0.1,
    },

    logo: {
        width: 50,
        height: 55,
        borderRadius: 5,
        marginRight: 10,
    },

    details: { flex: 1 },

    title: {
        fontSize: 16,
        fontWeight: "bold",
    },

    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        right: 4

    },

    info: {
        flexDirection: "row",
        alignItems: "center"

    },

    text: {
        fontSize: 9,
        color: "gray",
        padding: 3

    },

    fullTimeBtn: {
        backgroundColor: "#E3D0FF",
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 15,
        top: -15,
        right: 10
    },

    fullTimeText: {
        color: "#6A1B9A",
        fontWeight: "bold",
    },

    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    pageButton: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#6A1B9A",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 25,
        marginHorizontal: 5,
    },

    pageButtonText: {
        color: "#5E6670",
    },

    pageNumber: {
        fontSize: 16,
        fontWeight: "500",
        color: "#5E6670",
        paddingHorizontal: 8,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 20, // Rounded corners for each page button
    },

    activePage: {
        backgroundColor: "#7900BA",
        color: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 50,
        fontWeight: "bold",
    },

    paginationIcon: {
        backgroundColor: "#DCBDED",
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 50,
    },

};

export default JobListScreen;
