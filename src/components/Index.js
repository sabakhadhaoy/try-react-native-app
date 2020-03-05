import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, Dimensions, TextInput, TouchableOpacity, Button, Alert, Platform, ScrollView, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default Index = (props) => {

   const [userData, setUserData] = useState({})

   useEffect(() => {
      AsyncStorage.getItem('USER_DATA')
         .then(res => {
            setUserData(JSON.parse(res))
         })
         .catch(err => console.log(err))
   }, [])

   const logoutPressed = () => {
      return (
         Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
               { text: 'Yes', onPress: () => props.navigation.popToTop() },
               { text: 'No' },
            ]
         )
      )
   }

   return (
      <View style={styles.container}>
         <View style={styles.headerIcon} >
            <TouchableOpacity
               onPress={() => console.log('Drawer')}
            >
               <FontAwesome
                  name='navicon'
                  size={24}
                  color='white'
               />
            </TouchableOpacity>
            <TouchableOpacity
               onPress={logoutPressed}
            >
               <FontAwesome
                  name='power-off'
                  size={24}
                  color='white'
               />
            </TouchableOpacity>
         </View>
         <Text style={styles.headerText}>TRANSACTIONS</Text>
         <View style={styles.balance} >
            <Text style={styles.balanceText}>Balance: PHP 50,000.99</Text>
         </View>
         <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.body}>
               <View style={styles.bodyTransaction}>
                  <TouchableOpacity
                     onPress={() => console.log('Sendout')}
                  >
                     <View style={styles.transactionIcon}>
                        <MaterialCommunityIcons
                           name='cash-multiple'
                           size={50}
                           color='white'
                        />
                     </View>
                     <Text style={{ textAlign: 'center' }}>SENDOUT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => console.log('Billspay')}
                  >
                     <View style={styles.transactionIcon}>
                        <AntDesign
                           name='profile'
                           size={50}
                           color='white'
                        />
                     </View>
                     <Text style={{ textAlign: 'center' }}>BILLSPAY</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.bodyTransaction}>
                  <TouchableOpacity
                     onPress={() => console.log('Cashout')}
                  >
                     <View style={styles.transactionIcon}>
                        <MaterialCommunityIcons
                           name='cash-refund'
                           size={50}
                           color='white'
                        />
                     </View>
                     <Text style={{ textAlign: 'center' }}>CASHOUT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => console.log('Eload')}
                  >
                     <View style={styles.transactionIcon}>
                        <MaterialCommunityIcons
                           name='sim'
                           size={50}
                           color='white'
                        />
                     </View>
                     <Text style={{ textAlign: 'center' }}>ELOAD</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.bodyTransaction}>
                  <TouchableOpacity
                     onPress={() => console.log('ML Shop')}
                  >
                     <View style={styles.transactionIcon}>
                        <MaterialCommunityIcons
                           name='cart-outline'
                           size={50}
                           color='white'
                        />
                     </View>
                     <Text style={{ textAlign: 'center' }}>ML SHOP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => console.log('ML Pay')}
                  >
                     <View style={styles.transactionIcon}>
                        <Fontisto
                           name='wallet'
                           size={50}
                           color='white'
                        />
                     </View>
                     <Text style={{ textAlign: 'center' }}>ML PAY</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
      </View >
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#05375a',
      ...Platform.OS === 'android' ? { paddingTop: 20 } : { paddingTop: 60 }
   },
   headerIcon: {
      paddingBottom: 15,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   headerText: {
      color: 'white',
      fontSize: 32,
      fontWeight: 'bold',
      paddingVertical: 5,
      paddingHorizontal: 10
   },
   balance: {
      paddingHorizontal: 10,
      paddingVertical: 12,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: 'gray'
   },
   balanceText: {
      color: 'white',
      fontSize: 18
   },
   body: {
      paddingHorizontal: 80,
      paddingVertical: 50
   },
   bodyTransaction: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      alignItems: 'center'
   },
   transactionIcon: {
      backgroundColor: '#005893',
      padding: 25,
      borderRadius: 10,
   }
})