import { View, TextInput, StyleSheet, TouchableOpacity, Text, Pressable, Alert, StatusBar } from 'react-native';
import React, { useRef, useState } from 'react';
import BackButton from '../components/BackButton';
import { useRouter } from 'expo-router';
import Loading from '../components/Loading';
import Icon from '@/assets/icons';
import useFetch from '../hooks/useFetch';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { data, error } = useFetch('https://xxxx.backendless.app/api/users/register');

  const onSubmit = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Sign Up', 'Please fill all the fields');
      return;
    }

    // Log input data
    console.log({ name, email, password });

    setLoading(true); // Show loading state

    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Account created successfully');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <BackButton router={router} />
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeStyle}>Let's,</Text>
        <Text style={styles.welcomeStyle}>Get Started</Text>
        <Text style={styles.loginStyle}>Please fill the details to create account</Text>

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            autoCapitalize="none"
            onChangeText={setName} // Update the state
            value={name}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail} // Update the state
            value={email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="password" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={setPassword} // Update the state
            value={password}
          />
        </View>

        <TouchableOpacity style={styles.forgotPasswordStyle}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {loading ? (
          <Loading />
        ) : (
          <TouchableOpacity style={styles.btnStyle} onPress={onSubmit}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        )}

        {/* Displaying input data */}
        <View style={styles.enteredDataContainer}>
          <Text style={styles.enteredDataTitle}>Entered Data:</Text>
          <Text style={styles.enteredDataText}>Name: {name || 'N/A'}</Text>
          <Text style={styles.enteredDataText}>Email: {email || 'N/A'}</Text>
          <Text style={styles.enteredDataText}>Password: {password ? '******' : 'N/A'}</Text>
        </View>

        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <Pressable onPress={() => router.push('/Login')}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  header: {
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  welcomeStyle: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: -15,
  },
  loginStyle: {
    fontSize: 15,
    color: 'black',
    marginTop: 50,
  },
  inputContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginLeft: -5,
    borderRadius: 20,
    justifyContent: 'center',
    margin: 15,
    width: 350,
  },
  icon: {
    position: 'absolute',
    left: 23,
    top: '115%',
    transform: [{ translateY: -12 }],
  },
  input: {
    paddingLeft: 40,
    fontSize: 16,
    color: '#333',
    borderRadius: 25,
  },
  forgotPasswordStyle: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
    marginRight: 15,
  },
  btnStyle: {
    backgroundColor: '#66BB6A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  enteredDataContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  enteredDataTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  enteredDataText: {
    fontSize: 14,
    color: '#333',
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  accountText: {
    fontSize: 14,
    color: 'grey',
    marginRight: 5,
  },
  loginText: {
    fontSize: 14,
    color: '#66BB6A',
    fontWeight: 'bold',
  },
});
