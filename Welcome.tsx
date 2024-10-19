import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();
  
  return (
    <View>
      <Image source={require('../Images/welImg.webp')} style={styles.img} />
      <Text style={styles.textStyle}>Linkify!</Text>
      <Text style={styles.subText}>
        Where every thought finds a name and every image tells a story
      </Text>
      <Button onPress={() => router.push('/SignUp')} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 250,
    alignSelf: 'center',  // Center the image horizontally
    marginTop: 150,
    borderRadius: 15,
  },
  textStyle: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 50,
    // fontFamily: 'Poppins-SemiBold',
  },
  subText: {
    textAlign: 'center',
    fontSize: 19,
    color: 'grey',
    padding: 20,
  },
});

