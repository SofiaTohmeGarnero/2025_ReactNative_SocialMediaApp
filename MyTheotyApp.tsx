/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyText from './MyText';


function App(): React.JSX.Element {
  const [password, setPassword] = useState('')
  return (<>
    <SafeAreaView>
      <Text>Hello Word</Text>
      <TextInput 
        style={{borderWidth: 1, borderRadius: 4, padding: 10}}
        value={password}
        onChangeText={value =>{
          console.log(value)
          setPassword(value)
        }}
        keyboardType={'default'}  //default, email-address, phone-pad
        returnKeyType={'default'} // done, go, default, next
        autoFocus={true}
        secureTextEntry={true}  //password no se vea, solo puntitos
      />
      <TextInput 
        style={{borderWidth: 1, borderRadius: 4, padding: 10}}
        value={password}
        onChangeText={value =>{
          console.log(value)
          setPassword(value)
        }}
        keyboardType={'email-address'}  //default, email-address, phone-pad
        returnKeyType={'go'} // done, go, default, next
        autoFocus={true}
        secureTextEntry={false}  //password no se vea, solo puntitos
      />
      <MyText  />
      
    </SafeAreaView>
  </>);
}

export default App;
