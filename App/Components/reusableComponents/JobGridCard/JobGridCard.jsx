import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import * as Svg from '../../../Assets/Images/svg';
import { color } from 'react-native-elements/dist/helpers';

const JobGridCard = ({item}) => {
  return (
    <TouchableOpacity onPress={undefined}>
      <LinearGradient
        start={{x: 0, y: 1}}
        colors={['#FFF7E7', '#FFFFFF']}
        style={styles.CardContainer}>
        <View style={styles.CardInnerContainer}>
          <Image
            source={{uri: item.companyLogo}}
            style={styles.ImageCardLogo}
          />
          <View style={styles.CardTitleContsiner}>
            <Text
              style={{fontWeight: '700', fontSize: theme.fontSizes.size_14}}>
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: theme.verticalSpacing.space_10,
              }}>
              <Svg.LocationIcon />
              <Text
                style={{
                  marginLeft: 5,
                  color: theme.lightColor.gray,
                  fontSize: theme.fontSizes.size_14,
                }}>
                {item.location}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.JobTypeContainer}>
          <Text style={{fontSize: theme.fontSizes.size_16, fontWeight: '500'}}>
            {item.title}
          </Text>
          <View style={styles.JobTypeAndSalaryText}>
            <Text style={{color: theme.lightColor.blackColor}}>{item.jobType}</Text>
            <Text style={{color: theme.lightColor.blackColor}}>{item.salary}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity >
  );
};

export default JobGridCard;

const styles = StyleSheet.create({
  CardContainer: {
    height: theme.verticalSpacing.space_230,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    borderWidth: 1,
    borderColor: theme.lightColor.lightGrayColor,
    paddingVertical: theme.verticalSpacing.space_30,
    paddingHorizontal: theme.horizontalSpacing.space_30,
    marginBottom: theme.verticalSpacing.space_30,
    // elevation: 3
  },
  CardInnerContainer: {
    flexDirection: 'row',
  },
  ImageCardLogo: {
    height: theme.verticalSpacing.space_70,
    width: theme.horizontalSpacing.space_70,
    borderRadius: theme.boderRadius.medium_8,
  },
  CardTitleContsiner: {
    marginLeft: theme.horizontalSpacing.space_10,
    fontFamily: theme.fontFamily.jost.extrabold_800,
  },
  JobTypeContainer: {
    marginTop: theme.verticalSpacing.space_20,
  },
  JobTypeAndSalaryText: {
    marginTop: theme.verticalSpacing.space_10,
    flexDirection: 'row',
    gap: theme.horizontalSpacing.space_8,
  },
});
