import React, { FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';
import { useRadioContext } from './RadioContext';

export interface IRadioIndicatorOnClassNames {
    indicator?: string;
}

export interface IRadioIndicatorOnProps {
    className?: string
}

interface IProps extends IRadioIndicatorOnProps, IClassNames<IRadioIndicatorOnClassNames> {}

const RadioIndicatorOn: FC<IProps> = ({ classNames, className, children }) => {
    const { isChecked } = useRadioContext();

    if (!isChecked) {
        return null;
    }

    return <div className={cn(classNames.indicator, className)}>{children}</div>;
};

export default RadioIndicatorOn;
