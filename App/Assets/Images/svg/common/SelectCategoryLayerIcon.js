
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SelectCategoryLayerIcon = ({ size = 24, color = "black" }) => {


    return (

        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M2 17L12 22L22 17" stroke={color} stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M2 12L12 17L22 12" stroke={color} stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={color} stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        
        

    );
};

export default SelectCategoryLayerIcon;









