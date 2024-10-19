import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Loading from './Loading';
// import { router } from 'expo-router';
import {useRouter} from 'expo-router';

const Button = ({ onPress = () => {}, loading = false }) => {
    const router = useRouter();
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Loading />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.btnStyles}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>Getting Started</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Already have an account?</Text>
        <Pressable onPress={()=>router.push('/Login')}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 170,
  },
  btnStyles: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#66BB6A',
    borderRadius: 16,
    width: 330,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 120,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    marginTop: 15, // Space between button and text
  },
  accountText: {
    fontSize: 14,
    color: 'grey',
    marginRight: 5, // Space between the account text and login text
  },
  loginText: {
    fontSize: 14,
    color: '#66BB6A',
    fontWeight: 'bold', // To make the "Login" stand out
  },
});

export default Button;
