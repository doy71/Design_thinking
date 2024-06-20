// GuidePage.js
import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AudioPlayer from './AudioPlayer';
import styles from './styles'; // 스타일 import

const GuidePage = () => {
  const navigation = useNavigation();
  const [showMessage, setShowMessage] = useState(false);
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

  const handleCallStaff = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000); // 5초 후에 메시지 사라짐
  };

  return (
    <View style={styles.containerDetail}>
      <View style={styles.topDetail}>
        <TouchableOpacity style={styles.backbuttonDetail} onPress={() => navigation.navigate('MainPage')}>
          <Text style={styles.callstaffDetail}>뒤로</Text>
        </TouchableOpacity>

        <Text style={styles.orderStageDetail}>주문 단계 안내</Text>

        <TouchableOpacity style={styles.callbuttonDetail} onPress={handleCallStaff}>
          <Text style={styles.callstaffDetail}>직원 호출</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.middleDetail}>
        <View style={styles.middletextDetail}>
          <Text style={styles.guidetextDetail}>매장 이용을 원하시는</Text>
          <Text style={styles.guidetextDetail}>고객님은 '매장 이용'을</Text>
          <Text style={styles.guidetextDetail}>포장 주문을 원하시는</Text>
          <Text style={styles.guidetextDetail}>고객님은 '포장 주문'을 눌러주세요</Text>
        </View>

        <View style={styles.buttonContainerDetail}>
          <TouchableOpacity 
            style={styles.buttonDetail} 
            onPress={() => navigation.navigate('OrderPage', { orderType: '매장 이용입니다.' })}
          >
              <Text style={styles.textDetail}>🍴매장 이용</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonDetail} 
            onPress={() => navigation.navigate('OrderPage', { orderType: '포장 주문입니다.' })}
          >
              <Text style={styles.textDetail}>🛍️포장 주문</Text>
          </TouchableOpacity>
        </View>
      </View>

      {showMessage && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>직원이 오는 중입니다. 잠시만 기다려주세요</Text>
        </View>
      )}

      <AudioPlayer source={require('../assets/sounds/guidepage.mp3')} onSoundRef={handleSoundRef} />
    </View>
  );
}

export default GuidePage;
