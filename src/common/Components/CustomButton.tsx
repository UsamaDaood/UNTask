// Global loader for whole application //

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Color from '../../libs/Colors';

interface ButtonProps {
  btnString: string;
  onClick: any;
}

const CustomButton = ({ btnString, onClick }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onClick}>
      <Text style={styles.btnTextStyle}>{btnString}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 15,
  },
  btnStyle: {
    backgroundColor: Color.primaryColor,
    padding: 10,
    borderRadius: 7,
  },
  btnTextStyle: {
    color: Color.whiteColor,
    alignSelf: 'center',
  },
});

export default CustomButton;
