import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import audio from "../assets/audio.jpg";

//조익준
export default  GuidePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('MainPage')}>
          <Text style={styles.callstaff}>뒤로</Text>
        </TouchableOpacity>

        <Text style={styles.orderStage}>주문 단계 안내</Text>

        <TouchableOpacity style={styles.callbutton}>
            <Text style={styles.callstaff}>직원 호출</Text>
        </TouchableOpacity>
        
      </View>
  
      <View style={styles.middle}>
        <View style={styles.middletext}>
          <Text style={styles.guidetext}>매장 이용을 원하시는  </Text>
          <Text style={styles.guidetext}>고객님은 '매장 이용'을 </Text>
          <Text style={styles.guidetext}>포장 주문을 원하시는 </Text>
          <Text style={styles.guidetext}>고객님은 '포장 주문'을 눌러주세요</Text>
        </View>
       
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderPage')}>
              <Text style={styles.text}>매장 이용</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderPage')}>
              <Text style={styles.text}>포장 주문</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity>
          <Image source={audio} style={styles.image}/>
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  top:{
    flex:0.1 ,
    flexDirection: 'row',

  },
  backbutton:{
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 20,
    marginRight: 10,
    justifyContent:'center',
    width: 65,
    height: 40,
  },
  orderStage:{
    fontWeight: 'bold', 
    fontSize: 35,
    marginTop:10,
  },
  callbutton :{
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
    justifyContent:'center',
    width: 65,
    height: 40,
  },
  callstaff:{
    textAlign: 'center',
    fontWeight:'bold',
    color: '#fff',
    
  },
  middle:{
    flex:0.8,
  },
  middletext:{
    backgroundColor: '#007BFF',
    padding:30,
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop:50,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
  },
  guidetext:{
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom:10
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button:{
    backgroundColor: '#007BFF',
    borderRadius: 5,
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    // margin: 20,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text:{
    textAlign:'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottom:{
    flex:0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  image: {
    width:400,
    height:50,
    resizeMode:'contain'
  }

});