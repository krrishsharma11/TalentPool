import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomTextInput from '../customTextInput/customTextInput';
import * as Svg from '../../../Assets/Images/svg';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const CustomDatePicker = ({
  onPress,
  placeholder,
  onConfirm,
  onCancel,
  showDatePicker,
  selectedDate,
}: any): React.JSX.Element => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <CustomTextInput
          placeholder={placeholder}
          editable={false}
          rightIcon={<Svg.CalenderIcon />}
          value={selectedDate ? moment(selectedDate).format('MMM Do YY') : ''}
          onChangeText={undefined}
          style={undefined}
          inputStyle={undefined}
          leftIcon={undefined}
          onLeftIconPress={undefined}
          numberOfLines={undefined}
          onRightIconPress={undefined}
        />
      </TouchableOpacity>
      <DatePicker
        mode="date"
        modal={true}
        open={showDatePicker}
        date={selectedDate ? selectedDate : new Date()}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </View>
  );
};

export default CustomDatePicker;
