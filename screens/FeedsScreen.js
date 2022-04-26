import React, {useContext} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../component/FloatingWriteButton';
const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {flex: 1},
});
