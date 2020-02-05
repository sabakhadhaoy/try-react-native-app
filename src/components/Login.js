import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, Dimensions, TextInput, TouchableOpacity, Button, Alert, Platform, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

export default Login = (props) => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   const [secureTextEntry, setSecureTextEntry] = useState(true)
   const [check_textInputChange, setCheck_textInputChange] = useState(false)

   const textInputChange = (value) => {
      setUsername(value)

      if (value.length !== 0) {
         setCheck_textInputChange(true)
      } else {
         setCheck_textInputChange(false)
      }
   }

   return (

      <View style={styles.container}>
         <StatusBar barStyle='light-content' />
         <View style={styles.header}>
            <Image
               animation='bounceIn'
               duration={1500}
               source={require('../asset/mlhuillier_heading_white.png')}
               style={styles.logo}
               resizeMode={'stretch'}
            />
         </View>

         <Animatable.View
            animation='fadeInUpBig'
            style={styles.form}>
            <ScrollView style={{ flex: 1 }}>
               <Text style={styles.text_footer}>Username</Text>
               <View style={styles.action}>
                  <FontAwesome
                     name='user-o'
                     color='#05375a'
                     size={20}
                  />
                  <TextInput
                     autoCapitalize={'none'}
                     style={styles.textInput}
                     value={username}
                     onChangeText={(text) => textInputChange(text)}
                     returnKeyType='next'

                  />
                  {check_textInputChange &&
                     <Animatable.View
                        animation='bounceIn'>
                        <Feather
                           name='check-circle'
                           color='green'
                           size={18}
                        />
                     </Animatable.View>
                  }
               </View>
               <Text style={[styles.text_footer, {
                  marginTop: 20
               }]}>Password</Text>
               <View style={styles.action}>
                  <FontAwesome
                     name='lock'
                     color='#05375a'
                     size={20}
                  />
                  <TextInput
                     secureTextEntry={secureTextEntry}
                     style={styles.textInput}
                     value={password}
                     onChangeText={(text) => setPassword(text)}
                     returnKeyType='done'
                  />
                  <TouchableOpacity
                     onPress={() => setSecureTextEntry(!secureTextEntry)}>
                     {secureTextEntry ?
                        <Feather
                           name='eye-off'
                           color='gray'
                           size={18}
                        />
                        :
                        <Feather
                           name='eye'
                           color='gray'
                           size={18}
                        />
                     }
                  </TouchableOpacity>
               </View>
               <Text style={{ color: '#009bd1', marginTop: 20 }}>Forgot Password</Text>
               <View style={styles.button}>
                  <TouchableOpacity
                     // onPress={() => props.navigation.goBack()}
                     style={[styles.signIn, {
                        borderColor: '#4dc2f8',
                        borderWidth: 1,
                     }]}>
                     <LinearGradient
                        colors={['#5db8fe', '#39cff2']}
                        style={styles.signIn}>
                        <Text style={[styles.textSign, {
                           color: 'white'
                        }]}>Login</Text>
                     </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => props.navigation.navigate('RegisterScreen')}
                     style={[styles.signIn, {
                        borderColor: '#4dc2f8',
                        borderWidth: 1,
                        marginTop: 15
                     }]}>
                     <Text style={[styles.textSign, {
                        color: '#4dc2f8'
                     }]}>Register</Text>
                  </TouchableOpacity>
               </View>
            </ScrollView>
         </Animatable.View>
      </View >
   )
}

const { height, width } = Dimensions.get('screen');
const height_logo = height * 0.8 * 0.1;
const width_logo = width * 0.85;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#05375a'
   },
   header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      ...Platform.select({
         android: {
            paddingVertical: 30
         }
      })
   },
   logo: {
      width: width_logo,
      height: height_logo,
   },
   form: {
      flex: 3,
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 40,

   },
   text_footer: {
      color: '#05375a',
      fontSize: 18
   },
   action: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E8E8E8',
      alignItems: 'center',
      ...Platform.select({
         ios: {
            marginTop: 15,
            paddingBottom: 10,
         }
      })
   },
   textInput: {
      flex: 1,
      marginLeft: 10,
      color: '#05375a',
   },
   button: {
      alignItems: 'center',
      marginTop: 20
   },
   signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
   },
   textSign: {
      fontSize: 18,
      fontWeight: 'bold'
   }
})