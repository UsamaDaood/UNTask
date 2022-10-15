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
  Image,
  FlatList,
} from 'react-native';
import CustomInput from '../../common/Components/CustomInput';
import TransactionItem from '../../common/Components/TransectionItem';
import Colors from '../../libs/Colors';
import {toastShow} from '../../libs/toast';
import {handleTransactions} from '../../features/transaction/transactionSlice';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

interface SignInProps {
  navigation: any;
}


const DepositTab: React.FC<SignInProps> = ({navigation}) => {
  const {transaction} = useSelector((state: {transaction: any}) => state);
  const [depositAmount, setDepositAmount] = useState<any>(),
    [depositList, setDepositList] = useState<any>([]),
    [total, setTotal] = useState<number>(0);
    const dispatch = useDispatch<any>();


    useEffect(()=>{
      console.log("LOG:: OKAY SSS " + JSON.stringify(transaction.transactions));
      var deposits = transaction.transactions.filter((item) => item.type == 'deposit').map(({type, amount, date}) => ({type, amount, date}));
      setDepositList(deposits);
    },[transaction])

  useEffect(() => {
    setTotal(
      depositList.reduce(
        (n, {amount}) => parseInt(n) + parseInt(amount),
        0,
      ),
    );
  }, [depositList]);



  const renderListHeader = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        <View style={{alignSelf: 'center', marginTop: 15}}>
          <Text style={{color: Colors.readyTextColor, fontSize: 45}}>
            {total}$
          </Text>
        </View>

        <View style={styles.addInputStyle}>
          <View style={{flex: 1}}>
            <CustomInput
              placeholder={'Enter Deposit Balance'}
              keyboardType={'number-pad'}
              onChangeText={(text: string) => {
                setDepositAmount(text);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              addDepositTransaction();
            }}
            style={{alignSelf: 'center'}}>
            <Image
              source={
                depositAmount && depositAmount.length > 0
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

  const addDepositTransaction = () => {
    if (depositAmount) {
      let value = {
        amount: depositAmount,
        date: moment(new Date()).format("YYYY-MM-DD"),
        type: "deposit"
      };
      var arr = [...depositList];
      console.log('LOG:: ARR ' + ' ' + value);
      arr.unshift(value);
      //setDepositList(arr);


      let ChangeObj = {
        data: value,
      };
      dispatch(handleTransactions(ChangeObj));
    } else {
      toastShow('error', 'Please enter amount first.');
    }
  };

  const renderDepositList = () => {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={renderListHeader()}
          data={depositList}
          renderItem={({item, index}) => renderProductItem(item, index)}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  };

  const renderProductItem = (item: any, index: number) => {
    console.log("LOG:: OKAY ddd " + JSON.stringify(item));


    return (
      <TransactionItem
            item={item}
         />
    );
  };

  return <View style={styles.mainContainer}>{renderDepositList()}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.whiteColor,
    flex: 1,
    paddingHorizontal: 20,
  },
  addInputStyle: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

export default DepositTab;
