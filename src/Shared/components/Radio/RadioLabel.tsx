import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface IRadioLabelClassNames {
    label: string;
}

export interface IRadioLabelProps {}

interface IProps extends IRadioLabelProps, IClassNames<IRadioLabelClassNames> {}

const RadioLabel: FC<IProps> = ({ classNames, children }) => (
    <div className={classNames.label}>{children}</div>
);

export default RadioLabel;
