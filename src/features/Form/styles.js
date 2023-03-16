import { StatusBar } from "react-native"

const newStyles = () => {
    // fontSizes should be made responsive.
    return {
        container: {
            flex: 1,
            // marginTop: StatusBar.currentHeight || 0,
            marginTop : 10,
            alignItems : "stretch",
            justifyContent: "flex-start", //ise yaramiyor.
            gap: 20, //temp solution.
        },
        text: {
            padding: 10,
            marginVertical: 8,
            marginHorizontal: 16,
            backgroundColor: "white",
            borderRadius: 10,
            borderWidth : 1,
            fontSize: 15,
        },
        button: {
            fontSize: 15,
            backgroundColor: "rgba(78, 116, 289, 1)",
            alignSelf: 'center',
            padding: 10,
            borderRadius: 5,
            color: "#F7F9F9",
            marginBottom : 10,
            width: 200,
            textAlign: "center",
          },
}}

export default newStyles
