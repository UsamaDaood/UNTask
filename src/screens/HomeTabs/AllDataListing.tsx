import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    BackHandler,
    Alert,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import CustomInput from '../../common/Components/CustomInput';
import TransactionItem from '../../common/Components/TransectionItem';
import Colors from '../../libs/Colors';
import {useDispatch, useSelector} from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

interface SignInProps {
    navigation: any;
}

const demoList = [
        {id:1, date: "22-10-2022", amount: 10, isWithdraw: true}
  ];

const AllDataListing: React.FC<SignInProps> = ({ navigation }) => {
    const [allData, setAllData] = useState([]),
        [totalDeposit, setTotalDeposit] = useState<number | undefined>(),
        [totalWithdraw, setTotalWithdraw] = useState<number | undefined>(),
        [totalBalance, setTotalBalance] = useState<number | undefined>()
            ;
    const isFocused = useIsFocused();
    const {transaction} = useSelector((state: {transaction: any}) => state);



    useEffect(()=>{
        setAllData(transaction.transactions);
        console.log("LOG:: transaction " + JSON.stringify(transaction));
        gettingTotalAmount("deposit");
        gettingTotalAmount("withdraw");

    },[isFocused])

    useEffect(()=>{
        console.log("LOGG:: OAKY totalWithdraw " + totalWithdraw + "  + " + totalDeposit + " Differnee " + (totalDeposit-totalWithdraw));
        setTotalBalance(totalDeposit-totalWithdraw);

    },[totalDeposit, totalWithdraw])

    const gettingTotalAmount = (type: string) => {
        if(type === "deposit"){
            //return Deposit total
          var deposits = transaction.transactions.filter((item) => item.type == 'deposit').map(({type, amount, date}) => ({type, amount, date}));
          setTotalDeposit(
            deposits.reduce(
              (n, {amount}) => parseInt(n) + parseInt(amount),
              0,
            ),
          );

        } else if(type === "withdraw"){
            // return Withdraw total

            var withdraws = transaction.transactions.filter((item) => item.type == 'withdraw').map(({type, amount, date}) => ({type, amount, date}));
            setTotalWithdraw(
                withdraws.reduce(
                (n, {amount}) => parseInt(n) + parseInt(amount),
                0,
              ),
            );


        }
    }

    const renderListHeader = () => {
        return (
          <View style={{flexDirection: 'column'}}>
            <View style={{alignSelf: 'center', marginTop: 45}}>
              <Text style={{color: Colors.readyTextColor, fontSize: 45}}>{totalBalance} $</Text>
            </View>

          </View>
        );
      };

      const renderListView = () => {
        return (
          <View style={{flexDirection: 'column'}}>
            <FlatList
            //  style={{marginTop: 10}}
              data={allData}
              renderItem={({item, index}) => renderProductItem(item, index)}
            />
          </View>
        );
      };

      const renderProductItem = (item: any, index: number) => {
        return (
         <TransactionItem
            item={item}
         />
        );
      };


    return (
        <View style={styles.mainContainer}>
          <View style={{flex: 25}}>{renderListHeader()}</View>
          <View style={{flex: 75}}>{renderListView()}</View>
        </View>
      );
}


const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'column',
      backgroundColor: Colors.whiteColor,
      flex: 100,
      paddingHorizontal: 20,
    },
    addInputStyle: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between',
    },
  });


export default AllDataListing;