import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../../utils';
import DocumentPicker from 'react-native-document-picker';

import * as Svg from '../../../assets/images/svg';
const CandidateProfileScreen = ({navigation}) => {
    const jobsData = [
        {
          id: "job1", // Unique ID for the job
          jobName: "Software Developer",
          jobType: "Full-time", // or "Part-time"
          jobStartDate: "2023-03-01", // YYYY-MM-DD format
          jobEndDate: "2024-02-28", // YYYY-MM-DD format (or leave null for ongoing)
          isPresent: false, // false if the job has ended
          totalMonths: 12, // You can calculate this based on start and end dates
          location: "Nagpur, Maharashtra, India",
          workType: "Hybrid", // "Onsite", "Hybrid", or "Remote"
        },
        {
          id: "job2", // Unique ID for the job
          jobName: "UI/UX Designer",
          jobType: "Part-time",
          jobStartDate: "2023-07-15",
          jobEndDate: "2024-01-15",
          isPresent: false,
          totalMonths: 6,
          location: "Nagpur, Maharashtra, India",
          workType: "Remote",
        },
        {
          id: "job3", // Unique ID for the job
          jobName: "Project Manager",
          jobType: "Full-time",
          jobStartDate: "2022-08-01",
          jobEndDate: null, // null means the job is still ongoing
          isPresent: true,
          totalMonths: 17, // You can calculate this based on the current date if necessary
          location: "Nagpur, Maharashtra, India",
          workType: "Onsite",
        },
      ];
      
      
      
  const [UpPhoto, SetUpPhoto] = useState('Upload Photo');
  const uploadPhoto = async () => {
    try {
      const photoDoc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      SetUpPhoto(photoDoc.name);
      console.log(photoDoc.name);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('user Cancelled the upload');
      } else {
        console.log(error);
      }
    }
  };

 const collegeData = [
    {
        id: 1,
      collegeName: "Anna University, Chennai, Tamil Nadu ",
      branchName: "Master of Technology in Artificial Intelligence",
    },
    {
        id: 2,
      collegeName: "Anna University, Chennai, Tamil Nadu ",
      branchName: "Bachelor of Engineering in Computer Science",
    },
    {
        id: 3,
      collegeName: "Anna University, Chennai, Tamil Nadu ",
      branchName: "Bachelor of Engineering in Computer Science",
    },
    {
        id: 4,
      collegeName: "Anna University, Chennai, Tamil Nadu ",
      branchName: "Bachelor of Engineering in Computer Science",
    },
  ];


  const CertificateData =[
    {
      "Position": "Software Engineer",
      "Certificate_Issue_Company": "Google",
      "Issue_Date": "Dec 2024"
    },
    {
      "Position": "Data Analyst",
      "Certificate_Issue_Company": "Microsoft",
      "Issue_Date": "Nov 2023"
    },
    {
      "Position": "Project Manager",
      "Certificate_Issue_Company": "IBM",
      "Issue_Date": "Jan 2023"
    }
  ]
  
  const PdfFileData =[
    { "id": 1,
      "fileName": "resume_ninad_UI/UX.pdf",
      
    },
    { 
      "id":2,
      "fileName": "resume_ninad_UI/UX.pdf",
      
    },
  
    
  ]
  

  const JobCards = ({item}) => (
    <View style={styles.Card} >
        <Image style={styles.CardImage} source={require('../../../assets/images/person.jpg')}/>
        <View>
            <View style={{flexDirection:'row', gap: theme.horizontalSpacing.space_10, }}>
                <Text style={{fontSize: theme.fontSizes.size_12}}>{item.jobName}.</Text>
                <Text style={{fontSize: theme.fontSizes.size_12}}>{item.jobType}</Text>
            </View>
            <View style={{flexDirection:'row', gap: theme.horizontalSpacing.space_10, }}>
                <Text style={{color: theme.lightColor.gray, fontSize: theme.fontSizes.size_12}}>{item.jobStartDate}</Text>
                <Text style={{color: theme.lightColor.gray, fontSize: theme.fontSizes.size_12}}>{item.jobEndDate === null ? 'present': item.jobEndDate}</Text>
            </View>
            <View style={{flexDirection:'row', gap: theme.horizontalSpacing.space_10, }}>
                <Text style={{color: theme.lightColor.gray, fontSize: theme.fontSizes.size_12}}>{item.location}</Text>
                <Text style={{color: theme.lightColor.gray, fontSize: theme.fontSizes.size_12}}>{item.workType}</Text>
            </View>
        </View>
    </View>
  ) 


  const PdfFileCard = ({item}) => (
    <View style={styles.ResumeCard} >
      <View style={{flexDirection:'row', gap: theme.horizontalSpacing.space_8}} >

        <Image source={require('../../../assets/images/File.png')} />
            <Text style={{fontSize: theme.fontSizes.size_12, fontWeight:'600', textAlign:'center', marginVertical:'auto'}}>{item.fileName}</Text>
      </View>
        <View style={{flexDirection:'row', gap:theme.horizontalSpacing.space_10, alignContent:'center', marginVertical:'auto'}} >
          <TouchableOpacity>
          <Svg.EyeOpen size={12}/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Svg.DownloadIcon size={16}/>
          </TouchableOpacity>
      </View>
    </View>
  )


  const CertificateCard = ({item}) => (
    <View style={styles.EduacationCard} >
        <Image source={require('../../../assets/images/GoogleImage.png')} />
        <View>
            <Text style={{fontSize: theme.fontSizes.size_12, fontWeight:'600'}}>{item.Position}</Text>
            <Text style={{fontSize: theme.fontSizes.size_10, color: theme.lightColor.gray}}>{item.Certificate_Issue_Company}</Text>
            <Text style={{fontSize: theme.fontSizes.size_10, color: theme.lightColor.gray}}>Issued   {item.Issue_Date}</Text>
        </View>
    </View>
  )

  const EducationCard = ({item}) => (
    <View style={styles.EduacationCard} >
        <Image source={require('../../../assets/images/university.png')} />
        <View>
            <Text style={{fontSize: theme.fontSizes.size_12, fontWeight:'600'}}>{item.collegeName}</Text>
            <Text style={{fontSize: theme.fontSizes.size_10, color: theme.lightColor.gray}}>{item.branchName}</Text>
        </View>
    </View>
  )

 

  return (
    <View style={{flex:1}} >
      {/* linear colours ui */}
      <LinearGradient
        colors={['#3E1654', '#9857CF']} // Gradient colors
        style={styles.header}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <TouchableOpacity style={styles.BackArrowIcon} onPress={()=> navigation.goBack()} >
          <Svg.BackArrowIcon />
        </TouchableOpacity>
        {/* profile image  */}
        <View style={styles.ProfileTouch}>
          <Image
            style={styles.profileIcon}
            source={require('../../../assets/images/person.jpg')}
          />
          <TouchableOpacity style={styles.AddIcon} onPress={uploadPhoto}>
            <Svg.AddIconRounded color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: theme.fontSizes.size_24,
              fontWeight: '600',
              color: '#fff',
            }}>
            Ravi Deshmukh
          </Text>
          <Text
            style={{
              fontSize: theme.fontSizes.size_14,
              fontWeight: '500',
              color: '#fff',
            }}>
            UI/UX Developer
          </Text>
          <Text
            style={{
              fontSize: theme.fontSizes.size_14,
              fontWeight: '500',
              color: '#fff',
            }}>
            Ernst & Young
          </Text>
          <Text
            style={{
              fontSize: theme.fontSizes.size_14,
              fontWeight: '500',
              color: '#858585',
            }}>
            Nagpur,Maharashtra, india
          </Text>
        </View>
      </LinearGradient>
      <ScrollView style={styles.OutsideLinearcolourContainer}>
        {/* About info  */}
        <Text style={{fontSize: theme.fontSizes.size_12, fontWeight: '600'}}>
          About
        </Text>
        <Text style={styles.AboutDetails}>
          UI/UX Designer with a passion for crafting intuitive and user-centered
          designs that enhance overall user experiences. UI/UX Designer with a
          passion for crafting intuitive and user-centered designs that enhance
          overall user experiences.... see more{' '}
        </Text>
        {/* Top Skills */}
        <View style={styles.TopSkillContainer}>
            <View style={styles.TopSkillInnerContainer}>
                <View style={{alignContent:'flex-start', marginTop: theme.verticalSpacing.space_4}}>
          <Svg.DaimandIcon color='#0000007A' />
                </View>
          <View>
            <Text style={{fontSize: theme.fontSizes.size_12, fontWeight:'600', color: theme.lightColor.gray}}>Top Skill</Text>
            <Text style={{fontSize: theme.fontSizes.size_10, fontWeight:'600', color: theme.lightColor.gray}}>Figma, PhotoShop, Canva, Adobe XD</Text>
          </View>
            </View>
        </View>
        {/* Experience */}
        <View style={styles.ExperienceContainer} >
            <Text style={{fontSize: theme.fontSizes.size_12, fontWeight:'600', color: theme.lightColor.gray}}>
                Experience
            </Text>
            <FlatList
            data={jobsData}
            renderItem={JobCards}
            keyExtractor={item => item.id}
            />

        </View>

        {/* Education */}
        <View style={styles.EducationContainer} >
            <Text style={{fontSize: theme.fontSizes.size_12, fontWeight:'600', color: theme.lightColor.gray}} >
                Education
            </Text>
            <FlatList
            data={collegeData}
            renderItem={EducationCard}
            keyExtractor={item => item.id}
            />
            <View style={{borderBottomWidth:1, borderColor:'#D9D8D8'}} ></View>

            <View style={{flexDirection:'row', marginTop: theme.verticalSpacing.space_14, justifyContent:'center', gap:8}} >
              

            <Text style={{textAlign:'center',fontSize: theme.fontSizes.size_12 }} >Show All Education</Text>
            <TouchableOpacity style={{textAlign:'center',}}>
            <Svg.ArrowNext size={14} />
            </TouchableOpacity>
            </View>

        </View>

        {/* Certifications */}
        <View style={styles.CertificationContainer} >
            <Text style={{fontSize: theme.fontSizes.size_12, fontWeight:'600', color: theme.lightColor.gray}}>
            Certifications
            </Text>
            <FlatList
            data={CertificateData}
            renderItem={CertificateCard}
            keyExtractor={item => item.id}
            />
           
            

        </View>

        {/* PDF File */}
        <View style={styles.PdfContainer} >
            <Text style={{fontSize: theme.fontSizes.size_12, fontWeight:'600', color: theme.lightColor.gray}}>
            Resume
            </Text>
            <FlatList
            data={PdfFileData}
            renderItem={PdfFileCard}
            keyExtractor={item => item.id}
            />
            

        </View>

      </ScrollView>
    </View>
  );
};

