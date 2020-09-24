import  React from 'react'
import {Text, View, TextInput, StyleSheet, Image } from 'react-native'
import cat from './assets/cat.jpg'
import { EvilIcons } from '@expo/vector-icons';

function App () {

return <View style={styles.container}>
 <View style={styles.box}>
 <Image source={cat} style={styles.image} />
    <View style={styles.icons}>
      <EvilIcons name="camera" size={30} color="white" />
      </View>
 </View>

 <View style={styles.detailContainer} >
   <Text style={[styles.label,styles.color]}  >School</Text>
   <Text style={[styles.label,styles.info]}>The Lawrenceville School</Text>

 </View>

 <View style={styles.detailContainer} >
   <Text style={styles.label, styles.color} >Email</Text>
   <Text style={[styles.label, styles.info]}>Mary@gmail.com</Text>
 </View>
 <View style={styles.detailContainer} >
   <Text style={styles.label} >NickName</Text>
   <Text style={[styles.label,styles.info]}>Thool</Text>
 </View> 

 <View style={styles.detailContainer} >
   <Text style={styles.label} >NickName</Text>
   <Text style={[styles.label,styles.info]}>Thool</Text>
 </View>


 <View style={styles.detailContainer} >
   <Text style={styles.label} >Emergency Contact </Text>
   <Text style={[styles.label,styles.info]}>+233 000-000</Text>
 </View>

     <View style={styles.Profile}>
       <Text  style={styles.update}>
         Update Profile
       </Text>
       </View>

</View>
   
}

const styles = StyleSheet.create({
 container :{
  marginHorizontal:50
 
  },

  image: {
    marginTop:40,
    height:150,
    width:150,
    marginBottom:20,
    alignSelf:"center",
    borderRadius:75,
    
    

  },

  detailContainer: {
   marginBottom:10,
  },

  label: {
    marginBottom:10,
    fontSize:10,
    color:"#009cf5"
  },

  info: {
   marginBottom:20,
   fontSize:15,
   color:"black"
  },

  Profile:{
    backgroundColor:"#009cf5",
alignItems:"center",
height:45,
borderRadius:25,
justifyContent:"center",
marginRight:50,
marginLeft:50,


  },

  color:{
    color:"grey",
    fontSize:10,

  },
  update:{
    color:"white",

  },
  
icons:{
  marginTop:90,
  backgroundColor:"#009cf5",
  height:40,
  width:40,
  borderRadius:100,
  marginLeft:-20,
  justifyContent:"center",
  alignItems:"center"

}
,

box:{
  flexDirection:"row", 
  justifyContent:"center", 
  alignItems:"center",
  borderRadius:75,
 
}

})
export default App