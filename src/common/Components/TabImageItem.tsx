// Global loader for whole application //

import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Color from '../../libs/Colors';
import { PRIMARY_FONT_REGULAR } from '../../constants/fonts';
import { responsiveFontSize } from '../../libs/responsiveFont';


interface ImageProps {
    imageSource: any;
}

const TabImageItem = ({ imageSource }: ImageProps) => {
    return (
        <Image
            source={imageSource}
            style={{width: 20, height: 20}}
        />
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

export default TabImageItem;
