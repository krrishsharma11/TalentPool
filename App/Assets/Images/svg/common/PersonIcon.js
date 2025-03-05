import React from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

const PersonIcon = ({size = 24, color = 'black'}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M6.875 12.5C9.11866 12.5 10.9375 10.6812 10.9375 8.4375C10.9375 6.19384 9.11866 4.375 6.875 4.375C4.63134 4.375 2.8125 6.19384 2.8125 8.4375C2.8125 10.6812 4.63134 12.5 6.875 12.5Z" stroke="#5E6670" stroke-width="1.5" stroke-miterlimit="10"/>
<Path d="M12.1416 4.52726C12.7004 4.36983 13.2864 4.33396 13.8602 4.42208C14.434 4.5102 14.9822 4.72026 15.468 5.0381C15.9538 5.35595 16.3658 5.7742 16.6763 6.26469C16.9868 6.75519 17.1886 7.30652 17.2681 7.88158C17.3476 8.45663 17.303 9.04204 17.1372 9.59838C16.9714 10.1547 16.6883 10.6691 16.307 11.1068C15.9256 11.5445 15.4549 11.8954 14.9266 12.1359C14.3982 12.3764 13.8244 12.5009 13.2439 12.5009" stroke="#5E6670" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M1.24976 15.4216C1.88424 14.5191 2.72655 13.7825 3.70558 13.274C4.68461 12.7655 5.77161 12.5 6.87482 12.5C7.97803 12.5 9.06506 12.7654 10.0441 13.2738C11.0232 13.7822 11.8656 14.5187 12.5001 15.4212" stroke="#5E6670" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M13.2439 12.5C14.3472 12.4992 15.4345 12.7643 16.4136 13.2728C17.3928 13.7813 18.235 14.5182 18.8689 15.4212" stroke="#5E6670" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>


  );
};

export default PersonIcon;
