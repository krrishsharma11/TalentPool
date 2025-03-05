import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as Svg from '../../../assets/images/svg';
import {theme} from '../../../utils';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import CustomButton from '../../../reusableComponents/button/button';
import LinearGradient from 'react-native-linear-gradient';

const ManageJobsDetailsScreen = ({navigation}) => {
  const KeyResponsibilities = [
    ' Conduct user research to understand target audience needs and behaviors.',
    'Develop wireframes, prototypes, and high-fidelity designs for mobile applications.',
    'Collaborate with product managers, developers, and other stakeholders to align on user-centric solutions.',
    'Iterate designs based on user feedback, analytics, and usability testing.',
    'Stay updated with the latest UX trends and implement best practices in design projects.',
    'Mentor junior designers and foster a culture of innovation within the team.',
  ];

  const SkillsQualifications =[
    'Bachelor’s degree in UX Design, Interaction Design, or related field.',
    '5+ years of experience in UX design, preferably in mobile applications.',
    'Proficiency in design tools like Figma, Sketch, or Adobe XD.',
    'Strong understanding of user-centered design principles and methodologies.',
    'Excellent communication and presentation skills.',
    'Ability to manage multiple projects and meet deadlines effectively.'
  ]
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity>
          <Svg.Drower color="black" />
        </TouchableOpacity>
        <CustomTextInput
          placeholder={'Search'}
          style={{width: '250', height: '50'}}
          leftIcon={<Svg.SearchIcon color="#7900BA66" />}
        />
        <TouchableOpacity>
          <Image
            style={styles.profileIcon}
            source={require('../../../assets/images/person.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.HorizontalLine}></View>
      <ScrollView>
        <View style={styles.BackIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Svg.BackArrowIcon />
          </TouchableOpacity>
          <Text style={styles.BackRoutes}>
            Manage Job / Job Title / Jr.UI/UX Designer
          </Text>
        </View>
        <Text style={styles.JobPostDate}>Job Post On: May 11,2021</Text>
        {/* job Card */}
        <LinearGradient colors={['#FFF8E9', '#F7F8F9']} style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              alignItems: 'center',
              marginTop: theme.verticalSpacing.space_8,
              marginRight: theme.horizontalSpacing.space_14,
            }}>
            <TouchableOpacity>
              <Svg.SaveIcon size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Svg.Edit size={18} />
            </TouchableOpacity>
          </View>
          <View style={styles.imagetextContainer}>
            <Image
              source={require('../../../assets/images/EmployersLogo.png')}
              style={styles.ImageCardLogo}
            />
            <View style={{marginLeft: theme.horizontalSpacing.space_16}}>
              <Text
                style={{fontWeight: '500', fontSize: theme.fontSizes.size_16}}>
                Reddit
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Svg.LocationIcon size={16} color="#000000BA" />
                <Text
                  style={{
                    fontSize: theme.fontSizes.size_14,
                    color: theme.lightColor.gray,
                  }}>
                  Pune, Maharashtra
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginLeft: theme.horizontalSpacing.space_10,
              marginTop: theme.verticalSpacing.space_34,
            }}>
            <Text
              style={{fontSize: theme.fontSizes.size_16, fontWeight: '500'}}>
              Jr. UI/UX Designer
            </Text>
            <Text
              style={{
                fontSize: theme.fontSizes.size_14,
                marginTop: theme.verticalSpacing.space_10,
              }}>
              Full Time . 30k- 35k
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: theme.fontSizes.size_12,
                  marginTop: theme.verticalSpacing.space_22,
                }}>
                Job expire in:
              </Text>
              <Text
                style={{
                  fontSize: theme.fontSizes.size_12,
                  marginTop: theme.verticalSpacing.space_22,
                  color: '#E05151',
                }}>
                {' '}
                June 30,2021
              </Text>
            </View>
          </View>
        </LinearGradient>

        {/* Job Description */}
        <View style={{marginTop: theme.verticalSpacing.space_30}}>
          <Text style={{fontSize: theme.fontSizes.size_16, fontWeight: '500'}}>
            Job Description
          </Text>
          <Text
            style={{
              marginTop: theme.verticalSpacing.space_6,
              color: theme.lightColor.gray,
            }}>
            We are seeking a creative and experienced Senior UX Designer to lead
            the design of engaging, user-friendly mobile applications. You will
            collaborate with cross-functional teams to deliver intuitive and
            visually appealing designs that enhance user experiences.
          </Text>
        </View>

        {/* Key Responsibilities */}
        <View style={{marginVertical: theme.verticalSpacing.space_24}} >
        <Text style={styles.title}>Key Responsibilities</Text>
      {KeyResponsibilities.length > 0 ? (
        KeyResponsibilities.map((item, index) => (
          <View key={index} style={styles.bulletPointContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))
      ) : (
        <Text>No responsibilities listed.</Text> // In case the array is empty
      )}
          {/* <Text>•Conduct user research to understand target audience needs and behaviors.</Text> */}
        </View>


        {/* skill and qualification */}
        <View style={{marginTop: theme.verticalSpacing.space_24}} >
        <Text style={styles.title}>Skills & Qualifications</Text>
      {SkillsQualifications.length > 0 ? (
        SkillsQualifications.map((item, index) => (
          <View key={index} style={styles.bulletPointContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))
      ) : (
        <Text>No responsibilities listed.</Text> // In case the array is empty
      )}
        </View>
          <Text style={{marginBottom: theme.verticalSpacing.space_320, marginTop: theme.verticalSpacing.space_20 , textAlign:'center', fontSize: theme.fontSizes.size_16, color: theme.lightColor.gray}} >₹6,00,000 per annum (₹50,000 per month)</Text>
      </ScrollView>
    </View>
  );
};

export default ManageJobsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerRow: {
    marginTop: theme.verticalSpacing.space_38,
    marginBottom: theme.verticalSpacing.space_38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileIcon: {
    width: theme.horizontalSpacing.space_34,
    height: theme.horizontalSpacing.space_34,
    borderRadius: theme.boderRadius.xxxXlarge_25,
    borderColor: theme.lightColor.purple,
  },
  HorizontalLine: {
    height: theme.verticalSpacing.space_4,
    width: theme.horizontalSpacing.space_328,
    backgroundColor: theme.lightColor.lightGrayColor,
    textAlign: 'center',
    margin: 'auto',
  },
  BackIconContainer: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    marginTop: theme.verticalSpacing.space_16,
  },
  BackRoutes: {
    textAlign: 'center',
    margin: 'auto',
    fontSize: theme.fontSizes.size_12,
    color: theme.lightColor.gray,
  },
  JobPostDate: {
    fontSize: theme.fontSizes.size_16,
    marginTop: theme.verticalSpacing.space_76,
    marginLeft: theme.horizontalSpacing.space_8,
  },
  card: {
    height: theme.verticalSpacing.space_260,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.5,
    // elevation: 3
  },
  imagetextContainer: {
    // marginTop: theme.verticalSpacing.space_6,
    marginLeft: theme.horizontalSpacing.space_10,
    flexDirection: 'row',
  },
  bulletPointContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // textAlign:'center',
    marginBottom: theme.verticalSpacing.space_10,
    gap: 4,
  },
  bullet:{
    color: theme.lightColor.gray,
    fontSize: theme.fontSizes.size_16
  },
  itemText:{
    color: theme.lightColor.gray,
    fontSize: theme.fontSizes.size_16
  },
  title:{
    marginBottom: theme.verticalSpacing.space_26,
    fontSize: theme.fontSizes.size_16,
    fontWeight:'500',
  }
});
