import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, Dimensions, TextInput, TouchableOpacity, Button, Alert, Platform, ScrollView, ActivityIndicator } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-loading-spinner-overlay'
import Axios from 'axios';
import TouchID from 'react-native-touch-id';

const api = Platform.select({
   ios: {
      baseUrl: `localhost`
   },
   android: {
      baseUrl: `10.0.2.2`
   }
})

export default Login = (props) => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [biotmetric_type, setBiometric_type] = useState('fingerprint')

   const [secureTextEntry, setSecureTextEntry] = useState(true)
   const [check_textInputChange, setCheck_textInputChange] = useState(false)
   const [showSpinner, setShowSpinner] = useState(false)

   useEffect(() => {
      TouchID.isSupported()
         .then((biometryType) => {
            setBiometric_type(biometryType)
         })
         .catch(error => {
            console.log(`${error} - ${Platform.OS}`)
         })
   });

   const biometricHandler = () => {
      return (
         Alert.alert(
            'Facial Recognition',
            '',
            [
               { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
         )
      )

   }

   const submitHandler = () => {

      if (username === '' || password === '') {
         return (
            Alert.alert(
               'Login Failed',
               'Please input username and password',
               [
                  { text: 'OK', onPress: () => console.log('OK Pressed') },
               ]
            )
         )
      }

      setShowSpinner(true)

      const options = {
         method: 'get',
         url: `http://${api.baseUrl}:1234/user/login?userName=${username}&passWord=${password}`
      }

      Axios(options)
         .then((resp) => {
            console.log(resp.data)
            return (
               Alert.alert(
                  'Login Failed',
                  'Please input username and password',
                  [
                     { text: 'OK', onPress: () => console.log('OK Pressed') },
                  ])
            )
         })
         .catch(e => { console.log(e.message) })

   }

   const textInputChange = (value) => {
      setUsername(value)

      value.length !== 0 ? setCheck_textInputChange(true) : setCheck_textInputChange(false)

   }

   return (

      <View style={styles.container}>
         <StatusBar barStyle='light-content' />
         <Spinner
            visible={showSpinner}
            // textContent={'Loading'}
            textStyle={{ color: 'white' }}
         />
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
                  ...Platform.select({
                     ios: {
                        marginTop: 15
                     },
                     android: {
                        marginTop: 10
                     }
                  })
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
               <View style={styles.forgot_biometric}>
                  <TouchableOpacity>
                     <Text style={{ color: '#009bd1', marginTop: 23 }}>Forgot Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={biometricHandler}
                  >
                     {biotmetric_type === 'fingerprint' ?
                        <MaterialIcons
                           name='fingerprint'
                           size={26}
                           color='#009bd1'
                           style={{ marginTop: 20 }}
                        />
                        :
                        <MaterialCommunityIcons
                           name='face-recognition'
                           size={26}
                           color='#009bd1'
                           style={{ marginTop: 20 }}
                        />
                     }

                  </TouchableOpacity>
               </View>
               <View style={styles.button}>
                  <TouchableOpacity
                     onPress={submitHandler}
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
      backgroundColor: '#05375a',
      justifyContent: 'center'
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
   },
   forgot_biometric: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   }
})