import React, {useContext, useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../component/FloatingWriteButton';
import FeedList from '../component/FeedList';

const FeedsScreen = () => {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {flex: 1},
});
