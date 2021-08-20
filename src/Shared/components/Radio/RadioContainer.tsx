import React, { FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';
import { RadioContextProvider } from './RadioContext';

export interface IRadioContainerClassNames {
    container: string;
}

export interface IRadioContainerProps {
    className?: string,
    isChecked?: boolean;
    isDisabled?: boolean;
    onChange?: () => void
}

interface IProps extends IRadioContainerProps, IClassNames<IRadioContainerClassNames> {}

const RadioContainer: FC<IProps> = ({ classNames, className, children, isChecked, isDisabled, onChange }) => {
    return (
        <RadioContextProvider>
            <div className={cn(classNames.container, className)}>{children}</div>
        </RadioContextProvider>
    );
};

export default RadioContainer;
