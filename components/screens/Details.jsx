import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TaskContext } from '../../context/TaskProvider'

export default function Details() {

  const [task, settask] = useState({})

  const {SingleTask} = useContext(TaskContext)

  useEffect(() => {
    const data = SingleTask(5);
    console.log("not ok",data);
    settask(data);
  }, [])
  
  return (
    <View>
      <Text>{console.log(task)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})