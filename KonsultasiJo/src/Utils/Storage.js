import AsyncStorage from '@react-native-async-storage/async-storage';

const get = async(key, defaultValue = null)=>{
  try {
    let value = await AsyncStorage.getItem(key);
    // console.log("current user data is: ", value);
    if (value !== null) {
      value = JSON.parse(value);
    }
    // console.log('data ' + value);
    return value;
  } catch (error) {
    // Error retrieving data
    console.log('Could not save data: ' + key, error);
  }
}
const set = async(key, value)=>{
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error saving data
    console.log('Could not save data: ' + key, error);
  }
  // return success;
}
const remove = async(key) =>{
  try {
    return await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log(e);
  }
}

const clear = async()=> {
  try {
    return await AsyncStorage.clear(() => {
      console.log('cleared');
    });
  } catch (error) {
    // Error saving data
    console.log('Could not clear data ', error);
  }
}

export default {
  get,
  set,
  clear,
  remove,
};
