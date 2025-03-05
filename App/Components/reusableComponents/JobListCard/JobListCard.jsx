import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../../utils';
import * as Svg from '../../../Assets/Images/svg';
const JobListCard = ({item}) => {
  return (
    // mention dymanic route based on item.uri like that
    <TouchableOpacity onPress={undefined}>  
      <LinearGradient
        start={{x: 0, y: 1}}
        colors={['#FFF7E7', '#FFFFFF']}
        style={styles.CardContainer}>
          {/* Image container */}
        <View>
          <Image
            source={{uri: item.companyLogo}}
            style={styles.ImageCardLogo}
          />
        </View>

        <View style={{marginLeft: theme.horizontalSpacing.space_20}}>
          {/* title and jobtype */}
        <View style={{ width: 260,flexDirection:'row', justifyContent:'space-between'}}>
            <Text>{item.title}</Text>
            <View style={{backgroundColor:'#DCBDED', borderRadius: theme.boderRadius.xxxlarge_16, padding: 8,}}>
                <Text>{item.jobType}</Text>
            </View>
        </View>
        {/* location, salary , calender icon, remaining days */}
        <View style={{flexDirection:'row', marginTop: theme.verticalSpacing.space_12, gap: 10, justifyContent:'space-between' }}>
          {/* location with icon */}
          <View style={{flexDirection:'row', gap: 4, alignItems:'center'}}>
            <Svg.LocationIcon size={12}/>
            <Text style={{fontSize: theme.fontSizes.size_10, color: theme.lightColor.gray}}>{item.location}</Text>
          </View>
            <Text style={{fontSize: theme.fontSizes.size_10, color: theme.lightColor.gray}}>{item.salary}</Text>
            {/* calendericon with date */}
            <View style={{flexDirection:'row', gap: 4}}>
            <Svg.CalenderIcon color='gray' size={12}/>
            <Text style={{fontSize: theme.fontSizes.size_10, color: theme.lightColor.gray}}>{item.dateApplied}</Text>
            </View>
        </View>
        </View>

      </LinearGradient>
    </TouchableOpacity>
  );
};

export default JobListCard;

const styles = StyleSheet.create({
  CardContainer: {
    flexDirection:'row',
    height: theme.verticalSpacing.space_86,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    borderWidth: 1,
    borderColor: theme.lightColor.lightGrayColor,
    marginBottom: theme.verticalSpacing.space_30,
  },
  ImageCardLogo:{
    height: theme.verticalSpacing.space_68,
    width: theme.horizontalSpacing.space_68,
    borderRadius: theme.boderRadius.medium_8,
  }
});
