import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import New from "../../features/new/index.js"

// const onSubmit = (form) => {
//   console.log("Fake submit!" ); // , form.values
// }; 

const CreateCustomer = () => (
    <SafeAreaView>
      <ScrollView>
        <New />
      </ScrollView>
    </SafeAreaView>
  )

export default CreateCustomer
