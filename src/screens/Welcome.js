import { SafeAreaView, ScrollView, TouchableOpacity} from "react-native"
import { StyleSheet, Text, View } from "react-native-web" //View

const Welcome = () => {
    const onPress = () => {
        console.log("Pressed!");
    };

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}> 
            {/* scrollview'in icine view alinabilir mi? */}
                <Text>Welcome to Customer Manager App!</Text>
                <TouchableOpacity onPress={onPress}>
                    <Text>Click to View The App</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Welcome
