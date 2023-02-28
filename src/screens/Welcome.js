import { SafeAreaView, ScrollView, TouchableOpacity} from "react-native"
import { Text,  } from "react-native-web" //View

const Welcome = () => {
    const onPress = () => {
        console.log("Pressed!");
    };

  return (
    <SafeAreaView>
        <ScrollView>
            <Text>Welcome to my app!</Text>
            <TouchableOpacity onPress={onPress}>
                <Text>Click to View</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Welcome
