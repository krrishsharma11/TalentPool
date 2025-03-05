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

const SingleCompanyEmp = ({navigation}) => {
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
                <Image
                  source={require('../../Assets/Images/instagram.png')}
                  style={styles.profileImage}
                />
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
              {jobOverviews.map((item, index) => (
                <View key={index} style={styles.detailItem}>
                  {/* <Icon name={item.icon} size={27} color="#6712B96B" /> */}
                  <Image source={item.icon} style={styles.icon} />
                  <Text style={styles.label}>{item.label}</Text>
                  <Text style={styles.value}>{item.value}</Text>
                </View>
              ))}
            </View>
            {/* <View style={styles.buttonContainer}>
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
            </View> */}
            <View style={{marginTop: 10}}>
              <Text style={styles.title}>Description</Text>
              <Text style={{color: '#5E6670', fontSize: 15, lineHeight: 24}}>
                Instagram, a part of Meta, is a global platform that connects
                people through the power of visual storytelling. With over 2
                billion active users worldwide, Instagram enables individuals
                and businesses alike to create, share, and discover content
                across a variety of formats including photos, videos, stories,
                and more. We are at the forefront of the social media and tech
                industry, using innovation to redefine how people connect,
                communicate, and build communities. Our mission is to bring
                people closer through the stories they share. Whether you’re a
                user, a creator, or a business, Instagram fosters a platform
                that celebrates creativity, engagement, and inclusivity.
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.title}>Company Vision</Text>
              <Text style={{color: '#5E6670', fontSize: 15, lineHeight: 24}}>
                Company Vision To empower people to create and share content
                that inspires, connects, and enables communities to thrive.
                Instagram’s vision is to continue shaping the digital world with
                authenticity, creativity, and innovation, while leading the way
                for future generations to connect meaningfully online.
              </Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={styles.title}>
                Why Join Instagram? (Company Benefits)
              </Text>
              {points.map((item, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.bullet}>
                    <Text style={{fontSize: 22}}>{'\u2022'}</Text> {index + 1}.{' '}
                    {item.title}
                  </Text>
                  <Text style={{...styles.text, marginLeft: 10}}>
                    {' '}
                    <Text style={{fontSize: 22}}>{'\u2022'}</Text>{' '}
                    {item.discription}
                  </Text>
                </View>
              ))}
              <TouchableOpacity style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 17}}>Read More</Text>
              </TouchableOpacity>
            </View>

            <View style={{paddingBottom: 100}}>
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
            </View>

            <View style={{padding: 20}}>
              {/* Contact Information */}
              {/* <View style={styles.card}>
                <Text style={styles.heading}>Contact Information</Text>
                <View style={styles.infoRow}>
                  <Ionicons name="globe-outline" size={20} color="#9C27B0" />
                  <Text style={styles.infoText}>www.instagram.com</Text>
                </View>
                <View style={styles.infoRow}>
                  <Ionicons name="call-outline" size={20} color="#9C27B0" />
                  <Text style={styles.infoText}>+1-202-555-0141</Text>
                </View>
                <View style={styles.infoRow}>
                  <Ionicons name="mail-outline" size={20} color="#9C27B0" />
                  <Text style={styles.infoText}>
                    esther.howard@instagram.com
                  </Text>
                </View>
              </View> */}

              <View style={styles.card}>
                <Text style={styles.heading}>Contact Information</Text>

                <View style={styles.infoRow}>
                  <Ionicons name="globe-outline" size={20} color="#9C27B0" />
                  <View style={styles.textContainer}>
                    <Text style={styles.label}>WEBSITE</Text>
                    <Text style={styles.infoText}>www.instagram.com</Text>
                  </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.infoRow}>
                  <Ionicons name="call-outline" size={20} color="#9C27B0" />
                  <View style={styles.textContainer}>
                    <Text style={styles.label}>PHONE</Text>
                    <Text style={styles.infoText}>+1-202-555-0141</Text>
                  </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.infoRow}>
                  <Ionicons name="mail-outline" size={20} color="#9C27B0" />
                  <View style={styles.textContainer}>
                    <Text style={styles.label}>EMAIL ADDRESS</Text>
                    <Text style={styles.infoText}>
                      esther.howard@instagram.com
                    </Text>
                  </View>
                </View>
              </View>

              {/* Social Media Links */}
              <Text style={styles.socialHeading}>Follow us on:</Text>
              <View style={styles.socialIcons}>
                {[
                  'logo-facebook',
                  'logo-twitter',
                  'logo-instagram',
                  'logo-youtube',
                ].map((icon, index) => (
                  <TouchableOpacity key={index} style={styles.iconButton}>
                    <Ionicons name={icon} size={24} color="#9C27B0" />
                  </TouchableOpacity>
                ))}
              </View>

              {/* Job Listings */}
              <Text style={styles.jobHeading}>Open Positions (12)</Text>
              {[
                'Front End Developer',
                'Jr. UI UX Designer',
                'Web Developer',
              ].map((job, index) => (
                <TouchableOpacity onPress={()=>navigation.navigate('InviteApply')}
                  key={index}
                  style={[styles.jobCard, index === 0 && styles.activeJobCard]}>
                  <Image
                    source={{uri: 'https://via.placeholder.com/50'}}
                    style={styles.jobImage}
                  />
                  <View>
                    <Text style={styles.jobTitle}>{job}</Text>
                    <Text style={styles.jobLocation}>📍 Pune</Text>
                    <Text style={styles.jobDetails}>
                      Full Time • ₹10K- ₹15K
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const jobOverviews = [
  {
    label: 'FOUNDED TYPE',
    value: '14 June, 2021',
    icon: require('../../Assets/Icons/calendar.png'),
  },
  {
    label: 'ORGANIZATION TYPE',
    value: 'Private Company',
    icon: require('../../Assets/Icons/clock.png'),
  },
  {
    label: 'TEAM SIZE',
    value: '120-300 Candidates',
    icon: require('../../Assets/Icons/salary.png'),
  },
  {
    label: 'INDUSTRY TYPE',
    value: 'Technology',
    icon: require('../../Assets/Icons/brifcase.png'),
  },
];

const points = [
  {
    title: 'Career Growth and Learning',
    discription:
      'Instagram offers a diverse and inclusive work environment that fosters creativity, learning, and career growth. We encourage continuous learning with access to mentorship, professional development programs, and industry-leading conferences.',
  },
  {
    title: 'Work-Life Balance',
    discription:
      'We understand the importance of flexibility and mental well-being. Instagram offers flexible working hours, remote work options, and generous paid time off to ensure employees maintain a healthy work-life balance.',
  },
  {
    title: 'Competitive Salary and Stock Options',
    discription:
      'We offer highly competitive compensation packages with base salaries, bonuses, and stock options that reward your contributions to our continued success',
  },
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
    width: '48%',
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

  listItem: {
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#5E6670',
    marginTop: 2,
    lineHeight: 24,
  },

  socialIcons: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },

//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     // elevation: 3,
//     marginBottom: 15,
//   },
//   heading: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
//   infoRow: {flexDirection: 'row', alignItems: 'center', marginBottom: 5},
//   infoText: {marginLeft: 10, fontSize: 14},

  socialHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  socialIcons: {flexDirection: 'row', justifyContent: 'center', gap: 10},
  iconButton: {padding: 10, backgroundColor: '#F3E5F5', borderRadius: 8},
  jobHeading: {fontSize: 18, fontWeight: 'bold', marginVertical: 15},
  jobCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    // elevation: 3,
    alignItems: 'center',
    marginBottom: 30,
    borderColor:'#CEE0F5',
    borderWidth:1
  },
  activeJobCard: {borderWidth: 1, borderColor: '#9C27B0'},
  jobImage: {width: 50, height: 50, borderRadius: 10, marginRight: 10},
  jobTitle: {fontSize: 16, fontWeight: 'bold'},
  jobLocation: {fontSize: 14, color: 'gray'},
  jobDetails: {fontSize: 14, color: 'gray'},

card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    // elevation: 3,
    margin: 15,
    borderWidth: 1,
    // borderColor: '#E0E0E0'
    borderColor: '#CEE0F5'
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  textContainer: {
    marginLeft: 10
  },
  label: {
    fontSize: 12,
    color: 'gray',
    textTransform: 'uppercase'
  },
  infoText: {
    fontSize: 14,
    fontWeight: '500'
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10
  }

});

export default SingleCompanyEmp;
