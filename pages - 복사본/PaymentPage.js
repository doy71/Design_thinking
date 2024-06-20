import React, { useCallback, useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';
import AudioPlayer from './AudioPlayer';
import styles from './styles'; // 스타일 import

const PaymentPage = () => {
    const navigation = useNavigation();
    const { cart } = useContext(CartContext);
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
                <TouchableOpacity style={styles.backbuttonDetail} onPress={() => navigation.navigate('OrderPage')}>
                    <Text style={styles.callstaffDetail}>뒤로</Text>
                </TouchableOpacity>

                <Text style={styles.orderStageDetail}>결제 단계 안내</Text>

                <TouchableOpacity style={styles.callbuttonDetail} onPress={handleCallStaff}>
                    <Text style={styles.callstaffDetail}>직원 호출</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.middleDetail}>
                <View style={styles.middletextDetail}>
                    <Text style={styles.guidetextDetail}>현금 결제를 원하시는 고객님은 '현금 결제'를, 카드 결제를 원하시는 고객님은 '카드 결제'를 눌러주세요</Text>
                </View>

                <View style={styles.buttonContainerDetail}>
                    <TouchableOpacity
                        style={styles.buttonDetail}
                        onPress={() => navigation.navigate('CashPage')}
                    >
                        <Text style={styles.textDetail}>💵현금 결제</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonDetail}
                        onPress={() => navigation.navigate('CardPage')}
                    >
                        <Text style={styles.textDetail}>💳카드 결제</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {showMessage && (
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>직원이 오는 중입니다. 잠시만 기다려주세요</Text>
                </View>
            )}

            <AudioPlayer source={require('../assets/sounds/paymentpage.mp3')} onSoundRef={handleSoundRef} />
        </View>
    );
}

export default PaymentPage;
