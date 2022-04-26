import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../component/WriteHeader';
import WriteEditor from '../component/WriteEditor';
const WriteScreen = () => {
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
      <WriteEditor />
    </SafeAreaView>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});
