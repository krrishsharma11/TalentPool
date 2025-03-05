import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { theme } from '../../../utils'
import * as Svg from '../../../Assets/Images/svg'
import CustomDropDownTextInput from '../../../Components/reusableComponents/customDropDownTextInput/CustomDropDownTextInput'
import CustomTextInput from '../../../Components/reusableComponents/customTextInput/customTextInput'
import { ScrollView } from 'react-native-gesture-handler'
import { Jobs } from '../../../utils/jobData'
import JobGridCard from '../../../Components/reusableComponents/JobGridCard/JobGridCard'
import JobListCard from '../../../Components/reusableComponents/JobListCard/JobListCard'
import CustomBrowseJobHeader from '../../../Components/reusableComponents/BrowseJobHeader/CustomBrowseJobHeader'
import CustomJobSearchTextInput from '../../../Components/reusableComponents/CustomJobSearchTextInput/CustomJobSearchTextInput'


const BrowseJobCandidateScreen = ({navigation}) => {

  const[isGrid, SetisGrid] = useState(false)
  return (
    <View style={styles.main}>
       {/* Header Component */}
       <CustomBrowseJobHeader BellIconOnpress={undefined} messageIconOnpress={undefined} profileuri={require('../../../Assets/Images/person.jpg')}/>
         {/* search and filter  */}
         <CustomJobSearchTextInput onRightIconPress={()=> navigation.navigate('BrowseJobCandidateFilter') } rightIcon={<Svg.FilterIcon/>}/>     {/* need to change dropdown with country and pass data using props */}
       {/* Suggested Jobs and grid and list  */}
      <View style={styles.JobSugestContainer}>
        <Text style={styles.JobSugestText}>Suggested Jobs</Text>
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
      {/* <ScrollView> */}
        <FlatList
              data={Jobs}
              renderItem={ isGrid ? JobGridCard : JobListCard}
              // keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.list}
              /> 
      {/* </ScrollView> */}

    </View>
  )
}

export default BrowseJobCandidateScreen

const styles = StyleSheet.create({
    main:{
        padding:10,
        flex:1,
        backgroundColor:'white',
    },
    JobSugestContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical: theme.verticalSpacing.space_18,

    },
    JobSugestText:{
      alignSelf:'center',
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