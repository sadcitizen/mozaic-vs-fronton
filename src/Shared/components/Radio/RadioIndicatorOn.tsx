import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface IRadioIndicatorOnClassNames {
    indicator?: string;
}

export interface IRadioIndicatorOnProps {}

interface IProps extends IRadioIndicatorOnProps, IClassNames<IRadioIndicatorOnClassNames> {}

const RadioIndicatorOn: FC<IProps> = ({ classNames, children }) => <div className={classNames.indicator}>{children}</div>;

export default RadioIndicatorOn;
