import React from 'react';
import {
  SafeAreaView, 
  Text, 
  View, 
  StatusBar, 
  Image, 
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/colors/colors';
//import colors from '../assets/colors/colors';

const data = [
  {
    title: 'Kelola laporan keuangan anda',
    //text: 'Description.\nSay something cool',
    image: require('../assets/images/Onboard1.png'),
    bg: '#59b2ab',
  },
  {
    title: 'Tanpa harus menghitung secara manual',
    //text: 'Other cool stuff',
    image: require('../assets/images/Onboard2.png'),
    bg: '#febe29',
  },
  {
    title: 'Masuk pakai nomormu',
    //text: "Masukkan nomor untuk membuat/masuk ke akunmu",
    image: require('../assets/images/logo.png'),
    bg: '#22bcb5',
  },
];

const Onboard = (props) => {

const renderItem = ({item}) => {
  return (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
};

const keyExtractor = (item) => item.title;

const renderNextButton = () => {
  return (
    <View style={styles.rightTextWrapper}>
      <Text style={styles.rightText}>Next</Text>
    </View>
  );
};

const renderDoneButton = () => {
  return (
    <TouchableOpacity
    onPress={() => props.navigation.navigate("Masuk")}>
  <LinearGradient colors={['#FD7D96', '#FC4257']}
   
    style={styles.doneButtonWrapper}>
    <Text style={styles.doneButtonText}>
    Login</Text>
  </LinearGradient>
  </TouchableOpacity>
  );
};

{/* <TouchableOpacity colors={['#FD7D96', '#FC4257']}>
<Text style={styles.doneButtonText}>Login</Text>
</TouchableOpacity> */}

const handleDone = () => {
    props.handleDone();
};

return (
  <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        onDone={handleDone}
      />
    </View>
    
);
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 118,
  },
  title: {
    fontSize: 20,
    color: colors.blue,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    marginHorizontal: 104,
  },
  
  text: {
  fontSize: 12,
  color: colors.gray,
  textAlign: 'center',
  fontFamily: 'Poppins-SemiBold',
  marginHorizontal: 15,
  marginTop:20,
},

dotStyle: {
  backgroundColor: colors.gray,
},
activeDotStyle: {
  backgroundColor: colors.red,
},

  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightText: {
    color: colors.blue,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },

  doneButtonWrapper: {
    width: 50,
    height: 40,
    marginRight: 20,
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButtonText: {
    color: colors.blue,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },

  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: 350,
    height:52.23,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  
  doneButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Onboard;