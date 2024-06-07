import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, Alert, View, Image, StatusBar } from 'react-native';
import 임영웅1 from "../assets/임영웅1.jpg";
import audio from "../assets/audio.jpg";
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';



export default function MainPage() { //어차피 mainpage는 나중에 페이지이동 버튼 지워야돼서 제일 마지막에 다른페이지 다 만들고 수정할예정.
  const navigation = useNavigation(); 
  const sound = React.useRef(new Audio.Sound());

  const playSound = async () => {
    try {
      await sound.current.unloadAsync(); // 기존에 로드된 사운드 정리
      await sound.current.loadAsync(require('../assets/sound.mp3')); // 로컬 음성 파일 로드
      await sound.current.playAsync(); // 사운드 재생
    } catch (error) {
      console.log('Error loading or playing sound:', error);
    }
  };

  React.useEffect(() => {
    return sound.current
      ? () => {
          sound.current.unloadAsync(); // 컴포넌트 언마운트 시 사운드 정리
        }
      : undefined;
  }, []);
  
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
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>기존방식</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('GuidePage')}}>
          <Text style={styles.text}>안내방식</Text>
        </TouchableOpacity>
      </View>

      <Image source={임영웅1}
      style={styles.imageStyle}
      />
      <TouchableOpacity accessibilityLabel="Play Sound" onPress={playSound}>
          <Image source={audio} style={styles.image}/>
        </TouchableOpacity>
    </View>)};

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
  }
});

