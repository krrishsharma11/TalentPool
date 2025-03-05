//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import DrawerNav from './Drawer';
// import Profile from '../Screen/Profile/Profile';
import BottomTab from './BottomTab';
import AlertSetSuccess from '../Screen/Home/AlertSetSuccess';
import JobDetails from '../Screen/JobDetails/JobDetails';
import DrawerNav from './Drawer';
import SelectorScreen from '../Screen/JobSeeker/SelectorScreen';
import JobSeekerScreen from '../Screen/JobSeeker/jobSeekerScreen';
import SignUpScreen from '../Screen/authScreen/signUpScreen/signUpscreenJob';
import JobLoginScreen from '../Screen/authScreen/jobLoginScreen/jobLoginScreen';
import VerificationScreen from '../Components/reusableComponents/verification/verification';
import VerifyYourAccountScreen from '../Screen/JobSeeker/verifyYourAccountScreen';
import EmailVerificationScreen from '../Screen/authScreen/emailVerificationjob/emailVerification';
import VerificationSuccessScreen from '../Screen/authScreen/verificationSuccess/verificationSuccesScreen';
import JobDashboardScreen from '../Screen/JobSeeker/jobDashboardScreen';
import BasicDetails from '../Components/Profile/BasicDetails';
import BasicDetailsScreen from '../Screen/JobSeeker/CompleteYourProfile/BasicDetailsScreen';
import EducationDetails from '../Components/Profile/EducationDetails';
import EducationDetailsScreen from '../Screen/JobSeeker/CompleteYourProfile/EducationDetailsScreen';
import WorkExperienceScreen from '../Screen/JobSeeker/CompleteYourProfile/WorkExperienceScreen';
import Certification from '../Components/Profile/Certification';
import CertificationScreen from '../Screen/JobSeeker/CompleteYourProfile/CertificationScreen';
import SkillsAndPreferencesScreen from '../Screen/JobSeeker/CompleteYourProfile/SkillsAndPreferencesScreen';
import UploadDocumentsScreen from '../Screen/JobSeeker/CompleteYourProfile/UploadDocumentsScreen';
import ProfileCompletionCard from '../Components/reusableComponents/ProfileCompletionCard/ProfileCompletionCard';
import YouAreAllSetScreen from '../Screen/JobSeeker/CompleteYourProfile/YouAreAllSetScreen';
import BrowseJobCandidateScreen from '../Screen/JobSeeker/BrowseJobCandidate/BrowseJobCandidateScreen';

import EditJobAlert from '../Screen/Home/EditJobAlert';
import NotificationScreen from '../Screen/SettingScreens/Notification/NotificationScreen';
import NotificationPage from '../Screen/SettingScreens/Notification/Notificationpage';



const Stack = createStackNavigator();
// create a component
const AppStack = () => {
    // const { login_status } = useSelector(state => state.User)
    return (
        <Stack.Navigator
            // initialRouteName='DrawerNav'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >
            {/* <Stack.Screen name="Chat" component={SplashScreen} />  */}
            {/* <Stack.Screen name="StackScreen" component={SplashScreens} /> */}
            {/* <Stack.Screen name="SelectScreen" component={SelectorScreen} /> */}
            <Stack.Screen name="JobSeekerScreen" component={JobSeekerScreen} />
            <Stack.Screen name="DrawerNav" component={DrawerNav} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="AlertSetSuccess" component={AlertSetSuccess} />
          
            <Stack.Screen name="CreateAccount" component={JobSeekerScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="Login" component={JobLoginScreen} />
            <Stack.Screen name="verifyAccount" component={VerifyYourAccountScreen} />
            <Stack.Screen name="verifyEmail" component={EmailVerificationScreen} />
            <Stack.Screen name="verifyEmailSuccess" component={VerificationSuccessScreen} />
            <Stack.Screen name="BasicDetails" component={BasicDetailsScreen} />
            <Stack.Screen name="EducationDetails" component={EducationDetailsScreen} />
            <Stack.Screen name="WorkExperience" component={WorkExperienceScreen} />
            <Stack.Screen name="Certification" component={CertificationScreen} />
            <Stack.Screen name="Skills_and_Preference" component={SkillsAndPreferencesScreen} />
            <Stack.Screen name="UploadDocument" component={UploadDocumentsScreen} />
            <Stack.Screen name="ProfileCompletion" component={YouAreAllSetScreen} />
            <Stack.Screen name="BrowseJobs" component={BrowseJobCandidateScreen} />
            <Stack.Screen name="verificationSuccessful" component={VerificationSuccessScreen} />
            <Stack.Screen name="EditJobAlert" component={EditJobAlert} />
            <Stack.Screen name='Notificationcustmize' component={NotificationScreen} />
            <Stack.Screen name="Notificationpage" component={NotificationPage} />
            {/* <Stack.Screen name ="MyProfile" component={CompleteYourProfileScreen} /> */}
            {/* <Stack.Screen name ="EditProfileScreen" component={EditProfileScreen} /> */}

            {/* --------------------------------------Employer-------------------------------------------- */}

            {/* <Stack.Screen name="EmployerScreen" component={EmployerScreen} />
            <Stack.Screen name="EmployerSigUp" component={SignUpEmpScreen} />
            <Stack.Screen name ="VerifyAccountEmp"component={VerifyYourAccountScreenEmp} />
            <Stack.Screen name ="EmailVerificationEmp"component={EmailVerificationErp} />
            <Stack.Screen name ="VerifyDoneErp" component={VerificationSuccessScreenErp} />
            <Stack.Screen name ="EditcompanyDetails" component={EditCompanyDetailsScreen} />
            <Stack.Screen name ="UpdateCompnayDetails" component={UpdateCompanydetailsscreen} />
            <Stack.Screen name ="EmployerLoginScreen"component={EmployerLoginScreen} />
            <Stack.Screen name ="ForgotPasswordEmp"component={ForgotPasswordEmp} />
            <Stack.Screen name ="ResetPasswordEmp"component={ResetPasswordEmp} />
            <Stack.Screen name ="RestSuccessfulEmp"component={ResetPasswordSuccessEmp} />
            <Stack.Screen name ="CompnayProfileAdded"component={CompanyProfile} />
            <Stack.Screen name ="DashBoardEmp"component={DashBoardEmp} />
            <Stack.Screen name ="JobOverview"component={JobOverviewScreen} />
            <Stack.Screen name ="JobPost"component={PostJobScreen} /> */}

          

       









          



        </Stack.Navigator>
    );
};

export default AppStack;
