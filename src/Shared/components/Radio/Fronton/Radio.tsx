import React, { FC } from 'react';
import cn from 'classnames';
import RadioContainer from './RadioContainer';
import RadioIndicatorOff from './RadioIndicatorOff';
import RadioIndicatorOn from './RadioIndicatorOn';
import RadioLabel from './RadioLabel';
import styles from './Radio.module.css';

export interface IRadioProps {
    className?: string;
    size: 'm' | 'l';
    isChecked?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    onChange?: () => void;
}

const Radio: FC<IRadioProps> = ({ className, children, size, isChecked, isDisabled, isInvalid, onChange }) => {
    return (
        <RadioContainer className={className}>
            <RadioIndicatorOff>[&nbsp;]</RadioIndicatorOff>
            <RadioIndicatorOn>[*]</RadioIndicatorOn>
            <RadioLabel>{children}</RadioLabel>
        </RadioContainer>
    );
};

export default Radio;
