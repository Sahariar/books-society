import React, { useState, createContext } from "react";

export const Context = createContext();



const ContextProvider = (props) => {
    const [username, setUsername] = useState(null);
const [secret, setSecret] = useState("");
    const value = {
        username,
        setUsername,
        secret,
        setSecret,
      };
    
      return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ContextProvider;