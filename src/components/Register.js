import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';


export default Register = (props) => {

   const [check_textInputChange, setCheck_textInputChange] = useState(false)
   const [password, setPassword] = useState('')
   const [password_confirm, setPassword_confirm] = useState('')
   const [secureTextEntry, setSecureTextEntry] = useState(true)
   const [secureTextEntry_confirm, setSecureTextEntry_confirm] = useState(true)

   const textInputChange = (value) => {
      if (value.length !== 0) {
         setCheck_textInputChange(true)
      } else {
         setCheck_textInputChange(false)
      }
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Animatable.Text
               animation='slideInLeft'
               style={styles.text_header}>
               Welcome Guest!
                </Animatable.Text>
            <Text style={styles.text}>Sign up to be with us</Text>
         </View>
         <Animatable.View
            animation='fadeInUpBig'
            style={styles.footer}>
            <ScrollView style={{ flex: 1 }}>
               <Text style={styles.text_footer}>Username</Text>
               <View style={styles.action}>
                  <FontAwesome
                     name='user-o'
                     color='#05375a'
                     size={20}
                  />
                  <TextInput
                     style={styles.textInput}
                     onChangeText={(text) => textInputChange(text)}

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
               <Text style={[styles.text_footer, {
                  marginTop: 20
               }]}>Confirm Password</Text>
               <View style={styles.action}>
                  <FontAwesome
                     name='lock'
                     color='#05375a'
                     size={20}
                  />
                  <TextInput
                     secureTextEntry={secureTextEntry_confirm}
                     style={styles.textInput}
                     value={password_confirm}
                     onChangeText={(text) => setPassword_confirm(text)}
                  />
                  <TouchableOpacity
                     onPress={() => setSecureTextEntry_confirm(!secureTextEntry_confirm)}>
                     {secureTextEntry_confirm ?
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
               <View style={styles.textPrivate}>
                  <Text style={styles.color_textPrivate}>
                     By signing up you agree to our <Text style={{ fontWeight: 'bold' }}>Terms of Service</Text> and <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>
                  </Text>
               </View>
               <View style={styles.button}>
                  <LinearGradient
                     colors={['#5db8fe', '#39cff2']}
                     style={styles.signIn}>
                     <Text style={[styles.textSign, {
                        color: 'white'
                     }]}>Register</Text>
                  </LinearGradient>
               </View>
            </ScrollView>
         </Animatable.View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#05375a'
   },
   header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
   },
   footer: {
      flex: 3,
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 40,
   },
   text_header: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30
   },
   text_footer: {
      color: '#05375a',
      fontSize: 18
   },
   action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
      alignItems: 'center',
   },
   textInput: {
      flex: 1,
      paddingLeft: 10,
      color: '#05375a',
   },
   button: {
      alignItems: 'center',
      marginVertical: 40,
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
   textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
   },
   color_textPrivate: {
      color: 'gray'
   },
   text: {
      color: '#d6d6d6',
      marginTop: 5
   },
})