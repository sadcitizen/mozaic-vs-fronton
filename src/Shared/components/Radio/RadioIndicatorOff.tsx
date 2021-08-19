import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';
import { useRadioContext } from './RadioContext';

export interface IRadioIndicatorOffClassNames {
    indicator?: string;
}

export interface IRadioIndicatorOffProps {}

interface IProps extends IRadioIndicatorOffProps, IClassNames<IRadioIndicatorOffClassNames> {}

const RadioIndicatorOff: FC<IProps> = ({ classNames, children }) => {
    const { isChecked } = useRadioContext();

    if (isChecked) {
        return null;
    }

    return <div className={classNames.indicator}>{children}</div>;
};

export default RadioIndicatorOff;
