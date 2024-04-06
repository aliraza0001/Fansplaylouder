import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import SignInHeader from '../../components/SignInHeader';
import { styles } from './style';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import TextComponent from '../../components/TextComponent';
import { colors } from '../../theme/Color';
import { fontSizes, fontFamily } from '../../theme/Font';

import { lockIcon, smsIcon, userIcon, profileIcon } from '../../assets/icons';
import { auth } from '../../../database/firebase';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Loader, setItem } from '../../utils';

export default function Signup({ navigation }) {

  const [fansLouderName, setFansLouderName] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setIsLoading] = useState(false)

  const _signup = () => {
    if (fansLouderName === '' && name === '' && lastName === '' && email === '' && phone === '' && password === '' && confirmPassword === '') {
      Alert.alert('Enter details to signup!')
    } else {
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res)
          console.log('User sign-up successfully!')
          // console.log('res?._tokenResponse?.idToken', res?._tokenResponse?.idToken)
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var raw = JSON.stringify({
            "name": name,
            "last_name": lastName,
            "email": res?._tokenResponse?.email,
            "phone": phone,
            "password": password,
            "token": res?._tokenResponse?.idToken
          });
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch("https://api.fansplaylouder.com/api/signup", requestOptions)
            .then(response => response.json())
            .then(result => {
              setItem('token', result?.apiToken)
              setItem("user", result?.user)
              setIsLoading(false)
              setFansLouderName('')
              setName('')
              setLastName("")
              setEmail('');
              setPhone("")
              setPassword('')
              setConfirmPassword('')
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
    <>
      <ScrollView>
        <View style={styles.bgContainer}>
          {loading && <Loader />}
          <SignInHeader navigation={navigation} headerText={'Sign Up to your Account'} />

          <View style={{ marginHorizontal: 10 }}>
            <InputComponent
              placeholder={'Fans Louder'}
              keyboard={'default'}
              iconImg={userIcon}
              onChangeText={(text: any) => {
                setFansLouderName(text)
              }}
              value={fansLouderName}
            />
            <InputComponent
              placeholder={'First Name'}
              keyboard={'default'}
              iconImg={profileIcon}
              onChangeText={(text: any) => {
                setName(text)
              }}
              value={name}
            />
            <InputComponent
              placeholder={'Last Name'}
              keyboard={'default'}
              iconImg={profileIcon}
              onChangeText={(text: any) => {
                setLastName(text)
              }}
              value={lastName}
            />
            <InputComponent
              placeholder={'Email'}
              legend={'Email'}
              keyboard={'email-address'}
              iconImg={smsIcon}
              onChangeText={(text: any) => {
                setEmail(text)
              }}
              value={email}
            />
            <InputComponent
              placeholder={'Phone'}
              keyboard={'number-pad'}
              iconImg={smsIcon}
              onChangeText={(text: any) => {
                setPhone(text)
              }}
              value={phone}
            />
            <InputComponent
              secureTextEntry={true}
              placeholder={'Password'}
              keyboard={'default'}
              iconImg={lockIcon}
              onChangeText={(text: any) => {
                setPassword(text)
              }}
              value={password}
            />
            <InputComponent
              secureTextEntry={true}
              placeholder={'Confirm Password'}
              keyboard={'default'}
              iconImg={lockIcon}
              onChangeText={(text: any) => {
                setConfirmPassword(text)
              }}
              value={confirmPassword}
            />
            <View style={{ marginTop: 20, marginBottom: 10 }}>
              <ButtonComponent
                title={'Sign up'}
                textWeight={'500'}
                onPress={() => {
                  _signup()
                }}
              />
            </View>

            <View style={styles.haveanacc}>
              <TextComponent
                text={'Already have an account? '}
                padRight={2}
                textColor={colors.primary}
                fontsize={fontSizes.regular}
                fontfamily={fontFamily.light}
              />
              <TextComponent
                text={'Log In'}
                textColor={colors.secondary}
                padLeft={2}
                fontsize={fontSizes.regular}
                fontfamily={fontFamily.medium}
                onPress={() => {
                  navigation.navigate('Login');
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
