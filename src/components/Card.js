import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import COLORS from '../consts/colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import plants from '../consts/plants';

const width = Dimensions.get("screen").width/2-30;

const Card = ({plant, navigation}) => {

    
    return(
      <TouchableOpacity onPress={()=> navigation.navigate("DetailScreen", plant)}>
          <View style = {styles.card}>
        <View style = {{alignItems: "flex-end"}}>
            <View style = {{width: 15, height: 15, borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: plant.like ? "red" : "black"}}> 
            <Icon name='heart' color= {plant.like ? "red" : "black"} size={18} />
            </View>
            
        </View>
        <View style = {{height: 100, alignItems: "center"}}>
                <Image style = {{flex: 1, resizeMode: "contain", height: 100}} source={plant.img} />
            </View>
            <Text style = {{fontWeight: "bold", fontSize: 17, marginTop: 10}}>{plant.name}</Text>
            <View style = {{marginRight: 5, flexDirection: "row", justifyContent: "space-between"}}>
                <Text style = {{fontWeight: "bold", fontSize: 17}}>{plant.price}</Text>
                <View style = {{height: 25, width: 25, backgroundColor: COLORS.green, borderRadius: 5, justifyContent: "center", alignItems: "center"}}>
                    <Text style = {{fontSize: 22, color: COLORS.white, fontWeight: "bold"}}>+</Text>
                    
                </View>
            </View>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 200,
        width,
        backgroundColor: COLORS.light,
        marginHorizontal: 2,
        marginBottom: 20,
        padding: 15,
        marginTop: 20,
        

    }
})

export default Card