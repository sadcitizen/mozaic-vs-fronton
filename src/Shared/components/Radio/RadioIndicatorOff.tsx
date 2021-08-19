import React, { FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';
import { useRadioContext } from './RadioContext';

export interface IRadioIndicatorOffClassNames {
    indicator?: string;
}

export interface IRadioIndicatorOffProps {
    className?: string
}

interface IProps extends IRadioIndicatorOffProps, IClassNames<IRadioIndicatorOffClassNames> {}

const RadioIndicatorOff: FC<IProps> = ({ classNames, className, children }) => {
    const { isChecked } = useRadioContext();

    if (isChecked) {
        return null;
    }

    return <div className={cn(classNames.indicator, className)}>{children}</div>;
};

export default RadioIndicatorOff;
