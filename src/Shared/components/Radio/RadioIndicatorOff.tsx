import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface IRadioIndicatorOffClassNames {
    indicator?: string;
}

export interface IRadioIndicatorOffProps {}

interface IProps extends IRadioIndicatorOffProps, IClassNames<IRadioIndicatorOffClassNames> {}

const RadioIndicatorOff: FC<IProps> = ({ classNames, children }) => <div className={classNames.indicator}>{children}</div>;

export default RadioIndicatorOff;
