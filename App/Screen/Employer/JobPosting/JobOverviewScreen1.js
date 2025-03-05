import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const JobOverviewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Icon name="signal-cellular-4-bar" size={16} color="#000" />
          <Icon name="wifi" size={16} color="#000" style={{marginLeft: 4}} />
          <Icon name="battery-full" size={16} color="#000" style={{marginLeft: 4}} />
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={24} color="#000" />
        </TouchableOpacity>
        
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://technisys.com/app/uploads/2021/07/technisys-logo.svg' }} 
            style={styles.technisysLogo}
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.rightHeader}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Icon name="notifications-none" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.infosysText}>Infosys</Text>
        </View>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Job Overview</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Job Card */}
        <View style={styles.jobCard}>
          <View style={styles.jobCardHeader}>
            <View style={styles.companyBox}>
              <Text style={styles.companyBoxText}>Infosys</Text>
            </View>
            
            <View style={styles.companyInfo}>
              <Text style={styles.companyName}>Infosys</Text>
              <View style={styles.locationContainer}>
                <Icon name="location-on" size={16} color="#666" />
                <Text style={styles.locationText}>Pune, Maharashtra</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.editIcon}>
              <Icon name="edit" size={18} color="#6C63FF" />
            </TouchableOpacity>
          </View>

          {/* Job Title */}
          <Text style={styles.jobTitle}>Jr. UI/UX Designer</Text>
          
          {/* Job Details */}
          <View style={styles.jobDetails}>
            <Text style={styles.jobDetailText}>Full Time</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.jobDetailText}>30K - 35K</Text>
          </View>
          
          {/* Job Expiry */}
          <View style={styles.expiryContainer}>
            <Text style={styles.expiryLabel}>Job expire in:</Text>
            <Text style={styles.expiryDate}>June 30, 2021</Text>
          </View>
        </View>

        {/* Education Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.sectionDetail}>Degree: Bachelor's, Master's, Ph.D., etc.</Text>
          <Text style={styles.sectionDetail}>Field of Study: Engineering, Marketing, IT, etc.</Text>
        </View>

        {/* Experience Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <Text style={styles.sectionDetail}>Minimum Required Experience: (2+ years)</Text>
          <Text style={styles.sectionDetail}>Preferred Experience Range: (2-5 years)</Text>
        </View>

        {/* Job Type Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Job type</Text>
          <Text style={styles.sectionDetail}>Full-Time</Text>
        </View>

        {/* Location Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.sectionDetail}>Bengaluru</Text>
        </View>

        {/* Skills Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.sectionDetail}>Figma, Prototype, Wireframing, Photoshop, Adobe XD, Adobe Illustrator, Invision, Sketch, Photoshop, Canva</Text>
        </View>

        {/* Job Description Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Job Description</Text>
          <Text style={styles.sectionDetail}>
            We are seeking a creative and experienced Senior UX Designer to lead the design of engaging user-friendly mobile applications. You will collaborate with cross-functional teams to deliver intuitive and visually appealing designs that enhance user experience.
          </Text>
        </View>

        {/* Responsibilities Section */}
        <View style={[styles.sectionContainer, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Responsibilities</Text>
          <View style={styles.bulletPoints}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Conduct user research to understand target audience needs and behaviors.</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Develop wireframes, prototypes, and high-fidelity designs for mobile applications.</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Collaborate with product managers, developers, and other stakeholders to align on user-centric solutions.</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Iterate designs based on user feedback, analytics, and usability testing.</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Stay updated with the latest UX trends and implement best practices in design projects.</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Mentor junior designers and foster a culture of innovation within the team.</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm and Post</Text>
        <Icon name="arrow-forward" size={20} color="#FFF" style={{marginLeft: 5}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  time: {
    fontWeight: 'bold',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  technisysLogo: {
    width: 120,
    height: 24,
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: 10,
  },
  infosysText: {
    fontSize: 14,
    color: '#6C63FF',
    fontWeight: '500',
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContainer: {
    flex: 1,
  },
  jobCard: {
    backgroundColor: '#FFF',
    margin: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  jobCardHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  companyBox: {
    width: 60,
    height: 60,
    backgroundColor: '#E6EFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyBoxText: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
  companyInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  companyName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  editIcon: {
    alignSelf: 'flex-start',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  jobDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  jobDetailText: {
    fontSize: 14,
    color: '#666',
  },
  dot: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 8,
  },
  expiryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expiryLabel: {
    fontSize: 14,
    color: '#666',
  },
  expiryDate: {
    fontSize: 14,
    color: '#FF5252',
    fontWeight: '500',
    marginLeft: 5,
  },
  sectionContainer: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  lastSection: {
    marginBottom: 70, // Add space at the bottom for the button
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  sectionDetail: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  bulletPoints: {
    marginTop: 5,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bullet: {
    fontSize: 14,
    color: '#555',
    marginRight: 8,
    width: 10,
  },
  bulletText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    flex: 1,
  },
  confirmButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#9C27B0', // Purple color matching the image
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JobOverviewScreen;