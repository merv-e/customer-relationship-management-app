import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Regions from "../screens/regions/ListRegions" 
import Welcome from "../screens/Welcome/index";
import Customers from "../screens/customers/ListCustomers"
import New from "../screens/new/CreateCustomer"
import Edit from "../screens/Edit";

const Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome"> 
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
             <Stack.Screen
                name="Regions"
                component={Regions}
            />
           <Stack.Screen
                name="Customers"
                component={Customers}
            />
           <Stack.Screen
                name="Add Customer"
                component={New}
            />

           <Stack.Screen
                name="Edit Customer Info"
                component={Edit}
            />
           
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

