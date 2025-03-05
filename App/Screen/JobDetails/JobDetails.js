import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  Switch,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CommonStyles} from '../../Constants/Styles';
import {COLORS} from '../../Constants/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screenHeight} from '../../Constants/PixelRatio';

const JobDetails = ({navigation}) => {
  const [isAlertEnabled, setIsAlertEnabled] = React.useState(false);

  return (
    <SafeAreaView style={{minHeight: screenHeight, backgroundColor: 'white'}}>
      <ScrollView>
        <StatusBar
          translucent={true}
          backgroundColor="white"
          // backgroundColor="black"
          barStyle="dark-content"
        />
        <View style={{}}>
          <View style={CommonStyles.container}>
            <Text style={{fontSize: 16, color: '#18191C', marginBottom: 15}}>
              Job Details
            </Text>
            <LinearGradient
              colors={['#AC03B60D', '#AC03B60D']}
              style={styles.detailcard}>
              <View style={styles.leftSection}>
                <TouchableOpacity onPress={()=>navigation.navigate('SingleCompanyEmp')}>
                  <Image
                    source={require('../../Assets/Images/instagram.png')}
                    style={styles.profileImage}
                  />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                  <Text style={styles.companyName}>Instagram</Text>
                  <Text style={styles.jobTitle}>Senior UX Designer</Text>
                  <View style={styles.badgeContainer}>
                    <View
                      style={[styles.badge, {backgroundColor: '#F79946C9'}]}>
                      <Text style={styles.badgeText}>On Site</Text>
                    </View>
                    <View style={[styles.badge, {backgroundColor: '#7900BA'}]}>
                      <Text style={styles.badgeText}>Full Time</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.rightSection}>
                <TouchableOpacity>
                  <Ionicons name="flag-outline" size={22} color="red" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="mail-outline" size={22} color="#000000" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="call-outline" size={22} color="#000000" />
                </TouchableOpacity>
              </View>
            </LinearGradient>

            <Text style={styles.title}>Job Overview</Text>
            <View style={styles.gridContainer}>
              {jobDetails.map((item, index) => (
                <View key={index} style={styles.detailItem}>
                  <Icon name={item.icon} size={27} color="#6712B96B" />
                  <Text style={styles.label}>{item.label}</Text>
                  <Text style={styles.value}>{item.value}</Text>
                </View>
              ))}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={{width: '48%'}}>
                <LinearGradient
                  // colors={['#A084E8', '#9B59B6']}
                  colors={['#7900BA66', '#7900BA66']}
                  style={styles.applyButton}>
                  <Text style={styles.applyText}>Apply Now</Text>
                  <Icon name={'arrow-right'} size={22} color="#FFFFFF" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton}>
                <Icon
                  name={'bookmark'}
                  size={27}
                  color={COLORS.primaryThemeColor}
                />
                <Text style={styles.saveText}> Save Job</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.expireText}>
              Job expire in:{' '}
              <Text style={styles.expireDate}>June 30, 2021</Text>
            </Text>
            <View style={{marginTop: 10}}>
              <Text style={styles.title}>Job Description</Text>
              <Text style={{color: '#5E6670', fontSize: 15, lineHeight: 24}}>
                We are seeking a creative and experienced Senior UX Designer to
                lead the design of engaging, user-friendly mobile applications.
                You will collaborate with cross-functional teams to deliver
                intuitive and visually appealing designs that enhance user
                experiences.
              </Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={styles.title}>Key Responsibilities</Text>
              {points.map((item, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.bullet}>{'\u2022'}</Text>
                  <Text style={styles.text}>{item}</Text>
                </View>
              ))}
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.title}>Skills & Qualifications</Text>
              {skills.map((item, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.bullet}>{'\u2022'}</Text>
                  <Text style={styles.text}>{item}</Text>
                </View>
              ))}
            </View>
            <View>
              {/* Salary Section */}
              <Text style={styles.title}>Salary Range</Text>
              <Text style={styles.text}>
                ₹6,00,000 per annum (₹50,000 per month)
              </Text>

              {/* Additional Benefits */}
              <Text style={styles.subtitle}>Additional Benefits</Text>
              <Text style={styles.text}>
                Includes performance bonus and health insurance
              </Text>

              {/* Share Job Section */}
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 20,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.regularText,
                    marginTop: 20,
                  }}>
                  Share this job:
                </Text>
                <View style={styles.socialIcons}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../Assets/Images/facebook.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../Assets/Images/twitter.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../Assets/Images/instagram3.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Job Alert Section */}
              <View style={{marginVertical: 20}}>
                <View style={styles.alertContainer}>
                  <Text style={styles.subtitle}>
                    Set alert for similar jobs
                  </Text>
                  <Switch
                    value={isAlertEnabled}
                    onValueChange={() => setIsAlertEnabled(!isAlertEnabled)}
                    trackColor={{false: '#ccc', true: '#8B5CF6'}}
                    thumbColor={isAlertEnabled ? '#6200EA' : '#f4f3f4'}
                  />
                </View>
                <Text style={styles.text}>
                  User Experience Designer, Pune, Maharashtra, India
                </Text>
              </View>

              {/* Premium Subscription */}
              <View>
                <Text style={styles.subtitle}>
                  Job search faster with Premium
                </Text>
                <Text style={styles.text}>
                  Access company insights like strategic priorities, headcount
                  trends, and more
                </Text>
                <TouchableOpacity style={styles.premiumButton}>
                  <Text style={styles.premiumText}>Try Premium for ₹599</Text>
                </TouchableOpacity>
              </View>

              {/* Company Information */}
              <Text style={styles.title}>About the company</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  marginVertical: 10,
                }}>
                <View style={styles.companyContainer}>
                  <Image
                    source={require('../../Assets/Images/instagram2.png')}
                    style={styles.companyLogo}
                  />
                  <View>
                    <Text style={styles.companyName2}>Instagram</Text>
                    <Text style={styles.followers}>123,987 followers</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.followButton}>+ Follow</Text>
                </TouchableOpacity>
              </View>

              {/* Company Details */}
              <View style={styles.companyDetail}>
                <Text style={styles.companyLabel}>Founded in:</Text>
                <Text style={styles.companyValue}>March 21, 2006</Text>
              </View>
              <View style={styles.companyDetail}>
                <Text style={styles.companyLabel}>Organization type:</Text>
                <Text style={styles.companyValue}>Private Company</Text>
              </View>
              <View style={styles.companyDetail}>
                <Text style={styles.companyLabel}>Company size</Text>
                <Text style={styles.companyValue}>120-300 Employees</Text>
              </View>
              <View style={styles.companyDetail}>
                <Text style={styles.companyLabel}>Phone:</Text>
                <Text style={styles.companyValue}>(406) 555-0120</Text>
              </View>
              <View style={styles.companyDetail}>
                <Text style={styles.companyLabel}>Email:</Text>
                <Text style={styles.companyValue}>instagram@gmail.com</Text>
              </View>
              <TouchableOpacity
                style={styles.companyDetail}
                onPress={() => Linking.openURL('https://instagram.com')}>
                <Text style={styles.companyLabel}>Website:</Text>
                <Text style={styles.companyValue}>https://instagram.com</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                >
                <Text style={[styles.detailText, styles.link]}>
                  https://instagram.com
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const jobDetails = [
  {label: 'JOB POSTED', value: '14 June, 2021', icon: 'calendar'},
  {label: 'JOB EXPIRE IN', value: '14 July, 2021', icon: 'clock-outline'},
  {label: 'EDUCATION', value: 'Graduation', icon: 'school'},
  {label: 'SALARY', value: '₹ 50k-80k/month', icon: 'currency-inr'},
  {label: 'LOCATION', value: 'Pune', icon: 'map-marker'},
  {label: 'EXPERIENCE', value: '10-15 Years', icon: 'briefcase'},
];

