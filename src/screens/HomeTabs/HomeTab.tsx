import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    BackHandler,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    Image
} from 'react-native';
import CustomInput from '../../common/Components/CustomInput'
import { PRIMARY_FONT_MEDIUM } from '../../constants/fonts';
import Colors from '../../libs/Colors';

interface SignInProps {
    navigation: any;
}

const HomeTab: React.FC<SignInProps> = ({ navigation }) => {


    const renderListHeader = () => {
        return(
            <View style={{flexDirection: 'column', marginTop: 20}}>
                <CustomInput
                    placeholder={'Search Transaction'}
                    keyboardType={'number-pad'}
                    onChangeText={(text: string)=>{

                    }}

                />
            </View>
        )
    }

    const renderImageWelcomeMsg = () =>{
        return(
            <View style={{flexDirection: 'column',}}>
                <Image
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lsXPp5K6ljRmHPPCQtlqe4Ao8jv_FFfcaw&usqp=CAU'}}
                    style={{width: '100%', height: 300}}
                    resizeMode={'cover'}
                />
                <Text style={styles.textStyle}>Welcome to the Bank Name</Text>

            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            {/*{renderListHeader()}*/}
            {renderImageWelcomeMsg()}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'column',
        backgroundColor: Colors.whiteColor,
        flex: 1,
        paddingHorizontal: 20,
    },
    textStyle:{
        marginTop: 20,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 25,
        color: Colors.black,
        fontFamily: PRIMARY_FONT_MEDIUM
    }
})


export default HomeTab;