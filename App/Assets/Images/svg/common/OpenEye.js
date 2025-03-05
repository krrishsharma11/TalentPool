import React from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

const OpenEye = ({size = 24, color = 'black'}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.0833 11.083C12.6021 11.083 13.8333 9.85179 13.8333 8.33301C13.8333 6.81422 12.6021 5.58301 11.0833 5.58301C9.56456 5.58301 8.33334 6.81422 8.33334 8.33301C8.33334 9.85179 9.56456 11.083 11.0833 11.083Z"
        stroke={color}
        stroke-opacity="0.68"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 8.33333C1 8.33333 4.66667 1 11.0833 1C17.5 1 21.1667 8.33333 21.1667 8.33333C21.1667 8.33333 17.5 15.6667 11.0833 15.6667C4.66667 15.6667 1 8.33333 1 8.33333Z"
        stroke={color}
        stroke-opacity="0.68"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default OpenEye;