const points = [
  'Conduct user research to understand target audience needs and behaviors.',
  'Develop wireframes, prototypes, and high-fidelity designs for mobile applications.',
  'Collaborate with product managers, developers, and other stakeholders to align on user-centric solutions.',
  'Iterate designs based on user feedback, analytics, and usability testing.',
  'Stay updated with the latest UX trends and implement best practices in design projects.',
  'Mentor junior designers and foster a culture of innovation within the team.',
];

const skills = [
  'Bachelor’s degree in UX Design, Interaction Design, or related field.',
  '5+ years of experience in UX design, preferably in mobile applications.',
  'Proficiency in design tools like Figma, Sketch, or Adobe XD.',
  'Strong understanding of user-centered design principles and methodologies.',
  'Excellent communication and presentation skills.',
  'Ability to manage multiple projects and meet deadlines effectively.',
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    // borderRadius: 10,
  },

  detailcard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  companyName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#18191C',
  },
  jobTitle: {
    fontSize: 14,
    color: COLORS.regularText2,
    marginTop: 8,
  },
  profileImage: {
    width: 82,
    height: 81,
    borderRadius: 50,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    marginRight: 5,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  rightSection: {
    // flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 5,
    color: COLORS.regularText2,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 5,
    color: COLORS.regularText2,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detailItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 12,
    color: '#767F8C',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // columnGap:10,
  },
  applyButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: 5,
    width: '100%',
  },
  applyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    // paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9B59B6',
    alignItems: 'center',
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: 5,
  },
  saveText: {
    color: '#9B59B6',
    fontWeight: 'bold',
  },
  expireText: {
    marginTop: 10,
    fontSize: 12,
  },
  expireDate: {
    color: '#E05151',
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 20,
    color: '#5E6670',
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#5E6670',
    marginTop: 2,
    lineHeight: 24,
  },

  salary: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },

  socialIcons: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  alertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginVertical:10
  },
  premiumButton: {
    backgroundColor: '#F8AC6C',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  premiumText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  companyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  companyLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  companyName2: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.regularText,
  },
  followers: {
    fontSize: 14,
    color: '#666',
  },
  followButton: {
    color: COLORS.text,
    fontWeight: '500',
    marginLeft: 'auto',
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 2,
  },
  companyDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  companyLabel: {
    color: '#5E6670',
    fontSize: 16,
  },
  companyValue: {
    fontSize: 16,
    color: COLORS.regularText,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: '#007AFF',
  },
});

export default JobDetails;
