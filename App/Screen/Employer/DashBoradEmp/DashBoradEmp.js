import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, Image, StatusBar, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LinearGradient from "react-native-linear-gradient";
import * as Svg from "../../../Assets/Images/svg";
import { theme } from "../../../utils";
import JobCard from "../../../Components/reusableComponents/jobCard/jobCard";
import ProfileCompletionCard from "../../../Components/reusableComponents/ProfileCompletionCard/ProfileCompletionCard";
import { Jobs } from "../../../utils/jobData";
import { ScrollView } from "react-native-gesture-handler";
import NavigationService from "../../../Services/Navigation";
import Icon from 'react-native-vector-icons/Feather'; 

const jobListings = [
  {
    title: "Front End",
    type: "Full Time",
    daysRemaining: 13,
    status: "active",
    applications: 112,
  },
  {
    title: "Software Engineer",
    type: "Internship",
    daysRemaining: 25,
    status: "inactive",
    applications: 440,
  },
  {
    title: "Product Designer",
    type: "Internship",
    daysRemaining: 17,
    status: "active",
    applications: 316,
  },
  {
    title: "UI/UX Designer",
    type: "Internship",
    daysRemaining: 30,
    status: "inactive",
    applications: 620,
  },
];

const DashBoardEmp = ({ navigation }: any) => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("User"); // Default name
  const [showActionModal, setShowActionModal] = useState(false); // State for action modal

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        if (storedUsername) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  // Function to handle post job button press
  const handlePostJobPress = () => {
    setShowActionModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowActionModal(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <LinearGradient
        colors={["#3E1652", "#9857CF"]}
        style={styles.header}
      >
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.navigate("SettingDashboard")}>
            <Svg.Drower />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.greetingText}>Hello,</Text>
            <Text style={styles.userName}>{username}</Text>
          </View>
          <View style={styles.iconRow}>
            <TouchableOpacity>
              <Svg.MessageIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginHorizontal: theme.horizontalSpacing.space_16 }}
              onPress={() => navigation.navigate('Notificationpage')}
            >
              <Svg.SimpleBellIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyProfile')}>
              <Svg.ProfileIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          height: theme.verticalSpacing.space_18,
          marginTop: theme.horizontalSpacing.space_100,
          flexDirection: "row",
          alignSelf: "flex-end"
        }}>
          <TouchableOpacity style={styles.button} onPress={handlePostJobPress}>
            <Text style={styles.buttonText}>Post A Jobs</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "black", fontSize: theme.fontSizes.size_16, fontWeight: '500' }}>Hello Infosys</Text>
        <Text style={{ color: theme.lightColor.gray, fontSize: theme.fontSizes.size_14, fontWeight: '500', marginTop: 10 }}>OverView of Hiring Metrics ,Pipeline, and Progress</Text>
      </LinearGradient>
      <View style={[styles.cardView, { paddingLeft: 15 }]}>
        <JobCard
          color={'#9857CF'}
          backgroundImage={require('../../../Assets/Images/OpenjobsIcon.png')}
          count={count}
          title={'Open Jobs'} onPress={undefined} topRightImage={undefined} />
        <JobCard
          color={'#9857CF'}
          backgroundImage={require('../../../Assets/Images/savedjobsicon.png')}
          count={count}
          title={'Saved Candidate'} onPress={undefined} topRightImage={undefined} />
      </View>

      {/* ------------------------------------Recently Posted Jobs start----------------------------------- */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerTitle}>Recently Posted Jobs</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View all →</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tableColumnHeaders}>
            <Text style={styles.columnHeader}>Jobs</Text>
            <Text style={styles.columnHeader}>Status</Text>
            <Text style={styles.columnHeader}>Applications</Text>
            <Text style={styles.columnHeader}>Action</Text>
          </View>
          {jobListings.map((job, index) => (
            <View 
              key={index} 
              style={[
                styles.tableRow,
                job.title === "Product Designer" && styles.highlightedRow
              ]}
            >
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobType}>{job.type}</Text>
                <Text style={styles.daysRemaining}>• {job.daysRemaining} days remaining</Text>
              </View>
              <View style={styles.statusContainer}>
                {job.status === 'active' ? (
                  <Icon name="check" color="#22C55E" size={20} />
                ) : (
                  <Icon name="x" color="#EF4444" size={20} />
                )}
              </View>
              <View style={styles.applicationsContainer}>
                <Icon name="users" size={16} color="#666" />
                <Text style={styles.applicationsCount}>{job.applications}</Text>
              </View>
              <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.viewButton}>
                  <Text style={styles.viewButtonText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moreButton}>
                  <Icon name="more-vertical" size={20} color="#666" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* ------------------------------------Profile Completion Section----------------------------------- */}
        <View style={styles.profileCompletionContainer}>
          <View style={styles.progressContainer}>
            <Text style={styles.progressTitle}>Your progress</Text>
            <View style={styles.progressRow}>
              <Text style={styles.progressPercentage}>1% </Text>
              <Text style={styles.progressText}>Complete</Text>
            </View>
            
            <View style={styles.progressBar}>
              <View style={styles.progressFilled} />
              <View style={styles.progressDots}>
                <View style={[styles.progressDot, styles.activeDot]} />
                <View style={styles.progressDot} />
                <View style={styles.progressDot} />
              </View>
            </View>
            
            <TouchableOpacity style={styles.completeProfileButton}>
              <Text style={styles.completeProfileButtonText}>Complete Profile</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileInfoContainer}>
            <Image 
              source={require('../../../Assets/Images/profile-placeholder.png')} 
              style={styles.profileImage}
            />
            <View style={styles.profileInfoText}>
              <Text style={styles.profileInfoTitle}>
                <Text style={styles.highlightedText}>Complete your profile</Text> and post your first job to start attracting top talent. Once done, all your activity and stats will be displayed here.
              </Text>
            </View>
          </View>
          
          <View style={styles.jobsDisplayContainer}>
            <Text style={styles.jobsDisplayTitle}>Jobs You Post Will Be Displayed Here.</Text>
            <Text style={styles.jobsDisplaySubtitle}>Ready To Find The Perfect Candidates?</Text>
            <TouchableOpacity style={styles.postJobButton} onPress={handlePostJobPress}>
              <Text style={styles.postJobButtonText}>Post Your First Job</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Action Required Modal */}
      <Modal
        visible={showActionModal}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Icon name="x" color="#666" size={24} />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Action Required!</Text>
            
            <Image 
              source={require('../../../Assets/Images/action-required.png')} 
              style={styles.actionImage} 
            />
            
            <Text style={styles.modalMessage}>
              Before posting your first job, please complete your company profile on the portal.
            </Text>
            
            <TouchableOpacity 
              style={styles.addCompanyButton}
              onPress={() => {
                closeModal();
                // Navigate to add company screen
                // navigation.navigate('AddCompany');
              }}
            >
              <Text style={styles.addCompanyButtonText} onPress={() => navigation.navigate("UpdateCompnayDetails")}>Add Company</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '100%',
    backgroundColor: "white",
  },
  header: {
    borderBottomLeftRadius: theme.horizontalSpacing.space_40,
    borderBottomRightRadius: theme.horizontalSpacing.space_40,
    paddingVertical: theme.verticalSpacing.space_20,
    paddingHorizontal: theme.horizontalSpacing.space_18,
    height: theme.verticalSpacing.space_165
  },
  headerRow: {
    marginTop: theme.verticalSpacing.space_38,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    width: theme.horizontalSpacing.space_187,
    marginLeft: 10,
  },
  greetingText: {
    color: "#fff",
    fontSize: theme.fontSizes.size_14,
    fontWeight: "400",
  },
  userName: {
    color: "#fff",
    fontSize: theme.fontSizes.size_24,
    fontWeight: "bold",
  },
  iconRow: {
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    borderRadius: theme.horizontalSpacing.space_50,
    marginTop: theme.verticalSpacing.space_140,
    paddingLeft: 10,
    paddingVertical: 5,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: theme.horizontalSpacing.space_328,
    marginLeft: theme.horizontalSpacing.space_30,
    height: theme.verticalSpacing.space_58
  },
  searchInput: {
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 5,
  },
  cardView: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: theme.verticalSpacing.space_140
  },
  list: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 10
  },
  card: {
    height: theme.verticalSpacing.space_126,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3
  },
  logo: {
    width: theme.horizontalSpacing.space_68,
    height: theme.verticalSpacing.space_68,
    borderRadius: 5
  },
  content: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  details: {
    color: '#555',
    fontSize: 12,
    marginLeft: 5
  },
  status: {
    marginLeft: theme.horizontalSpacing.space_40,
    fontWeight: 'bold',
    fontSize: 12
  },
  active: {
    color: 'green'
  },
  inactive: {
    color: 'red'
  },
  actions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  jobType: {
    backgroundColor: '#e1bee7',
    color: '#6a1b9a',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 12
  },
  button: {
    width: theme.horizontalSpacing.space_92,
    height: theme.verticalSpacing.space_30,
    backgroundColor: '#3E1654',
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: theme.horizontalSpacing.space_50
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center'
  },
  tableContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  viewAll: {
    color: '#666',
    fontSize: 14,
  },
  tableColumnHeaders: {
    flexDirection: 'row',
    backgroundColor: '#F3E8FF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    position:"relative"
  },
  columnHeader: {
    color: '#666',
    fontSize: 14,
    flex: 1,
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  highlightedRow: {
    backgroundColor: '#F8F4FF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9333EA',
  },
  jobInfo: {
    flex: 2,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111',
  },
  jobType: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  daysRemaining: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  statusContainer: {
    flex: 1,
    alignItems: 'center',
  },
  applicationsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  applicationsCount: {
    fontSize: 14,
    color: '#666',
    flex: 2,
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
  },
  viewButton: {
    backgroundColor: '#3E1652',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 13,
  },
  moreButton: {
    padding: 4,
  },
  
  // Profile Completion Section styles
  profileCompletionContainer: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  progressContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  progressTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6B21A8',
  },
  progressText: {
    fontSize: 16,
    color: '#6B21A8',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    marginBottom: 12,
    position: 'relative',
  },
  progressFilled: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '1%',
    backgroundColor: '#6B21A8',
    borderRadius: 2,
  },
  progressDots: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    top: -4,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E7EB',
  },
  activeDot: {
    backgroundColor: '#6B21A8',
  },
  completeProfileButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#6B21A8',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
  },
  completeProfileButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  profileInfoContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    alignItems: 'center',
  },
  profileImage: {
    width: 64,
    height: 120,
    marginRight: 16,
  },
  profileInfoText: {
    flex: 1,
  },
  profileInfoTitle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  highlightedText: {
    color: '#6B21A8',
    fontWeight: '500',
  },
  jobsDisplayContainer: {
    backgroundColor: '#3E1652',
    padding: 16,
    alignItems: 'center',
  },
  jobsDisplayTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  jobsDisplaySubtitle: {
    color: '#E5E7EB',
    fontSize: 14,
    marginBottom: 16,
  },
  postJobButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  postJobButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#F3E8FF',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 15,
    marginBottom: 20,
  },
  actionImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  modalMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  addCompanyButton: {
    backgroundColor: '#6B21A8',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
  },
  addCompanyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default DashBoardEmp;