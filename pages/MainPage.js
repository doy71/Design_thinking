import React, { useCallback } from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, Alert, View, Image, StatusBar } from 'react-native';
import 임영웅1 from "../assets/임영웅1.jpg";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AudioPlayer from './AudioPlayer';

export default function MainPage() {
  const navigation = useNavigation();
  let soundRef = null; 

  useFocusEffect( 
    useCallback(() => {
      return () => {
        if (soundRef) {
          soundRef.stopAsync();
        }
      };
    }, [])
  );
  const handleSoundRef = (sound) => {  // 추가
    soundRef = sound;  // 추가
  };  // 추가

  return (
    <View style={styles.container}>
      <View style={styles.balloon}>
        <Text style={styles.maintext}>안녕하세요!</Text>
        <Text style={styles.maintext}>키오스크에 익숙하신분은</Text>
        <Text style={styles.maintext}> '기존 방식'을 </Text>
        <Text style={styles.maintext}>안내가 필요하신 분은</Text>
        <Text style={styles.maintext}> '안내 방식'을 눌러주세요. </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GuidePage')}>
          <Text style={styles.text}>안내방식</Text>
        </TouchableOpacity>
      </View>

      <Image source={임영웅1} style={styles.imageStyle} />
      
      <AudioPlayer source={require('../assets/sounds/guidepage.mp3')} onSoundRef={handleSoundRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 0,
    flex:0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 'auto' // 가로로 나열
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 8
  },
  balloon: {
    flex: 0.9,
    backgroundColor: '#007BFF',
    marginHorizontal:20,
    marginVertical:30,
    padding:20,
    alignItems: 'center',
    borderRadius: 15,
  },
  maintext: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fff',
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fff'
  },
  imageStyle: {
    flex:1,
    width:"50%",
    height:"100%",
    resizeMode: 'contain'
  },
  image: {
    width:400,
    height:50,
    resizeMode:'contain'
  },
  audioPlayerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  slider: {
    width: 200,
    height: 40,
  },
  audioPlayerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  slider: {
    width: 200,
    height: 40,
  }
});

