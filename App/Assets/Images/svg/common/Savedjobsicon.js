import React from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';
import SavedJobs from '../../../../Screen/Jobs/SavedJobs';

const SavedJobsicon = ({size = 24, color = 'black'}) => {
  return (
    <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37 46L19.498 36.4348L2 46V3.91304C2 3.40567 2.23047 2.91908 2.6407 2.56032C3.05094 2.20155 3.60734 2 4.1875 2H34.8125C35.3927 2 35.9491 2.20155 36.3593 2.56032C36.7695 2.91908 37 3.40567 37 3.91304V46Z" stroke="#3E1654" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
  );
};

export default SavedJobsicon;
