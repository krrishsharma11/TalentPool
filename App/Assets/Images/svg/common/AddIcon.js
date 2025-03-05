
import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const AddIcon = ({ size = 24, color = "black" }) => {


    return (

        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M17.5 1H2.5C1.67157 1 1 1.67157 1 2.5V17.5C1 18.3284 1.67157 19 2.5 19H17.5C18.3284 19 19 18.3284 19 17.5V2.5C19 1.67157 18.3284 1 17.5 1Z" stroke="#7900BA" stroke-width="2" stroke-linejoin="round"/>
        <Path d="M10 6V14M6 10H14" stroke="#7900BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        

    );
};

export default AddIcon;









