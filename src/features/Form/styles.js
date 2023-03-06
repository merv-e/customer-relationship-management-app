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
        header : {
            fontSize: 25,
            textAlign: "center",
        },
        button: {
            fontSize: 15,
            alignSelf: 'center',
            padding: 10,
            borderRadius: 10,
            borderWidth : 1,
            // backgroundColor: 'grey',
            marginBottom : 10,
          },
}}

export default newStyles
