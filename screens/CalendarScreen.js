import {format} from 'date-fns';
import React, {useContext, useMemo, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Animated, Button} from 'react-native';
import CalendarView from '../component/CalendarView';
import LogContext from '../contexts/LogContext';
import FeedList from '../component/FeedList';
const CalendarScreen = () => {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {}),
    [logs],
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
};

export default CalendarScreen;
