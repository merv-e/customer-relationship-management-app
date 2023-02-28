import { SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Text, View} from "react-native"
import welcomeStyles from "./styles";

 const Welcome = () =>  {
    const onPress = () => {
        console.log("Pressed!");
    };

    const styles = StyleSheet.create(welcomeStyles());

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}> 
                <Text>Welcome to Customer Manager App!</Text>
                <TouchableOpacity onPress={onPress}>
                    <Text>Click to View The App</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}




export default Welcome