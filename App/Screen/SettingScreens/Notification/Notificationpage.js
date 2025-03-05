import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomBrowseJobHeader from '../../../Components/reusableComponents/BrowseJobHeader/CustomBrowseJobHeader';
import * as Svg from '../../../Assets/Images/svg'
import { theme } from '../../../utils';
import CustomButton from '../../../Components/reusableComponents/button/button';


const NotificationPage = () => {
    const [notification, Setnotification] = useState(false)

const notifications = [
    {
      id: "1",
      type: "application_sent",
      title: "Application sent",
      description: "Applications for Google companies have entered for company review",
      time: "25 minutes ago",
      actionLabel: "Delete",
    },
    {
      id: "2",
      type: "job_notification",
      title: "Your job notification",
      description: "Ninad, there are 10+ new jobs for UI/UX Designer in Nagpur, India",
      time: "1 Hour",
      actionLabel: "See new job",
    },
    {
      id: "3",
      type: "application_sent",
      title: "Application sent",
      description: "Applications for Google Inc have entered for company review",
      time: "25 min",
      actionLabel: "Application details",
    },
    {
      id: "4",
      type: "message",
      title: "New Message",
      description: "Saroj Verma : Hi, How are you doing today?",
      time: "1 Hour",
      actionLabel: "View Message",
    },
  ];


  const renderItem = ({ item }) => {
    return (
      <View style={[styles.notificationCard, item.actionLabel === "Delete" && styles.highlightCard]}>
        {/* Icon and Title */}
        <View style={styles.row}>
        
          {
            item.type === 'message' && ( <View style={{borderRadius: theme.boderRadius.xxxXlarge_25, backgroundColor:'#d9c1e6', padding: theme.horizontalSpacing.space_6}} >
                <Svg.MessageIcon color='#A855F7' size={18} /> 
            </View> )
           
          }
          {
            item.type === 'job_notification' && ( <View style={{borderRadius: theme.boderRadius.xxxXlarge_25, backgroundColor:'#d9c1e6', padding: theme.horizontalSpacing.space_6}} >
                <Svg.BrifcaseIcon color='#A855F7' size={18} /> 
            </View> )
           
          }
          {
            item.type === 'application_sent' && ( <View style={{borderRadius: theme.boderRadius.xxxXlarge_25, backgroundColor:'#fff', padding: theme.horizontalSpacing.space_6}} >
                <Svg.BrifcaseIcon color='#A855F7' size={18} /> 
            </View> )
           
          }
          <View>
          <Text style={styles.title}>{item.title}</Text>
          {/* Description */}
        <Text style={styles.description}>{item.description}</Text>
         {/* Time & Action Button */}
         <View style={styles.footer}>
            {
                item.actionLabel === 'Delete' ? '' : 
        
          <CustomButton style={styles.actionButton} textStyle={styles.actionText} title={item.actionLabel}/>
            }
          
          <Text style={styles.time}>{item.time}</Text>
          {
            item.actionLabel === 'Delete' && (
                <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteText}>{item.actionLabel}</Text>
          </TouchableOpacity>
            )
          }
        </View>
          </View>
        </View>

        

       
      </View>
    );
  };

  return (
    <> 
    {
        notification ?  <View style={styles.main} >
         {/* Header Component */}
    <CustomBrowseJobHeader BellIconOnpress={undefined} messageIconOnpress={undefined} profileuri={require('../../../Assets/Images/person.jpg')}/>
    <View style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'space-between', }}>
            <Text>Notification</Text>
            <Text>Setting</Text>
        </View>

    <FlatList data={notifications} keyExtractor={(item) => item.id} renderItem={renderItem} />  
     </View>
    </View> 
    : 
    <View style={[styles.main, styles.imgcontainer]}>
        <Image style={styles.noNotificationImg} source={require('../../../Assets/Images/noNewNotification.png')} />
        <Text style={styles.titleText}>No New Notification</Text>
    </View>
    }
   
    </>
   
  )
}

export default NotificationPage

const styles = StyleSheet.create({
    main:{
        padding:10,
        flex:1,
        backgroundColor:'white',
    },


    notificationCard: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      highlightCard: {
        backgroundColor: "#F3E8FF", // Light purple for application sent
      },
      row: {
        flexDirection: "row",
        alignItems: 'flex-start',
        gap: theme.horizontalSpacing.space_10,
        paddingRight: theme.horizontalSpacing.space_30
      },
      title: {
        fontSize: 16,
        fontWeight: "bold",
        // marginLeft: 10,
      },
      description: {
        marginTop: 5,
        fontSize: 14,
        color: "#6B7280",
      },
      footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      },
      time: {
        fontSize: 12,
        color: "#9CA3AF",
        
      },
      actionButton: {
        backgroundColor: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 8,
        width: 180,
        height:30,
        borderWidth: 1,
        borderColor:'gray'
      },
      deleteButton: {
        // backgroundColor: "#EDE9FE",
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 8,
      },
      actionText: {
        color: 'gray',
        fontWeight: "bold",
      },
      deleteText: {
        color: theme.lightColor.alertColor,
        fontWeight: "bold",
      },
      container:{
        backgroundColor:'#f5f6fa'
      },
      noNotificationImg:{

        alignSelf:'center',
       
      },
      imgcontainer:{
        justifyContent:'center',
        alignContent:'center',
      },
      titleText:{
        fontSize: theme.fontSizes.size_24,
        textAlign:'center',
        marginTop: theme.verticalSpacing.space_20
      }
})