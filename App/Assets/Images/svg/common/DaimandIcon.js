import React from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

const DaimandIcon = ({size = 24, color = 'black'}) => {
  return (
    <Svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 14L0 4.54296L2.3071 0H13.6929L16 4.54296L8 14ZM5.29222 4.18861H10.7078L9.00638 0.837721H6.99362L5.29222 4.18861ZM7.57465 12.1972V5.02633H1.52786L7.57465 12.1972ZM8.42535 12.1972L14.4721 5.02633H8.42535V12.1972ZM11.6512 4.18861H14.855L13.1536 0.837721H9.94981L11.6512 4.18861ZM1.14504 4.18861H4.34879L6.05019 0.837721H2.84645L1.14504 4.18861Z"
        fill={color}
        fill-opacity="0.48"
      />
    </Svg>
  );
};

export default DaimandIcon;
