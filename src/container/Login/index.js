import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import SignInHeader from '../../components/SignInHeader';
import { styles } from './style';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import SocialLogin from '../../components/SocialLogin';
import app, { auth } from '../../../database/firebase';


import { lockIcon, smsIcon } from '../../assets/icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Loader, setItem } from '../../utils';


export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loading, setIsLoading] = useState(false)

  const _login = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res)
          console.log('User logged-in successfully!')
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var raw = JSON.stringify({
            "email": res?._tokenResponse?.email,
            "password": password,
            "token": res?._tokenResponse?.idToken
          });
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch("https://api.fansplaylouder.com/api/login", requestOptions)
            .then(response => response.json())
            .then(result => {
              setItem('token', result?.apiToken)
              setItem("user", result?.user)
              setIsLoading(false)
              setEmail('');
              setPassword('')
              navigation.navigate('WelcomeScreenOne')
            })
            .catch(error => {
              setIsLoading(false)
              console.log('error', error)
            });
        })
        .catch(error => {
          setIsLoading(false)
          console.log('error logged-in!' + error.message)
        })
    }
  }

  return (
    <View style={styles.bgContainer}>
      {loading && <Loader />}
      <SignInHeader navigation={navigation} headerText={'Log In to your Account'} />
      <ScrollView>
        <View style={{ marginHorizontal: 10, paddingTop: 10 }}>

          <InputComponent
            placeholder={'johndoe@example.com'}
            keyboard={'email-address'}
            iconImg={smsIcon}
            onChangeText={(text: any) => {
              setEmail(text)
            }}
            value={email}
          />
          <InputComponent
            secureTextEntry={true}
            keyboard={'default'}
            placeholder={'Password'}
            iconImg={lockIcon}
            onChangeText={(text: any) => {
              setPassword(text)
            }}
            value={password}
          />

          <View
            style={{ marginTop: 10, marginBottom: 30 }}>
            <ButtonComponent
              title={'Log In'}
              textWeight={'500'}
              onPress={() => {
                _login()
              }}

            />
          </View>

          <SocialLogin
            text={'Don’t have an account ?'}
            orText={'or Sign up with'}
            signInText={'Sign up'}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
