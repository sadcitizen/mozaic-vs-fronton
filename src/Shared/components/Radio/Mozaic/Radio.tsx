import React, { FC } from 'react';
import cn from 'classnames';
import { IRadioContainerProps } from '../RadioContainer';
import RadioContainer from './RadioContainer';
import RadioIndicatorOff from './RadioIndicatorOff';
import RadioIndicatorOn from './RadioIndicatorOn';
import RadioLabel from './RadioLabel';
import './Radio.css';

export interface IRadioProps extends IRadioContainerProps {
    isInvalid?: boolean;
}

const Radio: FC<IRadioProps> = ({ className, children, name, value, isChecked, isDisabled, isInvalid, onChange }) => {
    return (
        <RadioContainer
            className={className}
            name={name}
            value={value}
            isChecked={isChecked}
            isDisabled={isDisabled}
            onChange={onChange}
        >
            <RadioIndicatorOff className={cn(isInvalid && 'is-invalid', isDisabled && 'is-disabled')} />
            <RadioIndicatorOn className={cn('is-checked', isInvalid && 'is-invalid', isDisabled && 'is-disabled')} />
            <RadioLabel>{children}</RadioLabel>
        </RadioContainer>
    );
};

export default Radio;
