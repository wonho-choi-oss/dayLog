import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../component/WriteHeader';
import WriteEditor from '../component/WriteEditor';
import LogContext from '../contexts/LogContext';
const WriteScreen = ({route}) => {
  const log = route.params?.log;
  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const navigation = useNavigation();

  const {onCreate} = useContext(LogContext);

  const onSave = () => {
    onCreate({title, body, date: new Date().toISOString()});
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behovior={Platform.select({ios: 'padding'})}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeBody={setBody}
          onChangeTitle={setTitle}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {flex: 1},
});
