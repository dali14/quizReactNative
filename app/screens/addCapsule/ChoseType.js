import React, { useState } from 'react';
import { View, Text, TextInput, Button,FlatList ,TouchableOpacity,StyleSheet} from 'react-native';


    

const ChoseType = () => {
    
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#EEEEE');
  const [backgroundImage, setBackgroundImage] = useState(null);
  const handleChooseImage = () => {
    // Code to open file picker and select an image
  };

  const handleUploadImage = () => {
    // Code to upload the selected image to the server
  };
    
  return (
    <View style={{ backgroundColor,flex: 1 }}>

        <View style={styles.containerH}>
        
        </View>

        <View style={{backgroundColor,flex:1}} >
        
            <View backgroundColor style={styles.containerT}>
              <View style={styles.containerNav}>
              <Text style={{ marginHorizontal: 10,fontSize: 20 ,fontWeight: 'bold',opacity :10,borderBottomWidth: 2}}>All Types</Text> 
              <Text style={{ marginHorizontal: 10,fontSize: 20}}>Questions </Text>
              <Text style={{ marginHorizontal: 10,fontSize: 20}}>Content </Text>
              </View>
            </View>    
        </View>



          <View style={styles.containerb}>

                <TouchableOpacity style={styles.buttonH}>
                <Text> </Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity style={styles.buttonT}>
                <Text> </Text>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity style={styles.buttonAdd}>
                <Text>+</Text>
                </TouchableOpacity>
          </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
    containerb :{
        flex : 0.10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
         
      },
      containerT:{
        flex: 1,
        borderRadius:50,
        backgroundColor : '#F8CBA6',
        opacity : 0.4,
        margin:10
      },
      containerNav :{
        flexDirection:'row',
        alignSelf: 'center',
        marginTop :10 ,
      },
      containerH :{
        flex : 0.05,
        flexDirection:'row-reverse',
      },
      buttonAdd :{
        backgroundColor: '#A8D1D1',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        elevation: 5,
        marginHorizontal: 10,
      },
      header: {
        backgroundColor: 'lightgray',
      },
      headerTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
      },
      buttonH: {
        backgroundColor: '#FFFBEB',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        elevation: 5,
        width: 28,
        height: 40,
        marginHorizontal: 10,
      },
      buttonT :{
        backgroundColor: '#2C74B3',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        elevation: 15,
        width: 30,
        height:45,
        
        

      },
      containerBN :{
        flexDirection:'row',
      }

})

export default ChoseType;