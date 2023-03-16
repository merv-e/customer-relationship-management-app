const regionStyles = () => {
    return {
        container: {
            flex: 1,
            marginTop: 10,
            alignItems : "stretch",
            justifyContent: "space-around", //ise yaramiyor.
            gap: 50, //temporary solution.
        },
        header : {
            fontSize: 25,
            fontWeight: 500,
            textAlign: "center",
        },
        button: {
            alignSelf: "center",
            backgroundColor: "rgba(78, 116, 289, 1)",
            padding: 10,
            borderRadius: 5,
            color: "#F7F9F9",
            marginBottom : 10,
            width: 200,
            textAlign: "center",
          },
}}

export default regionStyles
