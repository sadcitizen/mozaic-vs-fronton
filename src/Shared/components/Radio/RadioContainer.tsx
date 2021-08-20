import React, { ChangeEvent, FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';
import { RadioContextProvider } from './RadioContext';
import styles from './RadioContainer.module.css';

export interface IRadioContainerClassNames {
    container: string;
}

export interface IRadioContainerProps {
    className?: string;
    name?: string;
    value: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface IProps extends IRadioContainerProps, IClassNames<IRadioContainerClassNames> {}

const RadioContainer: FC<IProps> = ({
    classNames,
    className,
    children,
    name,
    value,
    isChecked = false,
    isDisabled = false,
    onChange
}) => {
    return (
        <RadioContextProvider isChecked={isChecked}>
            <div className={cn(styles.container, classNames.container, className)}>
                <input
                    className={styles.input}
                    type="radio"
                    name={name}
                    value={value}
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={onChange}
                />
                {children}
            </div>
        </RadioContextProvider>
    );
};

export default RadioContainer;
