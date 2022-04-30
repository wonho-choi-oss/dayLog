import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
const LogContext = createContext();

export const LogContextProvider = ({children}) => {
  const [logs, setLogs] = useState([]);

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
