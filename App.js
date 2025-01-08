import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [phone, setPhone] = useState('');
  const isValidPhone = /^(0[3|5|7|8|9])([0-9]{8})$/.test(phone);

  return (
    <View style={styles.container}>
      <Text style={styles.t1}>Đăng Nhập</Text>
      <View style={styles.bong}/>
      <Text style={styles.t2}>Nhập số điện thoại</Text>
      <Text style={styles.t3}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        onChangeText={setPhone}
        value={phone}
      />

      <TouchableOpacity 
        style={[styles.button, isValidPhone ? styles.buttonActive : styles.buttonDisabled]}
        disabled={!isValidPhone}
        onPress={() => alert(`Số điện thoại: ${phone}`)}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop:30,
  },
  t1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '100%',
    padding: 3,
   
  },
  bong:{
    padding: 1,
    shadowColor: '#000',
    elevation: 3,
    borderBottomWidth:1,
  },
  t2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  t3: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#007BFF',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});