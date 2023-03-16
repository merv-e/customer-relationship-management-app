const customerStyles = () => {
    // fontSizes should be made responsive.
    return {
        container: {
            flex: 1,
            marginTop : 10,
            // alignItems : "center",
            gap: 10, //temp solution.
        },
        header: {
            fontSize: 15,
            padding: 10,
            textAlign: "center",
        },
        button: {
            fontSize: 15,
            backgroundColor: "rgba(78, 116, 289, 1)",
            alignSelf: "center",
            padding: 10,
            borderRadius: 5,
            color: "#F7F9F9",
            marginBottom : 10,
            width: 200,
            textAlign: "center",
        },
        customerContainer: {
            flex: 1,
            alignItems : "center",
            backgroundColor: "#17183B",
            marginVertical: 10,
            padding: 10,
            fontSize: 20,
        },
        customerContainerText: {
            color: "#F7F9F9",
        }
}}

export default customerStyles