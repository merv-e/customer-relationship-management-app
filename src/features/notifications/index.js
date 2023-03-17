import * as Notifications from "expo-notifications";
import React, { useEffect} from "react"; 
import { Button, Keyboard, Text, View, Platform } from "react-native";
import * as Device from "expo-device";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";

const onSubmit = (customers) => {
   
  const chooseRandomCustomer = customers[Math.floor(Math.random() * customers.length)];
  
  console.log("Schedule button is triggered!");

  console.log("chooseRandomCustomer:", chooseRandomCustomer);
  
  const CustomerToBeContacted = chooseRandomCustomer.firstName + " " + chooseRandomCustomer.lastName;
  
      console.log("CustomerToBeContacted:", CustomerToBeContacted); 
     
      // async function scheduleNotification(CustomerToBeContacted) {
      //     await 

        Keyboard.dismiss()
         Notifications.scheduleNotificationAsync({ 
          content: { 
            title: `Schedule a call with ${CustomerToBeContacted}`,
            body: "Open the app to read more about it!",
            priority: Notifications.AndroidNotificationPriority.HIGH,
            color: "blue",
          },
          trigger: {
            seconds: 5,
          },
        })
      };  

    // };

  Notifications.setNotificationHandler({
    handleNotification: async () => ({ 
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    }),
  });
    
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
  // const {params} = useRoute();
  // const customers = params.customers; 
  const customers = useSelector((state) => state.customer.list.customers)
  console.log(customers);

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
      {
        (customers && customers.length > 0) 
        ? (
          <>
          <Text>Schedule a call with the customer</Text>
      <Button 
        title="Schedule"
        onPress={() => onSubmit(customers)}
      />
      </>)
      : ( 
        <>
        <Text>There are no registered customers in the app</Text>
        </>
      )
      }
    </View>
  );
};


export default CustomerNotifications