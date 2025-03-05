import React from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

const ThreeVerticalDotsIcon = ({size = 24, color = 'black'}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z" fill="#767F8C" stroke="#767F8C"/>
<Path d="M12 6.64844C12.6213 6.64844 13.125 6.14476 13.125 5.52344C13.125 4.90212 12.6213 4.39844 12 4.39844C11.3787 4.39844 10.875 4.90212 10.875 5.52344C10.875 6.14476 11.3787 6.64844 12 6.64844Z" fill="#767F8C" stroke="#767F8C"/>
<Path d="M12 19.6094C12.6213 19.6094 13.125 19.1057 13.125 18.4844C13.125 17.8631 12.6213 17.3594 12 17.3594C11.3787 17.3594 10.875 17.8631 10.875 18.4844C10.875 19.1057 11.3787 19.6094 12 19.6094Z" fill="#767F8C" stroke="#767F8C"/>
</Svg>



  );
};

export default ThreeVerticalDotsIcon;
