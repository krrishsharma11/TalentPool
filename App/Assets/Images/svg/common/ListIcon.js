
import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const AddIcon = ({ size = 24, color = "black" }) => {


    return (

        <Svg width={size} height={size} viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0.447266" y="0.28125" width="16.9552" height="6.1875" rx="1" fill="#939AAD"/>
        <Rect x="0.447266" y="8.53125" width="16.9552" height="6.1875" rx="1" fill="#939AAD"/>
        </Svg>
        
        

    );
};

export default AddIcon;









