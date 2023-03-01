import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Regions from "../screens/regions/ListRegions" 
import Welcome from "../screens/Welcome/index";
import Customers from "../screens/customers/ListCustomers"

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
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
