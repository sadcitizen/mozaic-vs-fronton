import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';
import { useRadioContext } from './RadioContext';

export interface IRadioIndicatorOnClassNames {
    indicator?: string;
}

export interface IRadioIndicatorOnProps {}

interface IProps extends IRadioIndicatorOnProps, IClassNames<IRadioIndicatorOnClassNames> {}

const RadioIndicatorOn: FC<IProps> = ({ classNames, children }) => {
    const { isChecked } = useRadioContext();

    if (!isChecked) {
        return null;
    }

    return <div className={classNames.indicator}>{children}</div>;
};

export default RadioIndicatorOn;
