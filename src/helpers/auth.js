import { AsyncStorage } from 'react-native';

export const setData = (key, data) => AsyncStorage.setItem(key, data);

export const removeData = (key) => AsyncStorage.removeItem(key);

export const isSignedIn = (key) => {
   return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
         .then(res => {
            if (res !== null) {
               resolve(true);
            } else {
               resolve(false);
            }
         })
         .catch(err => reject(err));
   });
};