export default CandidateProfileScreen;

const styles = StyleSheet.create({
  header: {
    borderBottomLeftRadius: theme.horizontalSpacing.space_30,
    borderBottomRightRadius: theme.horizontalSpacing.space_30,
    paddingVertical: theme.verticalSpacing.space_20,
    paddingHorizontal: theme.horizontalSpacing.space_18,
    height: theme.verticalSpacing.space_214,
    flexDirection: 'row',
    gap: theme.horizontalSpacing.space_16,
  },
  BackArrowIcon: {
    justifyContent: 'center',
  },
  profileIcon: {
    width: theme.horizontalSpacing.space_76,
    height: theme.horizontalSpacing.space_76,
    borderRadius: theme.boderRadius.xxxXlarge_45,
    borderColor: theme.lightColor.purple,
  },
  ProfileTouch: {
    justifyContent: 'center',
    position: 'relative',
  },
  AddIcon: {
    position: 'absolute',
    bottom: 50,
    left: 47,
  },
  OutsideLinearcolourContainer: {
    marginHorizontal: theme.horizontalSpacing.space_18,
    marginTop: theme.verticalSpacing.space_20,
  },
  AboutDetails: {
    fontSize: theme.fontSizes.size_12,
    fontWeight: '500',
    color: theme.lightColor.gray,
    lineHeight: theme.verticalSpacing.space_18,
    marginTop: theme.verticalSpacing.space_8,
  },
  TopSkillContainer: {
   
    marginTop: theme.verticalSpacing.space_14,
    paddingVertical: theme.verticalSpacing.space_16,
    borderWidth: 1,
    borderColor: '#0000001F',
  },
  TopSkillInnerContainer:{
     flexDirection: 'row',
     alignItems:'flex-start',
     marginLeft: theme.horizontalSpacing.space_16,
     gap: theme.horizontalSpacing.space_8,
  },
  ExperienceContainer:{
    marginTop: theme.verticalSpacing.space_24,

  },
  EducationContainer:{
    marginTop: theme.verticalSpacing.space_24,

  },
  CertificationContainer:{
    marginTop: theme.verticalSpacing.space_24,

  },
  PdfContainer:{
    marginTop: theme.verticalSpacing.space_24,

  },
  Card:{
    flexDirection:'row',
    paddingVertical: theme.verticalSpacing.space_18,
    borderBottomWidth: 1,
    borderBottomColor:'#D9D8D8',
    gap: theme.horizontalSpacing.space_10,
  },
  EduacationCard:{
    flexDirection:'row',
    paddingVertical: theme.verticalSpacing.space_12,
    // borderBottomWidth: 1,
    // borderBottomColor:'#D9D8D8',
    gap: theme.horizontalSpacing.space_10,
    
  },
  ResumeCard:{
    flexDirection:'row',
    paddingVertical: theme.verticalSpacing.space_12,
    gap: theme.horizontalSpacing.space_10,
    justifyContent:'space-between',
    
  },
  CardImage:{
    width: theme.horizontalSpacing.space_50,
    height: theme.verticalSpacing.space_50,
  }
});
