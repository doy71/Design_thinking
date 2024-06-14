import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import 임영웅1 from "../assets/임영웅1.jpg";
import AudioPlayer from './AudioPlayer';

const CompletePaymentPage = ({ navigation }) => {
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
  const handleSoundRef = (sound) => {
    soundRef = sound;
  }; 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('MainPage'); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>주문이 완료되었습니다.</Text>
        <Text style={styles.messageText}>아래에서 영수증을 챙겨주시고 주문 번호가 
        호출되면 카운터에서 주문해주신 메뉴를 찾아가주세요. </Text>
        <Text style={styles.messageText}>감사합니다.</Text>
      </View>

      <Image style={styles.image} source={임영웅1} />

      <View style={styles.audioPlayerWrapper}>
        <AudioPlayer source={require('../assets/sounds/CompletePaymentPage.mp3')} onSoundRef={handleSoundRef} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  messageBox: {
    backgroundColor: '#007BFF',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginTop: 50,  
  },
  messageText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fff',
    marginBottom: 10
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    marginVertical: 20,
    width: 200,
    height: 250,
    resizeMode: 'contain',
  },
  audioPlayerWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    bottom: 0,
  },
});

export default CompletePaymentPage;
