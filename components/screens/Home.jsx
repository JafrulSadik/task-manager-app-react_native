import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Completed from './Completed';
import Pending from './Pending';

export default function Home({navigation}) {

  const [taskStatus, setTaskStatus] = useState(true);

  return (
    <View style={styles.container}>

        <View style={styles.taskStatus}>

            <TouchableOpacity
                onPress={()=> setTaskStatus(true)}
                 style={[styles.taskStatusOption, taskStatus ? styles.selected : styles.notSelected]}>
                <Text style={[styles.taskStatusText, taskStatus ? styles.selectedText : styles.notSelected]}>Pending</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={()=> setTaskStatus(false)}
                style={[styles.taskStatusOption, !taskStatus ? styles.selected : styles.notSelected]}>
                <Text style={[styles.taskStatusText, !taskStatus ? styles.selectedText : styles.notSelected]}>Completed</Text>
            </TouchableOpacity>

        </View>
        
        {taskStatus ? <Pending navigation={navigation}/> : <Completed navigation={navigation}/>}

        <TouchableOpacity 
            style={styles.createButton}
            onPress={()=> navigation.navigate("CreateTask")}

        >
            <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 10,
        position: 'relative'
    },
    taskStatus:{
        borderWidth: 1,
        borderColor: 'steelblue',
        flexDirection: 'row',
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 20
    },
    taskStatusOption:{
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    taskStatusText:{
        fontWeight: 'bold',
        fontSize: 14
    },
    selected:{
        backgroundColor: 'steelblue',
        borderRadius: 4
    },
    selectedText:{
        color: "white",
    },
    notSelected:{
        color: 'steelblue'
    },
    createButton:{
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: 'steelblue',
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor:'#000000',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0,
        shadowRadius: 44,
        elevation: 6,
        
    }
    
    
})