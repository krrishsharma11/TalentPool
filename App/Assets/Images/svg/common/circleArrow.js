import React from 'react';
import {Svg, Path, Mask, G, Rect, Circle} from 'react-native-svg';
import {wp, hp} from '../../../../utils';
const CircleArrow = ({size = 24, color = '#0D7EE5'}) => {
  return (
   <Svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M8.5 16C12.6422 16 16 12.6422 16 8.5C16 4.35775 12.6422 1 8.5 1C4.35775 1 1 4.35775 1 8.5C1 12.6422 4.35775 16 8.5 16Z" stroke="#666666" stroke-linejoin="round"/>
<Path d="M7.375 11.873L10.75 8.49805L7.375 5.12305" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
  );
};

export default CircleArrow;
