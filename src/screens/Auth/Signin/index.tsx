import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import CustomButton from '../../../common/Components/CustomButton';
import CustomInput from '../../../common/Components/CustomInput';
import CustomText from '../../../common/Components/CustomText';
import Colors from '../../../libs/Colors';

interface SignInProps {
  navigation: any;
}

const SignIn: React.FC<SignInProps> = ({navigation}) => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('');


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.whiteColor,
      }}>
      <View
        style={{
          flex: 0.1,
          alignSelf: 'center',
          marginTop: 40,
        }}>
        <CustomText textString="Sign In" />
      </View>

      <View
        style={{
          flex: 0.9,
          marginTop: 40,
        }}>
        <View style={{marginHorizontal: 30}}>
          <CustomInput
            placeholder="Email"
            inputValue={email}
            backgroundViewColor={Colors.colorGray}
            onChangeText={(text: string) => {
              setEmail(text)
            }}
          />
        </View>

        <View style={{marginTop: 10, marginHorizontal: 30}}>
          <CustomInput
            placeholder="Password"
            backgroundViewColor={Colors.colorGray}
            isPassword={true}
            onChangeText={(text: string) => {
              setPassword(text)
            }}
          />
        </View>

        <View style={{marginTop: 30, marginHorizontal: 30}}>
          <CustomButton btnString="Sign In"
          onClick={()=>{
            navigation.navigate("HomeTabs");
          }}
          />
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <CustomText textString="Dont have account. SignUp" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
