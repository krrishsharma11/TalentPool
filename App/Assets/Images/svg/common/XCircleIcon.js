
import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const XcircleIcon = ({ size = 24, color = "black" }) => {


    return (

        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M9.88478 17.5C13.951 17.5 17.2473 14.1421 17.2473 10C17.2473 5.85786 13.951 2.5 9.88478 2.5C5.81855 2.5 2.52222 5.85786 2.52222 10C2.52222 14.1421 5.81855 17.5 9.88478 17.5Z" stroke="#E05151" stroke-width="1.5" stroke-miterlimit="10"/>
        <Path d="M12.339 7.5L7.43066 12.5" stroke="#E05151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M12.339 12.5L7.43066 7.5" stroke="#E05151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        
        

    );
};

export default XcircleIcon;









