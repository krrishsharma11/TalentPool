import React from "react";
import { View,Text, StyleSheet,Image,  TouchableOpacity } from "react-native";
import CustomButton from "../../Components/reusableComponents/button/button";
import { theme } from "../../utils";
import { String } from "../../utils/string";
import NavigationService from "../../Services/Navigation";
// import { MainRoutes } from "../../navigation/stackNavigation/routeAndParamsList";


const SelectorScreen=({navigation})=>{
return(
    <View style={style.main}>
       <Image
  style={style.imageStyle}
  source={require('../../Assets/Images/technoKrate1.png')}
    />
       <Text style={style.textStyle}>{String.welcomeToTechnoCrate}</Text>
        <CustomButton
        title={String.jobSeeker}
        textStyle={{ fontFamily: theme.fontFamily.notoSans.medium_500 }}
         style={{marginTop:theme.verticalSpacing.space_54}}
         onPress={() => navigation.navigate('AppStack')}
        />
         <CustomButton
        title={String.employer}
        textStyle={{ fontFamily: theme.fontFamily.notoSans.medium_500 }}
        style={{marginTop:theme.verticalSpacing.space_34}}
        onPress={() => NavigationService.navigate('EmployerStack')}
        />
         <Text style={style.text}>

        <Text style={style.highlight}>Learn More </Text>
        About TechnoHire
      </Text>
    </View>
)
}

const style=StyleSheet.create({
    main:{
         width:"100%",
         height:"100%",
        backgroundColor:'white',
        alignItems:'center'
    },
    imageStyle:{
        width:theme.horizontalSpacing.space_260,
        height:theme.verticalSpacing.space_100,
        marginTop:theme.verticalSpacing.space_156
    },
    textStyle:{
        color:theme.lightColor.blackColor,
        fontWeight:'500',
        fontSize:theme.fontSizes.size_18,
        marginTop:theme.verticalSpacing.space_30
    },
    highlight: {
        fontSize:theme.fontSizes.size_18,
    color: '#6A0DAD', 
    fontWeight: '500', 
  },
  text: {
    
    marginTop:theme.verticalSpacing.space_38,
    fontSize:theme.fontSizes.size_18, 
    fontWeight: '400', 
    color: '#000000', 
  },
})

export default SelectorScreen;