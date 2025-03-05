//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import NotificationPage from '../Screen/SettingScreens/Notification/Notificationpage';
import EmployerScreen from '../Screen/Employer/Auth/EmployerScreen/EmployerScreen';
import SignUpEmpScreen from '../Screen/Employer/Auth/signUpScreen/SignupEmployer';
import VerifyYourAccountScreenEmp from '../Screen/Employer/Auth/VerficationScreen/verifyYourAccountScreen';
import EmailVerificationErp from '../Screen/Employer/Auth/emailVerificationjob/EmailVerficationEmp';
import VerificationSuccessScreenErp from '../Screen/Employer/Auth/verificationSuccess/verificationSuccesEmp';
import EditCompanyDetailsScreen from '../Screen/Employer/CompnayDetailsEmp/CompnayEmpDetails';
import UpdateCompanydetailsscreen from '../Screen/Employer/CompnayDetailsEmp/CompnayDeatilstwo';
import EmployerLoginScreen from '../Screen/Employer/Auth/EmployerLoginScreen/EmployerLoginScreen';
import ForgotPasswordEmp from '../Screen/Employer/Auth/forgetPasswordEmployer/ForgotPassEmp';
import ResetPasswordEmp from '../Screen/Employer/Auth/forgetPasswordEmployer/ResetPasswordEmp';
import ResetPasswordSuccessEmp from '../Screen/Employer/Auth/forgetPasswordEmployer/ResetPasswordSuccessEmp';
import CompanyProfile from '../Screen/Employer/Auth/profilepages/CompnayDeatilsAddedSu';
import DashBoardEmp from '../Screen/Employer/DashBoradEmp/DashBoradEmp';import PostJobScreen from '../Screen/Employer/JobPosting/Postjob';
import JobOverviewScreen from '../Screen/Employer/JobPosting/JobOverviewScreen1';
import JobUpdateScreen from '../Screen/Employer/JobPosting/JobUpdateScreen';
import Setting1 from '../Screen/Employer/Settings/Setting1';
import NotiificationSetting from '../Screen/Employer/Settings/NotiificationSetting';
import PasswordChangeSetting from '../Screen/Employer/Settings/PasswordChange/PasswordChangeSetting';
import TalentPool from '../Screen/Employer/TalentPool/TalentPool';




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
         
          
            {/* <Stack.Screen name ="MyProfile" component={CompleteYourProfileScreen} /> */}
            {/* <Stack.Screen name ="EditProfileScreen" component={EditProfileScreen} /> */}

            {/* --------------------------------------Employer-------------------------------------------- */}
            <Stack.Screen name ="TalentPool" component={TalentPool} />

            <Stack.Screen name="EmployerScreen" component={EmployerScreen} />
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
            {/* <Stack.Screen name ="JobPost"component={PostJobScreen} /> */}
            <Stack.Screen name="Notificationpage" component={NotificationPage} />
            <Stack.Screen name ="JobPostScreen"component={PostJobScreen} />
            <Stack.Screen name ="JobOverViewScreen"component={JobOverviewScreen} />
            <Stack.Screen name ="JobUpdateScreen" component={JobUpdateScreen} />

            <Stack.Screen name ="SettingDashboard" component={Setting1} />
            <Stack.Screen name ="NotiificationSetting" component={NotiificationSetting} />
            <Stack.Screen name ="PasswordChangeSetting" component={PasswordChangeSetting} />
            

        </Stack.Navigator> 

    );
};

export default AppStack;
