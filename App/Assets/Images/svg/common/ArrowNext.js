
import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const ArrowNext = ({ size = 24, color = "black" }) => {


    return (

        <Svg width={size} height={size} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0 5.53846H11.2465L6.42655 0.692308L7.03249 0L13 6L7.03249 12L6.42655 11.3077L11.2465 6.46154H0V5.53846Z" fill={color}/>
        </Svg>
        
    );
};

export default ArrowNext;









