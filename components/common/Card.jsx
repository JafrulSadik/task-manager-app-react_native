import { MaterialIcons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { TaskContext } from '../../context/TaskProvider';


export default function Card({navigation, task}) {

    const {CompletedTask} = useContext(TaskContext)

    const [checked, setChecked] = useState(false);


    const checkboxClicked = () =>{
        setChecked(!checked);
        CompletedTask(task?.id)
    }
  

    return (
        <View style={styles.cardBody}>
            {
                task?.pending ? 
                <View style={styles.checkbox}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => checkboxClicked()}
                        color= "steelblue"
                        uncheckedColor='steelblue'
                    />
                </View> : <View style={styles.completed}/>
            }

            <View style={styles.details}>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize:16, color:'steelblue'}}>{task?.task_name}</Text>
                </View>
                <View>
                    <Text style={{fontSize:12, color:'gray'}}>Today at 1:27 AM</Text>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.navigation}
                onPress={()=> navigation.navigate("Details")}

            > 
                <MaterialIcons name="navigate-next" size={24} color="steelblue" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBody: {
        width: '100%',
        flexDirection: 'row' ,
        backgroundColor: '#f8f8f8',
        borderRadius: 15,
        shadowColor: "#000",
        height: 85,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    checkbox:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    details:{
        flex:6,
        gap: 3,
        justifyContent: 'center'
    },
    navigation:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    completed:{
        marginLeft: 20
    }

})