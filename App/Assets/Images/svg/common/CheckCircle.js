
import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const CheckCircle = ({ size = 24, color = "black" }) => {


    return (

        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#0BA02C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.4375 8.125L8.85414 12.5L6.5625 10.3125" stroke="#0BA02C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        
        

    );
};

export default CheckCircle;









