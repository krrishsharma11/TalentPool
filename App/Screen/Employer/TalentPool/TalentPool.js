"use client"

import { useState } from "react"
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Modal,
  ScrollView,
  selectedUser,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Filter state

  const [selectedExperience, setSelectedExperience] = useState("4 - 6 Years")
  const [selectedExpectation, setSelectedExpectation] = useState("₹100000 - ₹150000")
  const [selectedPreferences, setSelectedPreferences] = useState(["Full Time"])
  const [selectedEducation, setSelectedEducation] = useState(["Graduation"])
  const [selectedLevel, setSelectedLevel] = useState("Mid Level")

  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(selectedPreferences.filter((p) => p !== preference))
    } else {
      setSelectedPreferences([...selectedPreferences, preference])
    }
  }

  const toggleEducation = (education) => {
    if (selectedEducation.includes(education)) {
      setSelectedEducation(selectedEducation.filter((e) => e !== education))
    } else {
      setSelectedEducation([...selectedEducation, education])
    }
  }

  const talentData = [
    {
      id: "1",
      name: "John Doe",
      role: "Senior React Native Developer",
      experience: "5 years",
      rating: 4.8,
      hourlyRate: "$45/hr",
      availability: "Full-time",
      avatar: "https://via.placeholder.com/60",
      skills: ["React Native", "JavaScript", "TypeScript"],
    },
    {
      id: "2",
      name: "Jane Smith",
      role: "UI/UX Designer",
      experience: "3 years",
      rating: 4.5,
      hourlyRate: "$40/hr",
      availability: "Part-time",
      avatar: "https://via.placeholder.com/60",
      skills: ["UI/UX", "Figma", "Adobe XD"],
    },
    {
      id: "3",
      name: "Mike Johnson",
      role: "Full Stack Developer",
      experience: "7 years",
      rating: 4.9,
      hourlyRate: "$55/hr",
      availability: "Contract",
      avatar: "https://via.placeholder.com/60",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "4",
      name: "Sarah Williams",
      role: "Mobile Developer",
      experience: "4 years",
      rating: 4.7,
      hourlyRate: "$50/hr",
      availability: "Full-time",
      avatar: "https://via.placeholder.com/60",
      skills: ["React Native", "Swift", "Kotlin"],
    },
    {
      id: "5",
      name: "David Brown",
      role: "Backend Developer",
      experience: "6 years",
      rating: 4.6,
      hourlyRate: "$48/hr",
      availability: "Contract",
      avatar: "https://via.placeholder.com/60",
      skills: ["Python", "Django", "AWS"],
    },
  ]

  const renderTalentItem = ({ item }) => (
    <TouchableOpacity style={styles.talentCard}>
   <View style={styles.card}>
      <View style={styles.header}>
        <Image source={require('../../../Assets/Icons/Info1.png')} 
        style={styles.logo} 
        resizeMode="contain"
        
        />

        <View>
        <Text style={styles.name}>Ronald Richards</Text>  
      <Text style={styles.match}>Matches Profile: 80%</Text>
      <Text style={styles.title}>UI/UX Designer</Text>
        </View>
        
      </View>
      
      <View style={styles.details}>
        <Text style={styles.detailText}>• 7 Years Experience</Text>
        <Text style={styles.detailText}>• Education: Master Degree</Text>
        <Text style={styles.detailText}>• Applied: Jan 23, 2022</Text>
       
      </View>

      <View>
      <Text style={styles.detailText1}>Skills</Text>
      </View>


      <View style={styles.skills}>
      
        <Text style={styles.skill}>User Interface (UI) Design</Text>
        <Text style={styles.skill}>User Experience (UX) Design</Text>
        <Text style={styles.skill}>Responsive Design</Text>
        <Text style={styles.moreSkills}>+3 more</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.buttonText}>Invite to apply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableOpacity>
  )

  const applyFilters = () => {
    setModalVisible(false)
    // Here you would filter the talent data based on selected filters
  }

  const toggleUserModal = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const closeUserModal = () => {
    setIsModalVisible(false);
   // setSelectedUser(null);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Talent Pool</Text>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Icon name="search" size={20} color="#999999" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search talents..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              
            </View>
            
            <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
              <Icon name="filter-list" size={20} color="#666666" />
            </TouchableOpacity>
          </View>
          <View>
              <Text style={styles.detailText1}>Browse Candidate </Text>
              </View>

          <FlatList
            data={talentData}
            renderItem={renderTalentItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView style={styles.modalBody}>
              {/* Search Bar */}
              <View style={styles.filterSearchContainer}>
                <Icon name="search" size={20} color="#999999" />
                <TextInput style={styles.filterSearchInput} placeholder="Search Candidate/Role" />
              </View>

              {/* Location */}
              <View style={styles.filterItem}>
                <View style={styles.filterItemIcon}>
                  <Ionicons name="location-outline" size={20} color="#8A2BE2" />
                </View>
                <Text style={styles.filterItemText}>Location</Text>
              </View>

              {/* Select Category */}
              <View style={styles.filterItem}>
                <View style={styles.filterItemIcon}>
                  <Ionicons name="grid-outline" size={20} color="#8A2BE2" />
                </View>
                <Text style={styles.filterItemText}>Select Category</Text>
                <Icon name="keyboard-arrow-down" size={20} color="#999999" style={styles.filterItemArrow} />
              </View>

              {/* Candidate Experience */}
              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>Candidate Experience</Text>
                <View style={styles.radioGroup}>
                  {["Freshers", "1 - 2 Years", "2 - 4 Years", "4 - 6 Years", "10 - 15 Years", "15+ Years"].map(
                    (exp, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.radioOption}
                        onPress={() => setSelectedExperience(exp)}
                      >
                        <View style={[styles.radioButton, selectedExperience === exp && styles.radioButtonSelected]}>
                          {selectedExperience === exp && <View style={styles.radioButtonInner} />}
                        </View>
                        <Text style={styles.radioLabel}>{exp}</Text>
                      </TouchableOpacity>
                    ),
                  )}
                </View>
              </View>

              {/* Candidate Expectations */}
              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>Candidate Expectations</Text>
                <View style={styles.radioGroup}>
                  {["₹5000 - ₹25000", "₹40000 - ₹65000", "₹100000 - ₹150000", "₹200000+"].map((salary, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.radioOption}
                      onPress={() => setSelectedExpectation(salary)}
                    >
                      <View style={[styles.radioButton, selectedExpectation === salary && styles.radioButtonSelected]}>
                        {selectedExpectation === salary && <View style={styles.radioButtonInner} />}
                      </View>
                      <Text style={styles.radioLabel}>{salary}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Candidate Preference */}
              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>Candidate Preference</Text>
                <View style={styles.checkboxGroup}>
                  {["All", "Full Time", "Part Time", "Internship", "Remote", "Temporary"].map((pref, index) => (
                    <TouchableOpacity key={index} style={styles.checkboxOption} onPress={() => togglePreference(pref)}>
                      <View style={[styles.checkbox, selectedPreferences.includes(pref) && styles.checkboxSelected]}>
                        {selectedPreferences.includes(pref) && <Icon name="check" size={16} color="#FFFFFF" />}
                      </View>
                      <Text style={styles.checkboxLabel}>{pref}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Education */}
              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>Education</Text>
                <View style={styles.checkboxGroup}>
                  {["High School", "Intermediate", "Graduation", "Master Degree", "Bachelor Degree", "All"].map(
                    (edu, index) => (
                      <TouchableOpacity key={index} style={styles.checkboxOption} onPress={() => toggleEducation(edu)}>
                        <View style={[styles.checkbox, selectedEducation.includes(edu) && styles.checkboxSelected]}>
                          {selectedEducation.includes(edu) && <Icon name="check" size={16} color="#FFFFFF" />}
                        </View>
                        <Text style={styles.checkboxLabel}>{edu}</Text>
                      </TouchableOpacity>
                    ),
                  )}
                </View>
              </View>

              {/* Candidate Level */}
              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>Candidate Level</Text>
                <View style={styles.radioGroup}>
                  {["Entry Level", "Mid Level", "Expert Level"].map((level, index) => (
                    <TouchableOpacity key={index} style={styles.radioOption} onPress={() => setSelectedLevel(level)}>
                      <View style={[styles.radioButton, selectedLevel === level && styles.radioButtonSelected]}>
                        {selectedLevel === level && <View style={styles.radioButtonInner} />}
                      </View>
                      <Text style={styles.radioLabel}>{level}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Find Candidate Button */}
              <TouchableOpacity style={styles.findButton} onPress={applyFilters}>
                <Text style={styles.findButtonText}>Find Candidate</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeUserModal}
      >
         <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Invite to Apply</Text>
            <Text style={styles.label}>Heading</Text>
            <TextInput style={styles.input} placeholder="Select..." />
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={styles.messageInput}
              multiline
              placeholder={`Hi ${selectedUser?.name},\nI'm Esther Howard from XYZ Company. I came\nacross your profile and was really impressed.\nDo you have some time for a quick interview?\nLet me know what works for you.\nLooking forward to connecting!\nBest,\nEsther Howard`}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={closeUserModal} style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.sendText}>Send Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </>

  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  detailText1:{
   fontSize:18,
   marginTop:18
   
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#8A2BE2",
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    marginLeft:20,
    alignItems: "center",
  },
  cancelText: { color: "#8A2BE2", },
  sendButton: {
    padding: 10,
    backgroundColor: "#8A2BE2",
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    marginLeft:20,
    marginRight:20
  },
  sendText: { color: "#fff" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  modalTitle: { fontSize: 18,
      color:'#18191C',
      marginBottom: 10, 
     marginLeft:15,
     marginTop:18
    },
  label: { alignSelf: 'flex-start', 
    marginBottom: 5, 
    
     marginLeft:18,
     marginTop:15
    },
  input: {
    width: 360,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft:18,
    marginTop:15

  },
  messageInput: {
    width: 355,
    height: 250,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 40,
    marginLeft:15
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal:16,
    
    width: '90%',
    marginLeft:12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden' 
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10, // Added to give a logo type feel
    marginRight: 10, // Added margin to separate from text
  },
  name: {
    fontSize: 18,
    
    
  },
  match: {
    color: '#7900BA',
    borderWidth: 2,     // Border ka width
    borderColor: '#7900BA',  // Border ka color
    padding: 2,        // Thodi jagah text ke aas-pass
    borderRadius: 5, 
    height:30,
    width:145
  },
  title: {
    color: '#767F8C',
  },
  details: {
    marginTop: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#5E6670',
  },
  skills: {
    marginTop: 18,
  },
  skill: {
    color: '#7900BA',
    borderWidth: 2,     // Border ka width
    borderColor: '#7900BA',  // Border ka color
    padding: 2,        // Thodi jagah text ke aas-pass
    height:33,
    width:200,
    borderRadius: 15,
    padding: 5,
    marginVertical: 2,
    textAlign:'left',
  },
  moreSkills: {
    color: '#8A2BE2',
    marginTop: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  
  },
  button: {
    backgroundColor: '#8A2BE2',
    borderRadius: 25,
    padding: 10,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
   marginLeft:135
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,     // Border ka width
    borderColor: '#D3D3D39C',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 10,
    height:62
    
   
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#333333",
  },
  filterButton: {
    backgroundColor: "#7900BA",
    borderRadius: 20,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#7900BA',
    padding: 10,
    
   
  },
  listContainer: {
    paddingBottom: 20,
  },
  talentCard: {
    backgroundColor: "#DDCEE6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  talentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
   
  },
  avatar: {
    width: 60,
    height: 200,
    borderRadius: 30,
    marginRight: 12,
  },
  talentInfo: {
    flex: 1,
  },
  
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "90%",
  },
  modalBody: {
    padding: 20,
  },
  filterSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
  },
  filterSearchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#333333",
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  filterItemIcon: {
    width: 24,
    alignItems: "center",
    marginRight: 10,
  },
  filterItemText: {
    flex: 1,
    fontSize: 14,
    color: "#333333",
  },
  filterItemArrow: {
    marginLeft: 10,
  },
  filterSection: {
    marginBottom: 20,
  },
  filterSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 12,
  },
  radioGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginBottom: 12,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#CCCCCC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    borderColor: "#8A2BE2",
  },
  radioButtonInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#8A2BE2",
  },
  radioLabel: {
    fontSize: 14,
    color: "#333333",
  },
  checkboxGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  checkboxOption: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginBottom: 12,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: "#8A2BE2",
    borderColor: "#8A2BE2",
  },
  findButton: {
    backgroundColor: "#8A2BE2",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  findButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
})

export default App