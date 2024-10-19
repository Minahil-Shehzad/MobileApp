import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'

const BackButton = ({router}) => {
  return (
    <Pressable onPress={()=>router.back()}>
        <Icon name="arrowLeft" size={26} strokeWidth={2} style={styles.container}/>
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  container: {
    // marginStart: ,
    marginTop: 16,
    backgroundColor: 'rgba(0,0,0,0.07)',
    borderRadius: 5,
    // paddingHorizontal: 12,
    // paddingVertical: 8,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})