// Global loader for whole application //

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  TextInputProps,
} from 'react-native';
import Color from '../../libs/Colors';
import {ImageSourcePropType} from 'react-native';
import {PRIMARY_FONT_REGULAR} from '../../constants/fonts';
import {responsiveFontSize} from '../../libs/responsiveFont';
import {getExtensionOfFile} from '../../utils/regex';
import Colors from '../../libs/Colors';
interface CustomInputProps {
  leftIcon?: ImageSourcePropType;
  placeholder?: string;
  RightIcon?: ImageSourcePropType;
  callBackLeftImage?: any;
  callBackRightImage?: any;
  onChangeText?: any;
  onSubmitEditing?: any;
  keyboardType?: any;
  inputValue?: string;
  backgroundViewColor?: string;
  editable?: boolean;
  isPassword?: boolean

}

const CustomInput = ({
  leftIcon,
  placeholder,
  RightIcon,
  callBackLeftImage,
  callBackRightImage,
  onChangeText,
  onSubmitEditing,
  keyboardType,
  inputValue,
  backgroundViewColor,
  editable,
  isPassword
}: CustomInputProps) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundViewColor ? backgroundViewColor : Colors.colorGray  }]}>
      {leftIcon && (
        <View style={{flex: 0.1, alignSelf: 'center', marginLeft: 5}}>
          <TouchableOpacity onPress={callBackLeftImage}>
            <Image
              style={[
                styles.cartIconStyle,
                {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              source={leftIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={{flex: 0.9}}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="grey"
          style={{padding: 10}}
          keyboardType={keyboardType ? keyboardType : 'default'}
          value={inputValue}
          onChangeText={text => onChangeText(text)}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
          selectTextOnFocus={false}
          secureTextEntry={isPassword}
        />
      </View>

      {RightIcon && (
        <View style={{flex: 0.1, alignSelf: 'center', marginRight: 10}}>
          <TouchableOpacity onPress={callBackRightImage}>
            <Image
              style={[
                styles.cartIconStyle,
                {alignSelf: 'flex-start', marginLeft: 10},
              ]}
              //source={require('../../../assets/images/svg/shopping_cart.png')}
              source={RightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorGray,
    borderRadius: 10,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginTop: 10,
  },
  cartIconStyle: {
    width: responsiveFontSize(18),
    height: responsiveFontSize(18),
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});

export default CustomInput;
