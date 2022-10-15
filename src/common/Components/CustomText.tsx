// Global loader for whole application //

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Color from '../../libs/Colors';
import { PRIMARY_FONT_REGULAR } from '../../constants/fonts';
import { responsiveFontSize } from '../../libs/responsiveFont';


interface TextProps {
    textString: string;
}

const CustomText = ({ textString }: TextProps) => {
    return (
        <Text style={styles.textStyle}> {textString} </Text>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontFamily: PRIMARY_FONT_REGULAR,
        fontSize: responsiveFontSize(20),
        fontWeight: 'bold',
        color: Color.black,
    },
});

export default CustomText;
