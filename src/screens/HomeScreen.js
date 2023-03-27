import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import COLORS from '../consts/colors'

const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.background}>
      <View style = {styles.header}>
        <View>
        <Text style ={{fontSize: 25, fontWeight: "bold"}}>Welcome to </Text>
        <Text style = {{fontSize: 38, fontWeight: "bold", color: COLORS.green}}>Plant Shop </Text>
        </View>
      </View>
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
    }
})

export default HomeScreen