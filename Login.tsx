import { View, TextInput, StyleSheet, TouchableOpacity, Text, Pressable, Alert, StatusBar } from 'react-native';
import React, { useRef, useState } from 'react';
import BackButton from '../components/BackButton';
import { useRouter } from 'expo-router';
import Loading from '../components/Loading';
import Icon from '@/assets/icons';

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const [loading, setLoading] = useState(false); // State to manage loading
    const router = useRouter();

    // Function to handle form submission
    const onSubmit = async () => {
        if (!emailRef.current || !passRef.current) {
            Alert.alert('Login', 'Please fill all the fields');
            return;
        } 
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <BackButton router={router} />
            </View>
            
            {/* Welcome */}
            <View style={styles.content}>
                <Text style={styles.welcomeStyle}>Hey,</Text>
                <Text style={styles.welcomeStyle}>Welcome Back</Text>

                {/* Login Form */}
                <Text style={styles.loginStyle}>Please login to continue</Text>

                <View style={styles.inputContainer}>
                    <Icon name="email" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Enter your email'
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={value => emailRef.current = value}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="password" size={20} color="#888" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Enter your password'
                        secureTextEntry={true} // Hides the text input as the user types
                        onChangeText={value => passRef.current = value} // Change to passRef for password
                    />
                </View>

                {/* Forgot Password */}
                <TouchableOpacity style={styles.forgotPasswordStyle}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Login Button */}
                {loading ? (
                    <Loading /> // Display loading component when loading
                ) : (
                    <TouchableOpacity style={styles.btnStyle} onPress={onSubmit} disabled={loading}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                )}

                {/* Account Creation */}
                <View style={styles.accountContainer}>
                    <Text style={styles.accountText}>Don't have an account?</Text>
                    <Pressable onPress={() => router.push('/SignUp')}>
                        <Text style={styles.loginText}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 25, // Adds horizontal padding for better layout
    },
    header: {
        padding: 10,
    },
    content: {
        flex: 1, // Ensures the content area can expand to fill space
        justifyContent: 'flex-start', // Aligns items at the top
    },
    welcomeStyle: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold',
        // marginLeft: 10,
        marginTop: 25,
        marginBottom: -15, // Keeps space between welcome text and input
    },
    loginStyle: {
        fontSize: 15,
        color: 'black',
        // marginLeft: 15,
        marginTop: 50,  // Space between welcome text and login form
    },
    inputContainer: {
        position: 'relative', // Enables absolute positioning of the icon
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        marginLeft: -5,
        borderRadius: 20,
        justifyContent: 'center',
        margin: 15,
        width: 350
    },
    icon: {
        position: 'absolute',
        left: 23,
        top: '115%',
        transform: [{ translateY: -12 }], // Centers the icon vertically
    },
    input: {
        paddingLeft: 40, // Adds space for the icon inside the input field
        fontSize: 16,
        color: '#333',
        borderRadius: 25,
    },
    forgotPasswordStyle: {
        marginTop: 10,  // Space between InputText and forgot password text
        marginBottom: 20, // Space below the forgot password text
        alignSelf: 'flex-end', // Align to the right
    },
    forgotText: {
        fontSize: 15,
        color: 'grey',  // Green color for visibility
        fontWeight: 'bold',
        marginRight: 15, // Space between
    },
    btnStyle: {
        backgroundColor: '#66BB6A',  // Green button background
        padding: 15,
        borderRadius: 10,  // Rounded corners
        alignItems: 'center',  // Center text inside the button
        // marginRight: 30,
    },
    btnText: {
        color: '#fff',  // White text color
        fontWeight: 'bold',
        fontSize: 16,
    },
    accountContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        marginTop: 40, // Space between button and text
        marginRight: 21, // Space between button and text
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
