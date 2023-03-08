import AsyncStorage from "@react-native-async-storage/async-storage";

export const set = async (key, value) => {
  // try {
    console.log("SAVING TO ASYNC STORAGE:", key, value);
    const serialize = JSON.stringify(value);
    return await AsyncStorage.setItem(key, serialize);
  // }
  // catch (e) {
  //   return {
  //       error: "FAILED TO SAVE TO ASYNC STORAGE"
  //   };
  // }
};


export const get = async (key) => {
  console.log("LOADING FROM ASYNC STORAGE:", key);
    try {
        const raw = await AsyncStorage.getItem(key);
          return JSON.parse(raw)
    } 
    catch (e) {
        return {
            error: "FAILED TO LOAD FROM ASYNC STORAGE" //SAVE
        };
    };
};


