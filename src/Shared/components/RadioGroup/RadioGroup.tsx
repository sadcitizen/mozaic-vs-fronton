import React, { FC, createContext, useContext } from 'react';

interface IRadioGroupContextProps {}

const RadioGroupContext = createContext<IRadioGroupContextProps>({} as IRadioGroupContextProps);

export function useRadioGroup(): IRadioGroupContextProps {
    const context = useContext(RadioGroupContext);

    if (context === undefined) {
        throw new Error('useRadioGroup must be used within the RadioGroup');
    }

    return context;
}

interface IRadioGroupProps {}

export const RadioGroup: FC<IRadioGroupProps> = ({ children }) => {
    const contextValue = {};

    return <RadioGroupContext.Provider value={contextValue}>{children}</RadioGroupContext.Provider>;
};
