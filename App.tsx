/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Header } from './components/Header/Header';
import { UserStoriesNavbar } from './components/UserStoriesNavbar/UserStoriesNavbar';
import { UserPostsBody } from './components/UserPostsBody/UserPostsBody';

function App(): React.JSX.Element {
  return (
    <>
      <SafeAreaView>
        <Header />
        <UserStoriesNavbar />
        <UserPostsBody />
      </SafeAreaView>
    </>
  );
}

export default App;
