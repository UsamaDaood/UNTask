import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CustomInput from '../../common/Components/CustomInput';
import Colors from '../../libs/Colors';
import {FlatList} from 'react-native-gesture-handler';
import TransactionItem from '../../common/Components/TransectionItem';
import {handleTransactions} from '../../features/transaction/transactionSlice';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import { toastShow } from '../../libs/toast';

interface SignInProps {
  navigation: any;
}


const WithDrawTab: React.FC<SignInProps> = ({navigation}) => {

  const {transaction} = useSelector((state: {transaction: any}) => state);
  const [withdrawAmount, setWithdrawAmount] = useState<any>(),
    [withdrawList, setWithdrawList] = useState<any>([]),
    [total, setTotal] = useState<number>(0);
    const dispatch = useDispatch<any>();

    useEffect(()=>{
      console.log("LOG:: OKAY SSS " + JSON.stringify(transaction.transactions));
      var withdraw = transaction.transactions.filter((item) => item.type == 'withdraw').map(({type, amount, date}) => ({type, amount, date}));

      setWithdrawList(withdraw);
    },[transaction])


  useEffect(() => {
    setTotal(
      withdrawList.reduce(
        (n, {amount}) => parseInt(n) + parseInt(amount),
        0,
      ),
    );

  }, [withdrawList]);

  const renderListHeader = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        <View style={{alignSelf: 'center', marginTop: 15}}>
          <Text style={{color: Colors.primaryColor, fontSize: 45}}>{total}$</Text>
        </View>

        <View style={styles.addInputStyle}>
          <View style={{flex: 1}}>
            <CustomInput
              placeholder={'Enter'}
              keyboardType={'number-pad'}
              onChangeText={(text: string) => {
                setWithdrawAmount(text)
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              addWithdrawTransaction();
            }}
            style={{alignSelf: 'center'}}>
            <Image
              source={
                withdrawAmount && withdrawAmount.length > 0
                  ? require('../../../assets/images/ic_tick.png')
                  : require('../../../assets/images/ic_tick_disable.png')
              }
              style={{width: 30, height: 30, alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const addWithdrawTransaction = () => {
    //withdrawList, setWithdrawList
    if (withdrawAmount) {
      let value = {
        amount: withdrawAmount,
        date: moment(new Date()).format("YYYY-MM-DD"),
        type: "withdraw"
      };
      var arr = [...withdrawList];
      console.log('LOG:: ARR ' + ' ' + value);
      arr.unshift(value);
      setWithdrawList(arr);

      let ChangeObj = {
        data: value,
      };
      dispatch(handleTransactions(ChangeObj));
    } else {
      toastShow('error', 'Please enter amount first.');
    }
  };

  const renderListView = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        <FlatList
          style={{marginTop: 15}}
          data={withdrawList}
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
};

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

export default WithDrawTab;
