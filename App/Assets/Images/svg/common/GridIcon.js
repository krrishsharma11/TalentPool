
import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const GridIcon = ({ size = 24, color = "black" }) => {


    return (

        <Svg width={size} height={size} viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0.59668" y="0.21875" width="22.2537" height="19.5938" rx="2" fill="#D9D9D9"/>
        <Rect x="5.89551" y="4.34375" width="5.29851" height="5.15625" rx="1" fill="black"/>
        <Rect x="12.2539" y="4.34375" width="5.29851" height="5.15625" rx="1" fill="black"/>
        <Rect x="5.89551" y="10.5312" width="5.29851" height="5.15625" rx="1" fill="black"/>
        <Rect x="12.2539" y="10.5312" width="5.29851" height="5.15625" rx="1" fill="black"/>
        </Svg>
        

    );
};

export default GridIcon;









