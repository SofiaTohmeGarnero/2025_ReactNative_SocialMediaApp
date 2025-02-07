/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
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
import DeviceInfo from 'react-native-device-info';

function App(): React.JSX.Element {
  const [password, setPassword] = useState('');
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  console.log(screenData);
  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      setScreenData(result.screen);
    });
  }, []);
  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={'red'} barStyle={'dark-content'}/>  {/**solo se ven los cambios en android */}
        <View
          style={{
            backgroundColor: 'red',
            width: screenData.width / 2,
            height: screenData.height / 2,
          }}>
          <Text style={{fontSize: screenData.height / 50}}>
            This box will have half of the screens width and height
          </Text>
        </View>
        <Text>Hello Word</Text>
        <TextInput
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          value={password}
          onChangeText={value => {
            console.log(value);
            setPassword(value);
          }}
          keyboardType={'default'} //default, email-address, phone-pad
          returnKeyType={'default'} // done, go, default, next
          autoFocus={true}
          secureTextEntry={true} //password no se vea, solo puntitos
        />
        <TextInput
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          value={password}
          onChangeText={value => {
            console.log(value);
            setPassword(value);
          }}
          keyboardType={'email-address'} //default, email-address, phone-pad
          returnKeyType={'go'} // done, go, default, next
          autoFocus={true}
          secureTextEntry={false} //password no se vea, solo puntitos
        />
        <MyText />
      </SafeAreaView>
    </>
  );
}

export default App;
