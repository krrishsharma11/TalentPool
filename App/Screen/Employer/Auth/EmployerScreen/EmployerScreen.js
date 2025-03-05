import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../../../utils";
import CustomButton from "../../../../Components/reusableComponents/button/button";
import { String } from "../../../../utils";


const EmployerScreen = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('EmployerSigUp')
    }


    // Route for Job Application Details
    // const handleApplicationDetails = () => {
    //     navigation.navigate(MainRoutes.ApplicationDetails)
    // }


    //Route for Find Employers
    // const handleFindEmployers = () => {
    //     navigation.navigate(MainRoutes.FIND_EMPLOYER)
    // }


    //Route for Inbox
    // const handleInbox = () => {
    //     navigation.navigate(MainRoutes.INBOX)
    // }


    return (
        <View style={style.main}>
            <View style={style.skillsView}>
                <Text>
                    <View style={style.jobtextView}>
                        <Text style={style.textStyle}>
                        Connected with right talent
                        with same {" "}
                            <Text style={{ color: theme.lightColor.purple }}>interest</Text>
                            <Text style={{}}> & </Text>
                            <Text style={{ color: theme.lightColor.purple, }}>skills.</Text>
                        </Text>
                        <Text style={style.exploreTextStyle}>Find exceptional talent crafted to meet your unique hiring needs, align with your company culture, and drive your business toward success</Text>
                    </View>

                </Text>
            </View>
            <CustomButton
                onPress={handlePress}
                title={String.getStarted}
                textStyle={{ fontFamily: theme.fontFamily.notoSans.medium_500 }}
                style={{ marginTop: theme.verticalSpacing.space_34 }}

            />



            {/* Application Details navigation */}
            {/* <CustomButton
                onPress={handleApplicationDetails}
                title='Application Details'
                textStyle={{ fontFamily: theme.fontFamily.notoSans.medium_500 }}
                style={{ marginTop: theme.verticalSpacing.space_34 }}
            /> */}

            {/* Find Employers navigation */}

            {/* <CustomButton
                onPress={handleFindEmployers}
                title='Find Employee'
                textStyle={{ fontFamily: theme.fontFamily.notoSans.medium_500 }}
                style={{ marginTop: theme.verticalSpacing.space_34 }}
            /> */}
            


            {/* inbox navigation */}
            {/* <CustomButton
                onPress={handleInbox}
                title='Inbox'
                textStyle={{ fontFamily: theme.fontFamily.notoSans.medium_500 }}
                style={{ marginTop: theme.verticalSpacing.space_34 }}
            /> */}




            <View style={style.termsAndPrivacyStyle}>
                <Text style={{ color: theme.lightColor.gray }}>{String.termsAndPrivacy}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {

    },
    skillsView: {
        marginTop: theme.verticalSpacing.space_30,
        padding: 10,
        width: theme.horizontalSpacing.space_370,
        height: theme.verticalSpacing.space_388
    },
    textStyle: {
        fontSize: theme.fontSizes.size_36,
        fontWeight: '500',
        lineHeight: 60

    },
    jobtextView: {
        width: theme.horizontalSpacing.space_260,
        height: theme.verticalSpacing.space_260,
    },
    exploreTextStyle: {
        fontWeight: '400',
        color: theme.lightColor.grayColor,
        lineHeight: 22,
        marginTop: theme.verticalSpacing.space_26
    },
    termsAndPrivacyStyle: {
        marginTop: theme.verticalSpacing.space_230,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%'
    }
})
export default EmployerScreen;