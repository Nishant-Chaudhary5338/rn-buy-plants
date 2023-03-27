import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import COLORS from '../consts/colors'
import  Icon  from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import plants from '../consts/plants'

import Card from '../components/Card'


const HomeScreen = ({navigation}) => {

    const categories = ["POPULAR", "ORGANIC", "SYNTHETIC", "INDOORS"];
    const [selected, setSelected] = useState(0);
    

    const CategoryList = () => {
        return (
            <View style = {styles.categoryContainer}>
               {categories.map((item, index)=> (
                <TouchableOpacity activeOpacity={0.8} key={index}  onPress = {()=>setSelected(index)}>
                    <Text 
                      style = {[styles.categoryText, selected == index && styles.categoryTextSelected]}
                      >{item}
                    </Text>
                </TouchableOpacity>
               ))}
            </View>
        )
    }

    
  return (
    <SafeAreaView style = {styles.background}>
      <View style = {styles.header}>
        <View>
        <Text style ={{fontSize: 25, fontWeight: "bold"}}>Welcome to </Text>
        <Text style = {{fontSize: 38, fontWeight: "bold", color: COLORS.green}}>Plant Shop </Text>
        </View>
        <View>
            <Icon name ="shopping-cart"  size={20} />
        </View>
      </View>
      <View style = {{flexDirection: "row", marginTop: 30}}>
         <View style = {styles.searchContainer}>
            <Icon name = "search" size = {25} />
            <TextInput 
              placeholder='search here'
              style = {styles.input}
              

            />
         </View>
         <View style = {styles.sortBtn}>
            <Icon name = "sort" size = {30} color = {COLORS.white} />
         </View>
      </View>
      <CategoryList />
      <FlatList
        data={plants}
        columnWrapperStyle= {{justifyContent: "space-between"}}
        numColumns = {2}
        showsVerticalScrollIndicator = {false}
        contentContainerStyle = {{
            marginTop: 10,
            paddingBottom: 50
        }}
        renderItem={({item}) => {
            return <Card plant={item} navigation = {navigation} />;
          }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    background: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: COLORS.white
    },
    header: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    searchContainer: {
        flex: 1,
        borderRadius: 10,
        padding : 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.light,
    }, 
    input: {
        flex: 1,
        fontSize: 18, 
        fontWeight: "bold",
    },
    sortBtn: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.green,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        borderRadius: 10,


    },
    categoryContainer: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between"
    },
    categoryText: {
        fontSize: 16,
        color: "grey",
        fontWeight: "bold"
    },
    categoryTextSelected: {
        color: "green",
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green,
    },
    
    
})

export default HomeScreen