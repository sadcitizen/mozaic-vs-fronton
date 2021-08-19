import React, { FC, createContext, useContext } from 'react';

interface IRadioContextProps {
    isChecked: boolean;
}

const RadioContext = createContext<IRadioContextProps>({} as IRadioContextProps);

export function useRadioContext(): IRadioContextProps {
    const context = useContext(RadioContext);

    if (context === undefined) {
        throw new Error('useRadioContext must be used within the RadioContextProvider');
    }

    return context;
}

interface IRadioContextProviderProps {}

export const RadioContextProvider: FC<IRadioContextProviderProps> = ({ children }) => {
    const contextValue = {
        isChecked: true
    };

    return <RadioContext.Provider value={contextValue}>{children}</RadioContext.Provider>;
};
