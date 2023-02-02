import React from 'react';
import { StyleSheet, View, Text, ScrollView ,TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { FlatList ,Image,SafeAreaView} from 'react-native';
import * as Theme from '../theme/Theme';

export default function CapsuleHome() {
    const data = [
        { key: '1'},
        { key: '2'},
        { key: '3'},
        { key: '4'},
        { key: '5'},
      ];
      
      const Item = ({ title }) => (
        <View style={{ width: 100, height: 100, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
          <Text>{title}</Text>
        </View>
      );
  const [items, setItems] = React.useState([
    { name: 'dali', code: '#1abc9c',uri: 'https://picsum.photos/200/300'},
    { name: 'Ahmed', code: '#2ecc71' ,uri: 'https://picsum.photos/200/300'},
    { name: 'samir', code: '#3498db' ,uri: 'https://picsum.photos/200/300'},
    { name: 'hammadi', code: '#9b59b6' ,uri: 'https://picsum.photos/200/300'},
    { name: 'WET ASPHALT', code: '#34495e' ,uri: 'https://picsum.photos/200/300' },
    { name: 'GREEN SEA', code: '#16a085' ,uri: 'https://picsum.photos/200/300'},
    { name: 'NEPHRITIS', code: '#27ae60'  ,uri: 'https://picsum.photos/200/300'},
    { name: 'BELIZE HOLE', code: '#2980b9' ,uri: 'https://picsum.photos/200/300'},
    { name: 'WISTERIA', code: '#8e44ad' ,uri: 'https://picsum.photos/200/300'},
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' ,uri: 'https://picsum.photos/200/300'},
    { name: 'SUN FLOWER', code: '#f1c40f' ,uri: 'https://picsum.photos/200/300'},
    { name: 'CARROT', code: '#e67e22' ,uri: 'https://picsum.photos/200/300'},
    { name: 'ALIZARIN', code: '#e74c3c',uri: 'https://picsum.photos/200/300' }
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.primaryColors.white }} >
      <View style={styles.container}>
      <View style={styles.containerF}>
     
     <FlatList
      style={styles.flatView}
      data={data}
      spacing={10}
      renderItem={({ item }) => ( 
    <View style={[styles.itemContainerF]}>
        
        <Item title={item.key} />

      </View>
  )}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
    />
    </View>
    
    <View style={styles.containerG}>
    <FlatGrid
      itemDimension={150}
      data={items}
      style={styles.gridView}
       //staticDimension={300}
       //fixed
       spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code, height: 200}]}>
            {/* <Image source={require('../assets/images/cap.png')} style={styles.backgroundImage} /> */}
            <View style={styles.containerP}>
              <Image source={{ uri: item.uri }} style={styles.image} />
              <View>
               <Text style={styles.itemName}>  {item.name}</Text>
               <Text style={styles.itemCode}>   1 h</Text>
              </View>
              
            </View>
              
          
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
    </View>
    <View style={styles.containerb}>
    <TouchableOpacity
                
                style={{
                    marginTop: 10, width: '100%', backgroundColor: '#035397', padding: 20, borderRadius: 5
                }}>
                    <Text style={{fontSize: 15, color:'white', textAlign: 'center'}}>Add Capsule </Text>
                </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({

  container: {
        flex: 1,
        padding: 10,
    
      },

  gridView: {
    flex: 1,
    marginTop: 10,
    margin : 5
  },

  flatView: {
    marginTop: 10,
    flex: 5,
    borderRadius: 5,
    
  },
  containerF:{
    flex: 0.2,
  },
  containerG:{
    flex: 1,
  },
  containerb :{
    flex : 0.15
  },

  itemContainer: {
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  containerP : {
    
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    
  },
  itemContainerF :{
    flexDirection: 'row',
    padding: 10,
    
    
    
  },
  itemName: {
    fontSize: 16,
    color: '#20262E',
    fontWeight: '800',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 10,
    color: '#FFFBEB',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    borderRadius : 80
    
  },
  backgroundImage: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: null,
    height: null,
  },
  
});

