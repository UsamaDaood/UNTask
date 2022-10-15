// Global loader for whole application //

import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import Colors from '../../libs/Colors';
import { PRIMARY_FONT_REGULAR } from '../../constants/fonts';
import { responsiveFontSize } from '../../libs/responsiveFont';


interface ItemProps {
    item: any;
}

const deposit = "deposit",
    withDraw = "withdraw";

const TransactionItem = ({ item }: ItemProps) => {
    return (
        <View style={styles.depositListItem}>
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={styles.dateView}>{item.date}</Text>
          <Text style={[styles.depositValueText,
            {color: item.type === deposit ? Colors.readyTextColor : Colors.primaryColor}]}>{item.amount}$</Text>
        </View>

        <Image
          source={item.type === deposit ?
            require('../../../assets/images/down_arrow_green.png') :
            require('../../../assets/images/up_arrow_red.png')

        }
          style={{width: 30, height: 30, alignSelf: 'center'}}
        />
      </View>
        );
};
const styles = StyleSheet.create({
    textStyle: {
        fontFamily: PRIMARY_FONT_REGULAR,
        fontSize: responsiveFontSize(20),
        fontWeight: 'bold',
        color: Colors.black,
    },
    depositListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.colorGray,
        margin: 5,
        padding: 10,
      },
      dateView: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.black,
      },

      depositValueText: {
        color: Colors.readyTextColor,
        marginTop: 10,
      },
});

export default TransactionItem;
