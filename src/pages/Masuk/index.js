import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

function Masuk(props) {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <TextInput
        placeholder="    Nomor Telepon"
        textBreakStrategy="highQuality"
        clearButtonMode="never"
        keyboardType="phone-pad"
        dataDetector="phoneNumber"
        style={styles.nomorTelepon}
      ></TextInput>
      <View style={styles.masukPakaiNomormuStack}>
        <Text style={styles.masukPakaiNomormu}>Masuk Pakai Nomormu</Text>
        <Text style={styles.loremIpsum}>
          masukkan nomor untuk membuat/masuk ke akunmu
        </Text>
      </View>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.lanjut}>LANJUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#000000"
  },
  nomorTelepon: {
    fontFamily: "poppins-regular",
    color: "#121212",
    height: 52,
    width: 357,
    borderWidth: 2,
    borderColor: "#fc4257",
    borderRadius: 10,
    textAlign: "left",
    marginTop: 453,
    marginLeft: 25
  },
  masukPakaiNomormu: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "Poppins-Regular",
    color: "rgba(0,33,78,1)"
  },
  loremIpsum: {
    top: 20,
    left: 0,
    position: "absolute",
    fontFamily: "Poppins-Regular",
    color: "rgba(0,33,78,1)",
    fontSize: 12
  },
  masukPakaiNomormuStack: {
    width: 322,
    height: 38,
    marginTop: -109,
    marginLeft: 25
  },
  image: {
    width: 303,
    height: 303,
    marginTop: -341,
    marginLeft: 55
    
  },
  button: {
    width: 357,
    height: 54,
    backgroundColor: "#fc4257",
    borderRadius: 10,
    marginTop: 314,
    marginLeft: 25
  },
  lanjut: {
    fontFamily: "Poppins-SemiBold",
    color: "rgba(255,255,255,1)",
    textAlign: 'center',
    fontSize: 16,
    marginTop: 15,
    
  }
});

export default Masuk;
