import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import Regions from "../../features/regions/index"

const ListRegions = () => (
  <SafeAreaView>
    <ScrollView>
      <Regions />
    </ScrollView>
  </SafeAreaView>
)

export default ListRegions