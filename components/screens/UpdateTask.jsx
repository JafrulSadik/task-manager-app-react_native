import { Feather, MaterialIcons } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../../context/TaskProvider';

export default function UpdateTask({navigation,route}) {
  const [date, setDate] = useState(new Date());
  const id = route.params.id;
  const [dateNtime, setdateNtime] = useState({
    date: route?.params?.date,
    time: route?.params?.time
  })

  useEffect(() => {
    getDateAndTime()
  }, [date])
  
  // function to get date and time
  const getDateAndTime = () =>{
    let selectedDate = date.toLocaleDateString();
    let is24hr = date.getHours() < 12 ? "AM" : "PM";
    let time = date.toLocaleTimeString().slice(0,4);
    let seletedTime = time + " " + is24hr;

    setdateNtime({
      date : selectedDate,
      time : seletedTime
    })

  }

  
  // Local states
  const [taskName, settaskName] = useState(route.params.task_name);
  const [taskDetails, settaskDetails] = useState(route.params.task_details)
  const {UpdateTask} = useContext(TaskContext)


  // Date and time picker functions
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: false,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker =() => {
    showMode('time');
  };


  return (
    <ScrollView
      showsVerticalScrollIndicator = {false}
      style={styles.container}>
        <View style={styles.inputView}>
          <View style={styles.inputName}>
            <Text style={styles.inputNameText}>Task</Text>
          </View>
          
          <TextInput 
            style={styles.inputStyle}
            defaultValue={taskName}
            placeholder='Enter Name.'
            onChangeText={(text) => settaskName(text)}
            ></TextInput>
        </View>
        <View style={styles.inputView}>
          <View style={styles.inputName}>
            <Text style={styles.inputNameText}>Details</Text>
          </View>
          
          <TextInput 
            style={styles.inputStyle}
            placeholder='Enter details...'
            defaultValue={taskDetails}
            editable
            multiline
            numberOfLines={2}
            maxLength={100}
            onChangeText={(text) => settaskDetails(text)}
          ></TextInput>
        </View>

        <View style={styles.hr}></View>

        <View style={styles.dateTimeView}>
          <View style={styles.dateTimeFirst}>
            <MaterialIcons name="date-range" size={24} color="steelblue" />
            <Text style={styles.dateTimeSetText}>Set Date:</Text>
            <Text style={styles.dateTimeSelect}>{dateNtime?.date}</Text>
          </View>

          <View style={styles.dateTimeEnd}>
            <TouchableOpacity 
              style={styles.dateTimeSetBtn}
              onPress={showDatepicker}
              >
              <Text style={styles.dateTimeSetBtnText}>Set</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.hr}></View>

        <View style={styles.dateTimeView}>
          <View style={styles.dateTimeFirst}>
            <Feather name="clock" size={24} color="steelblue" />
            <Text style={styles.dateTimeSetText}>Set Time:</Text>
            <Text style={styles.dateTimeSelect}>{dateNtime?.time}</Text>
          </View>

          <View style={styles.dateTimeEnd}>
            <TouchableOpacity 
              style={styles.dateTimeSetBtn}
              onPress={showTimepicker} 
              >
              <Text style={styles.dateTimeSetBtnText}>Set</Text>
            </TouchableOpacity>
          </View>

        </View>

        <TouchableOpacity 
          style={styles.saveBtn}
          onPress={() => UpdateTask({navigation, id, taskName, taskDetails, date:dateNtime.date, time:dateNtime.time})}
          >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        flex: 1
        
    },
    inputView:{
      position: 'relative',
      marginVertical: 10
    },
    inputName:{
      position: 'absolute',
      zIndex: 10,
      top: -5,
      left: 15,
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 5
    },
    inputNameText:{
      fontSize: 15,
      fontWeight: '600',
      color: 'steelblue'
    },
    inputStyle:{
      borderBottomColor: '#dddedf',
      marginVertical: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 15,
      fontWeight: '600',
      color: '#555858',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'steelblue'
    },
    hr:{
      backgroundColor: '#C9C9C963',
      height: 1,
      width: '100%',
      alignSelf: 'center',
      marginVertical: 10
    },
    dateTimeView:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    dateTimeFirst:{
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1
    },
    dateTimeSetText:{
      color: 'steelblue',
      fontWeight: 'bold',
      fontSize: 15,
      marginHorizontal: 5
    },
    dateTimeSelect:{
      color: 'gray',
    },
    dateTimeEnd:{

    },
    dateTimeSetBtn:{
      marginHorizontal: 10,
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 5,
      backgroundColor: '#C9C9C963'
    },
    dateTimeSetBtnText:{
      fontWeight: 'bold',
      color: 'steelblue'
    },
    
    saveBtn:{
      backgroundColor: "steelblue",
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 10,
      marginVertical: 20,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 3,
    },
    saveText:{
      fontWeight: 'bold',
      color: 'white'
    }

})