import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {StyleSheet, Alert, KeyboardAvoidingView, Platform} from 'react-native';
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
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());
  const {onCreate, onModify, onRemove} = useContext(LogContext);

  const onAskRemove = () => {
    Alert.alert('삭제', '정말로 삭제하시겠어요?', [
      {text: '취소', style: 'cancel'},
      {
        text: '삭제',
        onPress: () => {
          onRemove(log?.id);
          navigation.pop();
        },
      },
      {cancelable: true},
    ]);
  };

  const onSave = () => {
    if (log) {
      onModify({id: log.id, date: date.toISOString(), title, body});
    } else {
      onCreate({title, body, date: date.toISOString()});
    }
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behovior={Platform.select({ios: 'padding'})}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
          date={date}
          onChangeDate={setDate}
        />
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
