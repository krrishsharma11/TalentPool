import React from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

const BackArrowIcon = ({size = 24, color = 'black'}) => {
  return (
    <Svg
      width="9"
      height={size}
      viewBox="0 0 9 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.99868 15.938L7.95367 17L0.287675 9.21C0.103176 9.0197 0 8.76505 0 8.5C0 8.23495 0.103176 7.9803 0.287675 7.79L7.95367 0L8.99868 1.063L1.68067 8.5L8.99868 15.938Z"
        fill="#8391A1"
      />
    </Svg>
  );
};

export default BackArrowIcon;
