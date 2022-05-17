import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

function Home({ navigation }) {
  const [food, setFood] = useState("");
  const[enter,setenter] = useState("");
  const enterHandle=()=>{
    navigation.navigate("Results", {
      food:enter});
  };
  const handleSearch = () => {
    if (food.length > 0) {
      navigation.navigate("Results", {
        food: food,
      });
      setFood("");
    } else {
      Alert.alert("Search input empty!");
    }
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "#fafad2", justifyContent: "center" }}
    >
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/food.png")}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Yumm Recipes</Text>
        <Text style={styles.textSubheading}>
          Search Recipes For Your Favorite Food
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={food}
          placeholder="Enter the food name "
          style={styles.input}
          onChangeText={(text) => {
            setFood(text);
          }}
        ></TextInput>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnTextContainer}
          onPress={handleSearch}
        >
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{fontSize:22,margin:20,color:'#90ee90',fontWeight:'bold'}}>Suggested Recipes</Text>


        <TouchableOpacity style={styles.sugge} onPress={()=>{
            setenter("chocolate")
            enterHandle()
          }} >
        
          <Text style={styles.sugget}>Choclate Recipes</Text>
        </TouchableOpacity>

   

        <TouchableOpacity style={styles.sugge} onPress={()=>{
           setenter("Egg"),
              enterHandle()
          }}>
        
          <Text style={styles.sugget}>Egg Recipes</Text>
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.sugge} onPress={()=>{
           setenter("Chicken Recipes"),
              enterHandle()
          }}>
        
          <Text style={styles.sugget}>Chicken Recipes</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.sugge} onPress={()=>{
           setenter("Biriyani"),
              enterHandle()
          }}>
        
          <Text style={styles.sugget}>Biriyani Recipes</Text>
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    marginTop: 50,
    height: 150,
    width: 150,
    margin: 30,
  },
  textContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  textHeading: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#90ee90",
  },
  textSubheading: {
    marginTop: 5,
    color: "#515A5A",
  },
  inputContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  input: {
    maxWidth: 500,
    width: "80%",
    borderColor: "#66cdaa",
    borderBottomLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    borderTopLeftRadius:30,
    borderWidth: 3,
    borderRadius: 10,
    height: 50,
    paddingLeft: 20,
    color: "#515A5A",
  },
  btnContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  btnTextContainer: {
    height:75,
    margin:10,
    borderRadius:15,
    backgroundColor: "#8fbc8f",
    width: "50%",
    height: 50,
    justifyContent: "center",
    borderTopRightRadius:20,
    borderBottomLeftRadius:20,
    borderRadius:100,
    marginBottom:50,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  sugge:{
    marginLeft:100,
    height:75,
    margin:10,
    borderRadius:15,
    backgroundColor: "#8fbc8f",
    width: "50%",
    height: 50,
    justifyContent: "center",
    borderTopRightRadius:30,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    borderTopLeftRadius:30,
    borderRadius:100,
  },

  sugget:{
   textAlign:'center',
   fontSize:20,
   color:'white',

  }
});

export default Home;