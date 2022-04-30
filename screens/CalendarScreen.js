import React, {useContext, useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Animated, Button} from 'react-native';
import LogContext from '../contexts/LogContext';

const SlideLeftAndRight = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);

  return (
    <View>
      <Animated.View
        style={[styles.rectangle, {transform: [{translateX: animation}]}]}
      />
      <Button
        title="Toggle"
        onPress={() => {
          setEnabled(!enabled);
        }}
      />
    </View>
  );
};

const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <SlideLeftAndRight />
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {},
  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});
