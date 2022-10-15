// Global loader for whole application //

import React from 'react';
import { ImageSourcePropType } from 'react-native';
import Color from '../../libs/Colors';
import CustomInput from './CustomInput';
interface CustomInputProps {
  leftIcon?: ImageSourcePropType;
  placeholder?: string;
  callBackLeftImage?: any;
  onChangeText?: any;
  onSubmitEditing?: any;
  keyboardType?: any;
  inputValue?: string;
  callBackRightImage?: any
}

const CustomSearchInput = ({
  leftIcon,
  placeholder,
  callBackLeftImage,
  callBackRightImage,
  onChangeText,
  onSubmitEditing,
  keyboardType,
  inputValue,
}: CustomInputProps) => {
  const deleteSearch = () => {
    onChangeText('');

    callBackRightImage();
  }
  return (
    <CustomInput
      leftIcon={leftIcon}
      placeholder={placeholder}
      backgroundViewColor={Color.colorGray}
      RightIcon={inputValue == '' ? require('../../../assets/images/svg/ic_search.png') : require('../../../assets/images/svg/vector.png')}
      callBackLeftImage={callBackLeftImage}
      callBackRightImage={deleteSearch}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      keyboardType={keyboardType}
      inputValue={inputValue}
    />
  );
};

export default CustomSearchInput;
