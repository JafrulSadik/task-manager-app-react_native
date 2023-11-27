import React, { useContext } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { TaskContext } from '../../context/TaskProvider'
import Card from '../common/Card'

export default function Completed({navigation}) {
  const {tasks} = useContext(TaskContext)

  const completedTasks = tasks.filter(task => task?.pending === 0)

  return (
      <ScrollView 
      contentContainerStyle={styles.contentContainer}
        >
        {
          completedTasks?.map(task =><Card key={task?.id} navigation={navigation} task={task}/>)
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