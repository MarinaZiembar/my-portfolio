import React, { createContext, useEffect, useState } from 'react';


const GlobalContext = createContext();
const { Provider } = GlobalContext;


const GlobalProvider = ({ children }) => {

    const [firstTimeUser, setFirstTimeUser] = useState(true);
    const [className, setClassName] = useState("home-first");

    // useEffect(() => {
    //     className === "home-fifth" && localStorage.setItem("firstTimeUser", false);
    //     setFirstTimeUser(localStorage.getItem('firstTimeUser'));
    // },[className])

    return (
        <Provider
            value={{
                className, setClassName,
                firstTimeUser, setFirstTimeUser,
            }}
        >
            {children}
        </Provider>
    );
};

export { GlobalContext, GlobalProvider };