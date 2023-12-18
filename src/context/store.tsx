'use client';
import React from 'react';
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";


interface ContextProps {
    link: string,
    setLink: Dispatch<SetStateAction<string>>,
    active:boolean,
    setActive:Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    link: '',
    setLink: (): string => '',
    active:false,
    setActive:():boolean=>false,
})

export const GlobalContextProvider = ({ children}:{
    children: React.ReactNode
  }) => {
    const [link, setLink] = useState('');
    const [active, setActive] = useState(false);
    
    return (
        <GlobalContext.Provider value={{ link, setLink, active, setActive }}>
        {children}
        </GlobalContext.Provider>
        )
    };
    
    export const useGlobalContext = () => useContext(GlobalContext);