import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomText from '../common/Components/CustomText';
import Color from '../libs/Colors';
import {useSelector} from 'react-redux';
import {PRIMARY_FONT_REGULAR} from '../constants/fonts';
import {responsiveFontSize} from '../libs/responsiveFont';
// Screens Importing
import HomeTab from '../screens/HomeTabs/HomeTab';
import DepositTab from '../screens/HomeTabs/DepositTab';
import WithDrawTab from '../screens/HomeTabs/WithDrawTab';
import AllDataListing from '../screens/HomeTabs/AllDataListing';
import SignUp from '../screens/Auth/SignUp';
import SignIn from '../screens/Auth/Signin';
import TabImageItem from '../common/Components/TabImageItem';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

//function getRoute(user: { authorization: string }) {
//  let { authorization } = user;

//  let to = authorization ? 'HomeTabs' : 'SignIn';
//  return to;
//}

function AppNavigator() {
  //const { user } = useSelector((state: { user: any }) => state);

  return (
    <Stack.Navigator
      // initialRouteName={getRoute(user)}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AllDataStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={({navigation, route}) => ({
          headerTitle: props => {
            return <CustomText textString={'Bank Name'} />;
          },
        })}
      />
    </Stack.Navigator>
  );
}

// Displaying Projects List ==> 2nd Tabs Stack
function DepositStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="DepositTab"
        component={DepositTab}
        options={({navigation, route}) => ({
          headerTitle: props => {
            return <CustomText textString={'Deposits'} />;
          },
        })}
      />
    </Stack.Navigator>
  );
}

// Displaying Inquries List ==> 3rd Tabs Stack
function WithDrawsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="WithDrawTab"
        component={WithDrawTab}
        options={({navigation, route}) => ({
          headerTitle: props => {
            return <CustomText textString={'WithDraws'} />;
          },
        })}
      />
    </Stack.Navigator>
  );
}

// Displaying Sales Orders (SO) Tab ==> 4th Tabs Stack
function UserSettingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="AllData"
        component={AllDataListing}
        options={({navigation, route}) => ({
          headerTitle: props => {
            return <CustomText textString={'All Transactions'} />;
          },
        })}
      />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <BottomTab.Navigator
      screenListeners={({navigation, route}) => ({
        tabPress: e => {
          // Prevent default action
          e.preventDefault();

          // Do something with the `navigation` object
          navigation.navigate(route.name, {
            screen: route.name,
            params: null,
          });
        },
      })}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {paddingHorizontal: 25},
      }}>
      {/*1st Tab*/}
      <BottomTab.Screen
        name="Home"
        component={AllDataStack}
        options={{
          tabBarActiveTintColor: Color.tabActiveColor,
          tabBarIcon: ({focused}) =>
            focused ? (
              <TabImageItem
                imageSource={require('../../assets/images/ic_home_filled.png')}
              />
            ) : (
              <TabImageItem
                imageSource={require('../../assets/images/ic_home_unselect.png')}
              />
            ),
        }}
      />

      {/*Second Tab*/}

      <BottomTab.Screen
        name="Deposits"
        component={DepositStack}
        options={{
          unmountOnBlur: true,
          tabBarActiveTintColor: Color.tabActiveColor,
          tabBarIcon: ({focused}) =>
            focused ? (
              <TabImageItem
                imageSource={require('../../assets/images/ic_down_select.png')}
              />
            ) : (
              <TabImageItem
                imageSource={require('../../assets/images/ic_down_unselect.png')}
              />
            ),
        }}
      />

      {/*Third Tab*/}

      <BottomTab.Screen
        name="WithDraws"
        component={WithDrawsStack}
        options={{
          unmountOnBlur: true,
          tabBarActiveTintColor: Color.tabActiveColor,
          tabBarIcon: ({focused}) =>
            focused ? (
              <TabImageItem
                imageSource={require('../../assets/images/ic_up_arrow_filled.png')}
              />
            ) : (
              <TabImageItem
                imageSource={require('../../assets/images/ic_up_arrow_unfilled.png')}
              />
            ),
        }}
      />

      <BottomTab.Screen
        name="All data"
        component={UserSettingStack}
        options={{
          unmountOnBlur: true,
          tabBarActiveTintColor: Color.tabActiveColor,
          tabBarIcon: ({focused}) =>
            focused ? (
              <TabImageItem
                imageSource={require('../../assets/images/ic_all_data_filled.png')}
              />
            ) : (
              <TabImageItem
                imageSource={require('../../assets/images/ic_all_data_filled.png')}
              />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default () => <AppNavigator />;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: responsiveFontSize(20),
    fontWeight: 'bold',
    color: Color.black,
  },
});
