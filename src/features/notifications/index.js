import *as Notifications from "expo-notifications";
import React, { useEffect, useState, useRef } from "react"; 
import { Button, Keyboard, Text, View, Platform } from "react-native";
import * as Device from "expo-device";

// const onSubmit = (seconds) => { 
// Keyboard.dismiss() 

//    content: {
  //       title: `Do not forget to contact ${customerName[Math.floor(Math.random()*customerName.length)]}`,
  //       body: "Open the app to find out the customer you'll contact today.",
  //       sound: true,
  //       priority: Notifications.AndroidNotificationPriority.HIGH,
  //       color: "black",
  //   },
  //   trigger: {
    //       seconds: seconds,
    //   }
    // })


    // const handleNotification = () => {
    //   console.warn('Your notification ran, but won`t show up in the app!')
    // }
    
    
    // const askNotification = async () => {
    //   const {status} = await Notifications.requestPermissionsAsync()
    //       if(Device.isDevice && status === "granted")
    //       console.log("Notification permissions granted.");
    // };
    // };
  
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });


const CustomerNotifications = () => {
  
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync()
     .then(token =>
       setExpoPushToken(token)
      );

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
};


async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      body: 'You need to have a call with ${customer} ',
      title: `Schedule a call`,
      data: { data: 'goes here' },
    },
    trigger: { seconds: 5 },
  });
};

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') { 
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
  //   if (finalStatus !== 'granted') {
  //     alert('Failed to get push token for push notification!');
  //     return;
  //   }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  // } else {
  //   alert('Must use physical device for Push Notifications');
  }

  return token;
};

export default CustomerNotifications