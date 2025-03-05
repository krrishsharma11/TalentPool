import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomBrowseJobHeader from '../../../Components/reusableComponents/BrowseJobHeader/CustomBrowseJobHeader';
import CustomJobSearchTextInput from '../../../Components/reusableComponents/CustomJobSearchTextInput/CustomJobSearchTextInput';
import * as Svg from '../../../Assets/Images/svg';
import CustomDropDownTextInput from '../../../Components/reusableComponents/customDropDownTextInput/CustomDropDownTextInput';
import { Jobs } from '../../../utils/jobData';
import JobGridCard from '../../../Components/reusableComponents/JobGridCard/JobGridCard';
import JobListCard from '../../../Components/reusableComponents/JobListCard/JobListCard';
import { theme } from '../../../utils';
import CustomTextInput from '../../../Components/reusableComponents/customTextInput/customTextInput';
import CustomButton from '../../../Components/reusableComponents/button/button';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const BrowseJobCandidateFilter = () => {
    const[isGrid, SetisGrid] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState("India");
      const [searchQuery, setSearchQuery] = useState("");
      const [location, setLocation] = useState("");
      const [category, setCategory] = useState("");
      const navigation = useNavigation();
      
  
  return (
    <ScrollView style={styles.main}>
    {/* Header Component */}
    <CustomBrowseJobHeader BellIconOnpress={undefined} messageIconOnpress={undefined} profileuri={require('../../../Assets/Images/person.jpg')}/>
      {/* search and filter  */}
      <CustomJobSearchTextInput/>     {/* need to change dropdown with country and pass data using props */}
      {/* job suggested  */}
      <View style={styles.JobSugestTextContainer}>
     <Text style={styles.JobSugestText}>Suggested Jobs: </Text>
     <Text style={{fontSize: theme.fontSizes.size_14}}>Designer,</Text>
     <Text style={{fontSize: theme.fontSizes.size_14}}>Programing,</Text>
     <Text style={{fontSize: theme.fontSizes.size_14, color: theme.lightColor.purple}}>Digital Marketing,</Text>
     <Text style={{fontSize: theme.fontSizes.size_14}}>Video.</Text>
     {/* <Text style={{fontSize: theme.fontSizes.size_14}}> Animation.</Text> */}
      </View>
      {/*  find and Filter input and find job btn */}
      <View>
        <Text>Find Job</Text>
        <CustomTextInput placeholder={'Job title, Key Words'} leftIcon={<Svg.SearchIcon color='#7900BA66'/>}/>
        <CustomTextInput placeholder={'Location'} leftIcon={<Svg.LocationIcon color='#7900BA66'/>}/>
        <CustomDropDownTextInput
         value={undefined}
         onChange={undefined}
         placeholder={'Select Category'}
         data={[
           {label: '₹5,00,000', value: '500000'},
           {label: '₹6,00,000', value: '600000'},
           {label: '₹7,00,000', value: '700000'},
           {label: '₹8,00,000', value: '800000'},
           {label: '₹10,00,000', value: '1000000'},
           {label: 'Other', value: 'Other'},
         ]}
          leftIcon={<Svg.SelectCategoryLayerIcon color='#7900BA66'/>}/>
        <CustomDropDownTextInput
         value={undefined}
         onChange={undefined}
         placeholder={'Advance Filter'}
         data={[
           {label: '₹5,00,000', value: '500000'},
           {label: '₹6,00,000', value: '600000'},
           {label: '₹7,00,000', value: '700000'},
           {label: '₹8,00,000', value: '800000'},
           {label: '₹10,00,000', value: '1000000'},
           {label: 'Other', value: 'Other'},
         ]}
          leftIcon={<Svg.SelectAdvanceFilterIcon color='#7900BA66'/>}/>
          <CustomButton style={{marginTop: theme.verticalSpacing.space_16}} title={'Find Job'} />

      </View>



    {/* latest job dropdown element grid and list  */}
   <View style={styles.JoblatestContainer}>
     <View style={styles.JobGridListDropDownContainer}>

       <View style={styles.JobSugestDropDown}>
     <CustomDropDownTextInput
      value={undefined}
      onChange={undefined}
      placeholder={'Latest'}
      data={[
        {label: '₹5,00,000', value: '500000'},
        {label: '₹6,00,000', value: '600000'},
        {label: '₹7,00,000', value: '700000'},
        {label: '₹8,00,000', value: '800000'},
        {label: '₹10,00,000', value: '1000000'},
        {label: 'Other', value: 'Other'},
      ]}/>
     </View>
{/* grid and list icon */}
     <View style={styles.GridListIconContainer}>
       <View style={styles.GridListIconInnerContainer}>
         <TouchableOpacity onPress={() => SetisGrid(!isGrid)}>
       <Svg.GridIcon/>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => SetisGrid(false)}>
       <Svg.ListIcon/>
         </TouchableOpacity>
       </View>
     </View>
     </View>
   </View>
   {/* list of job in card grid and list  */}
     <FlatList
           data={Jobs}
           renderItem={ isGrid ? JobGridCard : JobListCard}
           // keyExtractor={(item, index) => index.toString()}
           contentContainerStyle={styles.list}
           />
 </ScrollView>
  )
}

export default BrowseJobCandidateFilter

const styles = StyleSheet.create({
  main:{
    padding:10,
    flex:1,
    backgroundColor:'white',
},
JoblatestContainer:{
  flexDirection:'row',
  justifyContent:'flex-end',
  marginVertical: theme.verticalSpacing.space_18,

},
JobSugestTextContainer:{
flexDirection:'row',
marginTop: theme.verticalSpacing.space_14,

},
JobSugestText:{
  color: theme.lightColor.gray,
  fontSize: theme.fontSizes.size_14,
},
JobGridListDropDownContainer:{
  flexDirection:'row',
},
JobSugestDropDown:{
  width:130,
},
GridListIconContainer:{
  flexDirection:'row',
  alignItems:'center',
  paddingHorizontal:theme.horizontalSpacing.space_4,
  
},
GridListIconInnerContainer:{
  flexDirection:'row',
  alignItems:'center',
  textAlign:'center',
  borderWidth:1,
  marginTop: theme.verticalSpacing.space_8,
  borderRadius: theme.boderRadius.medium_8,
  padding:theme.horizontalSpacing.space_6,
  borderColor: theme.lightColor.lightGrayColor,
  gap: theme.horizontalSpacing.space_6,

}

})