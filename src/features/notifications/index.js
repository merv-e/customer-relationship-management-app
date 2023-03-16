import *as Notifications from "expo-notifications";
import React, { useEffect, useState, useRef } from "react"; 
import { Button, Keyboard, Text, View, Platform } from "react-native";
import * as Device from "expo-device";
import { useSelector } from "react-redux";

Notifications.setNotificationHandler({
    handleNotification: async () => ({ 
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    }),
  });

    // const onSubmit = (customers) => {

     
    
    //   Keyboard.dismiss()
    // };
    
    async function scheduleNotification(CustomerToBeContacted) {
      await  Notifications.scheduleNotificationAsync({ 
        content: { 
          title: `Schedule a call with ${CustomerToBeContacted}`,
          body: "Open the app to read more about it!",
          priority: Notifications.AndroidNotificationPriority.MAX,
          color: "blue",
        },
        trigger: {
          seconds: 5,
        },
      })
    };

    const askNotification = async () => {
      // Notification permissions
      const { status } = await Notifications.requestPermissionsAsync();
      if (Device.isDevice && status === "granted") {
        console.log("Notification permissions granted.");
      }
    };

    const handleNotification = () => {
      console.warn("Your notification ran, but will not show up in the app!");
    };

  
const CustomerNotifications = () => {

  let customers;
  
  if (customers === []) {
    customers = [{
      firstName: "Merve",
      lastName: "Ustun",
      isActive: "yes",
      region: "Europe" 
    }]
  }
  else customers = useSelector((state) => state.customer.list.customers)

  useEffect(() => {
    askNotification()
     
    const listener = Notifications.addNotificationReceivedListener(handleNotification);
    
    return () => listener.remove()
    }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 30,
        marginTop: 20,
      }}>
        <Text>Schedule a call with the customer</Text>
      <Button
        title="Schedule"
        onPress={ async (customers) => {
          await scheduleNotification();
        }}
      />
    </View>
  );
};


export default CustomerNotifications