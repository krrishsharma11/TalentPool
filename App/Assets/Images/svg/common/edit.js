

import React from 'react';
import {Svg, Path, Mask, G, Rect, Circle} from 'react-native-svg';
import {wp, hp} from '../../../../utils';
const Edit = ({size = 24, color = '#6712B9'}) => {
  return (
     <Svg width={size} height={size} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path 
        d="M9.41176 2.74568L11.7059 5.15732M7.88235 14H14M1.76471 10.7845L1 14L4.05882 13.1961L12.9187 3.88237C13.2054 3.58087 13.3665 3.172 13.3665 2.74568C13.3665 2.31936 13.2054 1.9105 12.9187 1.609L12.7872 1.47073C12.5004 1.16932 12.1114 1 11.7059 1C11.3003 1 10.9114 1.16932 10.6246 1.47073L1.76471 10.7845Z" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </Svg>
  );
};

export default Edit;
