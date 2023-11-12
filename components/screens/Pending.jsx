import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Card from '../common/Card'

export default function Pending({navigation}) {
  const items = [1,2,,4,5]
  return (
      <ScrollView 
      contentContainerStyle={styles.contentContainer}
        >

        {
          items.map(item =><Card key={item} navigation={navigation}/>)
        } 
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  body:{
    marginVertical: 10,
    gap: 10,
  },
  contentContainer:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    rowGap: 10
  }
})