import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://192.168.1.22:3000/register", user)
      .then((response) => {
        console.log(response.data);
        Alert.alert(
          "Registration successful",
          "You have been registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration failed",
          "An error occurred while registering"
        );
        console.error("Registration failed", error);
      });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Register to your Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="person"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.input}
              placeholder="Enter your name"
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="email"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="Enter your email"
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.input}
              placeholder="Enter your password"
            />
          </View>

          <View style={styles.actionsContainer}>
            <Pressable onPress={handleRegister} style={styles.registerButton}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>

            <Pressable
              onPress={() => router.replace("/login")}
              style={styles.loginLink}
            >
              <Text style={styles.loginText}>
                Already have an account? Sign in
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  icon: {
    marginLeft: 8,
  },
  input: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    fontSize: 18,
  },
  actionsContainer: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  registerButton: {
    width: 200,
    backgroundColor: "#0072b1",
    borderRadius: 6,
    padding: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: 15,
  },
  loginText: {
    textAlign: "center",
    color: "gray",
    fontSize: 16,
  },
});

export default Register;
