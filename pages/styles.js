// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
  },
  sideMenu: {
    width: '20%',
    backgroundColor: '#ddd',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  sideButton: {
    width: '90%',
    paddingVertical: 20,
    backgroundColor: '#bbb',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  selectedSideButton: {
    backgroundColor: '#007BFF',
  },
  sideButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 0, // 좌우 여백을 없앰
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemScroll: {
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'column', // 세로 방향으로 정렬
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    height: 200, // 메뉴 박스의 세로 길이를 두 배로 설정
  },
  image: {
    width: '100%',  // 이미지 너비를 꽉 차게 설정
    height: '70%', // 이미지 높이를 조정하여 텍스트 공간 확보
    marginRight: 0,
    borderRadius: 5,
  },
  largeImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 24, // 글씨 크기를 키움
    fontWeight: 'bold',
    marginTop: 5, // 이미지와 텍스트 사이의 여백
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  largeButton: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperatureGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  temperatureButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#007BFF',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  cartContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  cartList: {
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cartText: {
    fontSize: 16,
    width: '20%',
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  orderDetailsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  orderButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  orderLargeButton: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cartButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  cartLargeButton: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  removeButton: {
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  sideButton2: {
    width: '18%',
    paddingVertical: 20,
    backgroundColor: '#bbb',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  selectedButtonHot: {
    backgroundColor: '#FF0000',
  },
});

export default styles;
