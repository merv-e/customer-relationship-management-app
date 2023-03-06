import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Text, View} from "react-native"
import welcomeStyles from "./styles";

 const Welcome = () =>  {
    const styles = StyleSheet.create(welcomeStyles());
    const nav = useNavigation()

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}> 
                <Text>Welcome to Customer Manager App!</Text>
                <TouchableOpacity onPress={() => nav.navigate("List Regions")}>
                    <Text>Click to View The App</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
} 

export default Welcome