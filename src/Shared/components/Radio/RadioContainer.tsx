import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';
import { RadioContextProvider } from './RadioContext';

export interface IRadioContainerClassNames {
    container: string;
}

export interface IRadioContainerProps {}

interface IProps extends IRadioContainerProps, IClassNames<IRadioContainerClassNames> {}

const RadioContainer: FC<IProps> = ({ classNames, children }) => {
    return (
        <RadioContextProvider>
            <div className={classNames.container}>{children}</div>
        </RadioContextProvider>
    );
};

export default RadioContainer;
