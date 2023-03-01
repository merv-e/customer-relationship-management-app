import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import Customers from "../../features/customers/index"

const ListCustomers = () => (  //customers by region
  <SafeAreaView>
    <ScrollView>
      <Customers />
    </ScrollView>
  </SafeAreaView>
)

export default ListCustomers