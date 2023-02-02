import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList ,TouchableOpacity,StyleSheet ,Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
    

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
  const [items, setItems] = React.useState([
    { name: 'Vrai & Faux', code: '#1abc9c',uri: 'https://picsum.photos/200/300'},
    { name: 'Q_C_M', code: '#2ecc71' ,uri: 'https://picsum.photos/200/300'},
    { name: 'dali', code: '#1abc9c',uri: 'https://picsum.photos/200/300'},
    { name: 'Ahmed', code: '#2ecc71' ,uri: 'https://picsum.photos/200/300'},
   
  ]);
  return (
    <View style={{ backgroundColor,flex: 1 }}>

        <View style={styles.containerH}>
        
        </View>

        <View style={{backgroundColor,flex:1}} >
        
            <View backgroundColor style={styles.containerT}>
              <View style={styles.containerNav}>
                <Text style={{ marginHorizontal: 10,fontSize: 20 ,fontWeight: 'bold',opacity :10 , borderBottomWidth: 2}}>All Types</Text> 
                <Text style={{ marginHorizontal: 10,fontSize: 20 ,fontWeight: 'bold'}}>Questions </Text>
                <Text style={{ marginHorizontal: 10,fontSize: 20 ,fontWeight: 'bold'}}>Content </Text>
              </View>
              <View style={styles.containerG}>
                <FlatGrid
                  itemDimension={150} 
                    data={items}
                    style={styles.gridView}
                    staticDimension={300}
                    //fixed
                    spacing={10}
                    renderItem={({ item }) => (
                      <TouchableOpacity>
                        <View style={[styles.itemContainer, { backgroundColor: 'transparent' , height: 250 ,borderStyle: 'dotted'}]}>
                          <View>
                            <View>
                              <Text style={styles.itemName}>  {item.name}</Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                                )}
      showsVerticalScrollIndicator={false}
    />
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
  containerG:{
    
    flex: 1,
  },
  gridView: {
    flex: 1,
    marginTop: 10,
    margin : 5
  },
  itemContainer: {
    borderRadius: 45,
    borderBottomColor : 'black',
    borderWidth : 3,
    padding: 10,
    height: 100,
    width :350,
    
  },
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
        opacity : 1,
        margin:10,
        borderWidth : 2,
        backgroundColor: 'rgba(255, 0, 0, 0.1)'
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