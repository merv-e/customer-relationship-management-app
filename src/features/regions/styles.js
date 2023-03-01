import { StatusBar } from "react-native"

const regionStyles = () => {
    return {
        container: {
            flex: 2,
            marginTop: StatusBar.currentHeight || 0,
        },
        item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        title: {
            fontSize: 20,
            // textAlign: "center",
        },
        header : {
            fontSize: 25,
            fontWeight: 600,
            textAlign: "center",
        }
}}

export default regionStyles
