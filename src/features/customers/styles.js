const customerStyles = () => {
    return {
        container: {
            flex: 1,
            marginTop : 10,
            gap: 10, //temp solution.
            justifyContent: "flex-start",
            // alignItems: "flex-start", 
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
            marginBottom : 20,
            width: 200,
            textAlign: "center",
        },
        customerContainer: {
            // flex: 1,
            alignItems : "center",
            backgroundColor: "#17183B",
            marginVertical: 10,
            padding: 10,
            fontSize: 20,
        },
        customerContainerText: {
            color: "#F7F9F9",
        },
        noCustomer : { 
            textAlign: 'center',
            fontSize: 15,
        }
}}

export default customerStyles