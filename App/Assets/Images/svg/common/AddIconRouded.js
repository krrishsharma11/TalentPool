import React from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

const AddIconRounded = ({size = 24, color = 'black'}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9 0C4.0293 0 0 4.0293 0 9C0 13.9707 4.0293 18 9 18C13.9707 18 18 13.9707 18 9C18 4.0293 13.9707 0 9 0ZM13.5 9.9H9.9V13.5H8.1V9.9H4.5V8.1H8.1V4.5H9.9V8.1H13.5V9.9Z"
        fill={color}
      />
    </Svg>
  );
};

export default AddIconRounded;
