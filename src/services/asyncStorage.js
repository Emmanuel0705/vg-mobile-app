import { AsyncStorage } from 'react-native';

export const _storeData = async (key, data) => {
    try {
      const result = await AsyncStorage.setItem(
        key,
        JSON.stringify(data)
      );
      return result
    } catch (error) {
      // Error saving data
      return error
    }
  };


 export const _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return value
      }
    } catch (error) {
      // Error retrieving data
      return error
    }
  };