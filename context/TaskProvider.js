import * as SQLite from 'expo-sqlite';
import React, { createContext, useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';



export const TaskContext = createContext();
const db = SQLite.openDatabase("example.db");

export const TaskProvider = ({ children }) => {


  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState([]);

  // Default create db if not exist
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task_name TEXT, task_details TEXT, pending BOOLEAN)')
    })

    db.transaction(tx =>{
      tx.executeSql("SELECT * FROM tasks", null,
        (txObject, resultSet) => setTasks(resultSet.rows._array)
      )
    })
  }, [])

  // Fetch Task for the first time
  const fetchTask = () => {
    try {
      db.transaction(tx =>{
        tx.executeSql("SELECT * FROM tasks", null,
          (txObject, resultSet) => {
            setTasks(resultSet.rows._array)
          }
        )
      })
    } catch (error) {
      console.log(error);
    }
    
  }

  
  const CreateTask = (props) => {
    const {taskName, taskDetails, navigation} = props;


    // console.log(props);
    try{
      db.transaction( (tx) => {
        tx.executeSql(`INSERT INTO tasks(task_name,task_details, pending) VALUES (?, ?, ?)`, [taskName, taskDetails, true])
      })

      fetchTask()

      ToastAndroid.show('Task Created Successfully!', ToastAndroid.SHORT);

      navigation.goBack()

    } catch(err){
      console.log(err);
    }
  };

  // Deleted task function
  const DeleteTask = (props) =>{
    const {task, navigation} = props;
    try {
      db.transaction(tx =>{
        tx.executeSql( `DELETE FROM tasks WHERE id=${task?.id}`)
      })

      ToastAndroid.show('Task Deleted Successfully!', ToastAndroid.SHORT);
      fetchTask();
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }

  // Completed task function
  const CompletedTask = (id) =>{
    try {
      db.transaction(tx =>{
        tx.executeSql( `UPDATE tasks SET pending = ${0} WHERE id=${id}`)
      })

      fetchTask()
    } catch (error) {
      console.log(error);
    }
  }



  values ={
    tasks,
    CreateTask,
    DeleteTask,
    CompletedTask
  }

  // You can add more functions for deleting tasks, updating, etc.
  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
