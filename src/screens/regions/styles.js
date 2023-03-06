import { StatusBar } from "react-native"

const regionStyles = () => {
    return {
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            alignItems : "stretch",
            justifyContent: "space-evenly", //ise yaramiyor.
            gap: 50, //temporary solution.
        },
        item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            backgroundColor: "#1E6AE1",
            borderRadius: 10,
            borderWidth : 2,
        },
        title: {
            fontSize: 20,
            // textAlign: "center",
        },
        header : {
            fontSize: 25,
            fontWeight: 600,
            textAlign: "center",
        },
        button: {
            alignSelf: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            borderRadius: 10,
            borderWidth : 2,
            backgroundColor: '#1ECBE1',
            marginBottom : 10,
          },
}}

export default regionStyles
