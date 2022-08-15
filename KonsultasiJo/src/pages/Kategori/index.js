import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Perkawinan } from '../../assests/icon'

const Kategori = () => {
  return (
    <View>
      <Text>Header</Text>

      <Text>Hukum Perdata</Text>
      <View>
        <Perkawinan/>
      </View>
      <Text>Hukum Pidana</Text>


    </View>
  )
}

export default Kategori

const styles = StyleSheet.create({})