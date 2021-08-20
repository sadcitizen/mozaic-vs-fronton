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

interface IRadioContextProviderProps {
    isChecked: boolean;
}

export const RadioContextProvider: FC<IRadioContextProviderProps> = ({ children, isChecked }) => {
    const contextValue = { isChecked };

    return <RadioContext.Provider value={contextValue}>{children}</RadioContext.Provider>;
};
