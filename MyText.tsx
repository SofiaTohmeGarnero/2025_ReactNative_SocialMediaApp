import React, {useEffect, useState} from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

const MyText = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [display, setDisplay] = useState(true);

  return (
    <ScrollView>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Switch
          style={
            Platform.OS === 'android' && {
              transform: [{scaleX: 1.5}, {scaleY: 1.5}],
            }
          }
          ios_backgroundColor={'#000'}

          trackColor={
            /* Platform.OS === 'android' &&  */{
              false: 'grey',
              true: 'red',
            }
          }
          value={display}
          onValueChange={() => setDisplay(!display)}></Switch>
        <Text>Show your personal data</Text>
      </View>
      {display && (
        <View>
          <TextInput
            style={{borderWidth: 1, borderRadius: 4, padding: 10}}
            value={name}
            onChangeText={value => {
              setName(value);
            }}
            placeholder="introduce your name"
          />
          <TextInput
            style={{borderWidth: 1, borderRadius: 4, padding: 10}}
            value={age}
            onChangeText={value => {
              setAge(value);
            }}
            placeholder="introduce your age"
          />
        </View>
      )}
      <Pressable onPress={() => console.log(name, age)}>
        <Text>Send</Text>
      </Pressable>
    </ScrollView>
  );
};

export default MyText;

const style = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
