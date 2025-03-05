import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import CustomButton from '../../../reusableComponents/button/button';
import { theme } from '../../../utils';
import * as Svg from '../../../assets/images/svg';
import { MainRoutes } from '../../../navigation/stackNavigation/routeAndParamsList';

const EditSkillsScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.heading}>Top skills</Text>

                <View style={styles.textBox}>
                    <View style={styles.skillsRow}>
                        <Text style={styles.skillsLabel}>Skills</Text>
                        {/* Skills Badges */}
                        <View style={styles.skillsContainer}>
                            <View style={styles.skillBadge}>
                                <Text style={styles.skillBadgeText}>Figma</Text>
                            </View>
                            <View style={styles.skillBadge}>
                                <Text style={styles.skillBadgeText}>Canva</Text>
                            </View>
                            <View style={styles.skillBadge}>
                                <Text style={styles.skillBadgeText}>Photoshop</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Suggestion Section */}
                <Text style={styles.suggestionText}>
            <Text style={styles.text}>Suggestion:</Text><Text style={styles.blackText}>Designer</Text>, <Text style={styles.blackText}>Programming</Text>, <Text style={styles.purpleText}>Digital Marketing</Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <CustomButton 
                        title="Save" 
                        backgroundColor="#6A0DAD" 
                        style={styles.saveButton} 
                        onPress={() => navigation.navigate(MainRoutes.COMPLETE_YOUR_PROFILE_SCREEN)} 
                    />
                </View>

                {/* Close Button */}
                <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate(MainRoutes.COMPLETE_YOUR_PROFILE_SCREEN)}>
                    <Svg.CrossIcon size={48} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#F5F5F5',
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: theme.verticalSpacing.space_24,
        alignItems: 'center',
        width: 340,
        elevation: 4,
    },
    heading: {
        fontSize: theme.fontSizes.size_16,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        marginBottom: theme.verticalSpacing.space_16,
    },
    textBox: {
        borderWidth: 1,          
        borderRadius: 12,   
        borderColor: 'gray',      
        padding: 20,             
        backgroundColor: 'white', 
        width: '100%',           
    },
    skillsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.verticalSpacing.space_80,
        borderRadius: 10,
        height: theme.verticalSpacing.space_56,
        marginTop:-20,
    },
    skillsLabel: {
        fontSize: 16,
        color: 'rgba(131, 145, 161, 1)',
        marginRight: 10,
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    skillBadge: {
        backgroundColor: 'rgba(0, 0, 0, 0.56)', 
        width: 70,
        height: 31, 
        borderRadius: 8, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 4,
        marginTop: 4,
    },
    skillBadgeText: {
        color: '#FFF', 
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center',
    },
    suggestionText: {
        fontSize: 14,
        marginTop: 12,
        marginBottom: 10,
        textAlign: 'center',
        color: 'rgba(131, 145, 161, 1)', 
        textShadowColor: 'rgba(0, 0, 0, 0.2)', 
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    blackText: {
        color: 'black',
        fontSize:12,
    },
    purpleText: {
        color: '#6A0DAD', 
        fontSize:12,
    },
    closeButton: {
        position: "absolute",
        top: -20, 
        right: -20, 
        width: 40, 
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", 
        borderRadius: 20, 
        elevation: 5, 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        gap: theme.horizontalSpacing.space_16,
        marginBottom: theme.verticalSpacing.space_16,
    },
    saveButton: {
        width: 120,
        height: 45,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    text:{
        fontSize:12,
    }
});

export default EditSkillsScreen;
