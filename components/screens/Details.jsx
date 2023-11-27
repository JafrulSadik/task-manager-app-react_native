import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Modal, PaperProvider, Portal } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TaskContext } from '../../context/TaskProvider';

export default function Details({navigation, route}) {

  const {task} = route.params;
  const {DeleteTask} = useContext(TaskContext)

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  
  return (
    <PaperProvider>
      <SafeAreaView>
        <Portal>
          <View style={styles.container}>

            <View style={styles.detailsBody}>
              <View style={styles.titleDiv}>
                <Text style={styles.taskTitle}>{task?.task_name}</Text>
              </View>
              <View style={styles.hr}></View>
              <View style={styles.detailsDiv}>
                <Text style={styles.dateTime}>No date and time selected!</Text>
                <Text style={styles.detailsTitle}>{task?.task_details}</Text>
              </View>
            </View>

            <TouchableOpacity 
                style={styles.deleteBtn}
                onPress={showModal}
                >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>

          </View>

        
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalStyle}>
            <View>
              <View style={styles.modalTop}>
              <MaterialCommunityIcons name="delete-circle-outline" size={40} color="red" />
                <Text style={{fontWeight: '400', color: 'red', fontSize: 20}}>Are you sure?</Text>
              </View>
              <View style={styles.hr1}></View>
              <View style={styles.modalBottom}>
                <TouchableOpacity 
                  style={styles.cancelAltBtn}
                  onPress={()=>hideModal()}
                  >
                  <Text style={{color: 'steelblue', fontWeight: '500'}}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.deleteAltBtn}
                  onPress={()=>DeleteTask({task, navigation})}
                  >
                  <Text style={{color: '#ED4E54FF', fontWeight: '500'}}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </Portal>
    </SafeAreaView>

    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 10
  },
  detailsBody: {
    padding: 10,
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  titleDiv:{
    marginHorizontal: 10,
    marginTop: 10
  },
  taskTitle:{
    fontSize: 32,
    fontWeight: 'bold',
  },
  hr:{
    backgroundColor: '#C9C9C963',
    height: 1,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10
  },
  hr1:{
    backgroundColor: '#C9C9C963',
    height: 1,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10
  },
  detailsDiv:{
    marginHorizontal: 10,
    gap: 10
  },
  detailsTitle:{
    fontSize: 24
  },
  dateTime:{
    color: 'gray'
  },
  deleteBtn:{
    backgroundColor: "#ED4E54FF",
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginVertical: 20,
    
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  deleteText:{
    fontWeight: 'bold',
    color: 'white'
  },

  modalStyle:{
    backgroundColor: 'white',
    width: "80%",
    marginBottom: '60%' ,
    alignSelf: 'center',
    borderRadius: 10,
  },
  modalTop:{
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  modalBottom:{
    flexDirection: 'row'
  },
  cancelAltBtn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'teal',
    width: '100%',
    borderBottomLeftRadius: 10
  },
  deleteAltBtn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    // backgroundColor: '#ED4E54FF',
    width: '100%',
    borderBottomRightRadius: 10
  }
})