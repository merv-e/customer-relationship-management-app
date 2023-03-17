import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Text, View} from "react-native"
// import Btn from "../../components/Btn";
import * as actions from "../../features/customer/reducer"
import { useDispatch } from "react-redux";

 const Welcome = () =>  {
  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#E0D0C1',
      // alignItems: 'center',
      // justifyContent: 'center',
      textAlign: "center",
      padding : 20,
      gap: 20,
    },
    header: {
      fontSize: 20,
      color: "#846C5B",
      fontWeight: 500,
    },
    btn: {
      fontSize: 15,
      alignSelf: 'center',
      backgroundColor:'rgba(78, 116, 289, 1)',
      padding: 10,
      borderRadius: 5,
      width: 200,
      color: '#F7F9F9',
    }
  });

    const {navigate} = useNavigation()

    // NOTE: because View component is inside SafeAreaView and also ScrollView, justifyContent and alignItems being centered is not working. Check it out !

  return (
    <SafeAreaView> 
      <ScrollView>
        <View style={styles.container}> 
          <Text style={styles.header}>Welcome to Customer Manager App!</Text>
          
          {/* List regions */}
          <TouchableOpacity 
           onPress={() => navigate("List Regions")}>
              <Text style={styles.btn}>Click to View The App</Text>
          </TouchableOpacity>

        {/* show notifications */}
          <TouchableOpacity 
           onPress={() => navigate("Customer Notifications")}>
              <Text style={styles.btn}>Click to see the notifications</Text>
          </TouchableOpacity>

        {/* clear storage */}
          <TouchableOpacity 
           onPress={() => dispatch(actions.clearStorage())}>
              <Text style={styles.btn}>Clear Storage</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
} 

export default Welcome