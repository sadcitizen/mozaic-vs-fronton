import React, { FC } from 'react';
import RadioContainer from './RadioContainer';
import RadioIndicatorOff from './RadioIndicatorOff';
import RadioIndicatorOn from './RadioIndicatorOn';
import RadioLabel from './RadioLabel';
import './Radio.css';

export interface IRadioProps {
    className?: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    onChange?: () => void
}

const Radio: FC<IRadioProps> = ({ className, children, isChecked, isDisabled, isInvalid, onChange }) => {
    return (
        <RadioContainer className={className} isChecked={isChecked} isDisabled={isDisabled} onChange={onChange}>
            <RadioIndicatorOff>[&nbsp;]</RadioIndicatorOff>
            <RadioIndicatorOn>[*]</RadioIndicatorOn>
            <RadioLabel>{children}</RadioLabel>
        </RadioContainer>
    );
};

export default Radio;
