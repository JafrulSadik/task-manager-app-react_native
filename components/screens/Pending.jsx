import React, { useContext } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { TaskContext } from '../../context/TaskProvider'
import Card from '../common/Card'

export default function Pending({navigation}) {
  const {tasks} = useContext(TaskContext)

  const pendingTasks = tasks.filter(task => task?.pending === 1)
  return (
      <ScrollView 
        contentContainerStyle={styles.contentContainer}
        >
        {
          pendingTasks?.map(item =><Card key={item?.id} navigation={navigation} task={item}/>)
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