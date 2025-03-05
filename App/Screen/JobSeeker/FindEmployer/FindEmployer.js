import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet, ScrollView, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import * as Svg from "../../../assets/images/svg";
import { Jobs } from '../../../utils/jobData';
import JobGridCard from '../../../reusableComponents/JobGridCard/JobGridCard';
import JobListCard from '../../../reusableComponents/JobListCard/JobListCard';
import { theme } from '../../../utils';
import CustomBrowseJobHeader from '../../../reusableComponents/BrowseJobHeader/CustomBrowseJobHeader'
import CustomDropDownTextInput from '../../../reusableComponents/customDropDownTextInput/CustomDropDownTextInput';

const FindEmployer = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [isGrid, SetisGrid] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);  // State for filter modal
  const navigation = useNavigation();
  const [radius, setRadius] = useState(32);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [showOrgType, setShowOrgType] = useState(true);
  const organizationTypes = [
    "Government",
    "Semi Government",
    "NGO",
    "Private Company",
    "International Agencies",
    "Others",
  ];

  return (
    <ScrollView style={styles.main}>
      {/* Header Component */}
      <CustomBrowseJobHeader BellIconOnpress={undefined} messageIconOnpress={undefined} profileuri={require('../../../assets/images/person.jpg')} />
      
     
      {/* Rest of the content */}
      <View style={{ padding: 20 }}>
        {/* Search Bar with Country Selector */}
        <View style={{ 
          flexDirection: "row", 
          borderWidth: 1, 
          borderColor: "#e0e0e0",
          borderRadius: 8,
          marginBottom: 15,
          overflow: 'hidden'
        }}>
          <View style={{ 
            flexDirection: "row", 
            alignItems: "center",
            paddingLeft: 10,
            borderRightWidth: 1,
            borderRightColor: "#e0e0e0",
            width: 100
          }}>
            <Image 
              source={{ uri: "https://flagcdn.com/w40/in.png" }}
              style={{ width: 20, height: 15, marginRight: 5 }}
            />
            <Text>India</Text>
            <Icon name="chevron-down" size={12} color="#666" style={{ marginLeft: 5 }} />
          </View>
          <TextInput
            style={{ 
              flex: 1,
              paddingHorizontal: 15,
              paddingVertical: 12
            }}
            placeholder="Job title, Keyword, Company"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={{ padding: 15 }}>
            <Icon name="search" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Suggestions */}
        <View style={{ marginBottom: 25 }}>
          <Text style={{ color: "#666" }}>
            Suggestion: 
            <Text style={{ color: "#000" }}> Designer, Programming, </Text>
            <Text style={{ color: "#9333EA" }}>Digital Marketing</Text>
            <Text style={{ color: "#000" }}>, Video, Animation</Text>
          </Text>
        </View>

        {/* Find Employers Section */}
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 15 }}>Find Employers</Text>

        {/* Job Search Input */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ 
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#e0e0e0",
            borderRadius: 8,
            paddingHorizontal: 15,
            paddingVertical: 12
          }}>
            <Icon name="search" size={20} color="#666" style={{ marginRight: 10 }} />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Job title, Keyword..."
            />
          </View>
        </View>

        {/* Location Input */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ 
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#e0e0e0",
            borderRadius: 8,
            paddingHorizontal: 15,
            paddingVertical: 12
          }}>
            <Icon name="map-marker" size={20} color="#666" style={{ marginRight: 10 }} />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </View>

        {/* Category Selector */}
        <TouchableOpacity 
          style={{ 
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#e0e0e0",
            borderRadius: 8,
            paddingHorizontal: 15,
            paddingVertical: 12,
            marginBottom: 20
          }}>
          <Text style={{ color: "#666" }}>Select Category</Text>
          <Icon name="chevron-down" size={12} color="#666" />
        </TouchableOpacity>

        {/* Find Employer Button */}
        <TouchableOpacity 
          style={{ 
            backgroundColor: "#9333EA",
            borderRadius: 8,
            paddingVertical: 15,
            alignItems: "center"
          }}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>Find Employer</Text>
        </TouchableOpacity>
      </View>

      {/* Latest Job Dropdown, Grid/List Toggle, and Filter Button */}
      <View style={styles.JoblatestContainer}>
        <View style={styles.JobGridListDropDownContainer}>
          {/* Dropdown for Latest */}
          <View style={styles.JobSugestDropDown}>
            <CustomDropDownTextInput
              value={undefined}
              onChange={undefined}
              placeholder={'Latest'}
              data={[
                { label: '₹5,00,000', value: '500000' },
                { label: '₹6,00,000', value: '600000' },
                { label: '₹7,00,000', value: '700000' },
                { label: '₹8,00,000', value: '800000' },
                { label: '₹10,00,000', value: '1000000' },
                { label: 'Other', value: 'Other' },
              ]}
            />
          </View>

          {/* Filter Button */}
          <TouchableOpacity style={styles.filterButton} onPress={() => setFilterVisible(true)}>
            <Icon name="filter" size={20} color="#fff" />
          </TouchableOpacity>

          {/* Grid/List Toggle */}
          <View style={styles.GridListIconContainer}>
            <TouchableOpacity onPress={() => SetisGrid(true)}>
              <Svg.GridIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => SetisGrid(false)}>
              <Svg.ListIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Job List (Grid or List) */}
      <FlatList
        data={Jobs}
        renderItem={isGrid ? JobGridCard : JobListCard}
        contentContainerStyle={styles.list}
      />

      {/* Filter Modal */}
      <Modal visible={filterVisible} animationType="slide" transparent={true}>
  <View style={styles.overlay}>
    <View style={styles.modalContainer}>
      {/* Location Radius */}
      <Text style={styles.headerText}>
        Location Radius: <Text style={{ color: "purple" }}>{radius} miles</Text>
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={radius}
        onValueChange={setRadius}
        minimumTrackTintColor="purple"
        thumbTintColor="purple"
      />

      {/* Organization Type */}
      <TouchableOpacity onPress={() => setShowOrgType(!showOrgType)} style={styles.sectionHeader}>
        <Text style={styles.headerText}>Organization Type</Text>
      </TouchableOpacity>

      {showOrgType && (
        <FlatList
          data={organizationTypes}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedOrg(item)} style={styles.radioContainer}>
              <View
                style={[
                  styles.radioButton,
                  { borderColor: selectedOrg === item ? "purple" : "gray" },
                ]}
              >
                {selectedOrg === item && <View style={styles.radioSelected} />}
              </View>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Apply Filters Button */}
      <TouchableOpacity onPress={() => setFilterVisible(false)} style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: { padding: 10, flex: 1, backgroundColor: 'white' },
  searchBar: { flexDirection: "row", borderWidth: 1, borderColor: "#e0e0e0", borderRadius: 8, marginBottom: 15, overflow: 'hidden' },
  countrySelector: { flexDirection: "row", alignItems: "center", paddingLeft: 10, borderRightWidth: 1, borderRightColor: "#e0e0e0", width: 100 },
  flagIcon: { width: 20, height: 15, marginRight: 5 },
  searchInput: { flex: 1, paddingHorizontal: 15, paddingVertical: 12 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 15 },
  inputContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#e0e0e0", borderRadius: 8, paddingHorizontal: 15, paddingVertical: 12, marginBottom: 12 },
  findEmployerButton: { backgroundColor: "#9333EA", borderRadius: 8, paddingVertical: 15, alignItems: "center" },
  JoblatestContainer: { flexDirection: 'row', justifyContent: 'flex-end', marginVertical: theme.verticalSpacing.space_18 },
  JobGridListDropDownContainer: { flexDirection: 'row', alignItems: 'center' },
  JobSugestDropDown: { width: 130 },
  filterButton: { backgroundColor: "#9333EA", padding: 10, borderRadius: 8, marginLeft: 10 },
  GridListIconContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: theme.horizontalSpacing.space_4 },
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { width: "80%", backgroundColor: "white", padding: 20, borderRadius: 8 },
  modalTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10 },
  closeButton: { backgroundColor: "#9333EA", padding: 10, borderRadius: 8, alignItems: "center" },overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionHeader: {
    marginTop: 15,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioSelected: {
    height: 12,
    width: 12,
    backgroundColor: "purple",
    borderRadius: 6,
  },
  applyButton: {
    backgroundColor: "#D8BFD8",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
  },
  applyButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default FindEmployer;
