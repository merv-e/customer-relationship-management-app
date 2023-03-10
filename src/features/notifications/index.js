import { Constants } from "expo-constants";
import *as Notifications from "expo-notifications";
import React, { useEffect } from "react";
import { Button, Keyboard, Text, View } from "react-native";
// import *as Device from "expo-notifications";

const customerName = [
  "X",
  "Y",
  "Z",
  "A",
  "B",
  "C",
  "D",
]; 

const onSubmit = (seconds) => {
Keyboard.dismiss(); 

const schedulingOptions = {
  content: {
      title: `Do not forget to contact ${customerName[Math.floor(Math.random()*customerName.length)]}`,
      body: "Open the app to find out the customer you'll contact today.",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "black",
  },
  trigger: {
      seconds: seconds,
  }
}  

Notifications.scheduleNotificationsAsync(
  schedulingOptions,
)
};

const handleNotification = () => {
  console.warn('Your notification ran, but won`t show up in the app!')
}


const askNotification = async () => {
  const {status} = await Notifications.requestPermissionsAsync()
      if(Constants.isDevice && status === "granted")
      console.log("Notification permissions granted.");
};

const Notifications = () => {
  useEffect(()=> {
      askNotification();

      const listener = Notifications.addNotificationReceivedListener(handleNotification)
      return () => listener.remove() 
  }, []);

  // notification to be sent five sec after the app is closed.
  return (
    <View>
        <Text>Press the button to .... </Text>
        <Button 
            onPress={() => onSubmit(10)} 
            title="Whatever"
        />
    </View>
  )
};

export default Notifications