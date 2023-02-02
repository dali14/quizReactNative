import React, { useState } from 'react';
import { View, Text, TextInput, Button,FlatList ,TouchableOpacity,StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Provider as PaperProvider } from 'react-native-paper';



    

const AddCapsule = () => {
    
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

                <Picker
                  selectedValue={backgroundColor}
                  onValueChange={(itemValue) => setBackgroundColor(itemValue)}
              >
                  <Picker.Item label="Theme" value="white"/>
                  <Picker.Item label="Red" value="red" />
                  <Picker.Item label="Green" value="green" />
                  <Picker.Item label="Blue" value="blue" />
                </Picker>
            
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Title"
                />
            
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Description.."
                />

            </View>    
        </View>



          <View style={styles.containerb}>

                <Button style={styles.button} title="  " onPress={handleChooseImage} />
                <Text> </Text>
                <Button style={styles.button} title="  " onPress={handleUploadImage} />
                <Text> </Text>
                <TouchableOpacity style={styles.button}>
                <Text>+</Text>
                </TouchableOpacity>

                <View style={styles.containerBN} > 
                    <TouchableOpacity style={styles.buttonN}>
                        <Text> {'<'} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonN}>
                        <Text> {'>'} </Text>
                    </TouchableOpacity>
                </View>
                
                

              {backgroundImage && (
                  <Image
                      source={{ uri: backgroundImage }}
                      style={{ flex: 1, resizeMode: 'cover' }}
                  />
              )}

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
      containerH :{
        flex : 0.05,
        flexDirection:'row-reverse',
      },

      button: {
        backgroundColor: '#FFFBEB',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        elevation: 5,
      },
      buttonN: {
        backgroundColor: '#FFFBEB',
        padding: 10,
        borderRadius: 20,
        margin : 10,
        justifyContent: 'flex-start'
        
        
      },
      containerBN :{
        flexDirection:'row',
      }

})

export default AddCapsule;