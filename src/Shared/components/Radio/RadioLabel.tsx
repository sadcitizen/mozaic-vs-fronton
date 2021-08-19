import React, { FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';

export interface IRadioLabelClassNames {
    label: string;
}

export interface IRadioLabelProps {
    className?: string
}

interface IProps extends IRadioLabelProps, IClassNames<IRadioLabelClassNames> {}

const RadioLabel: FC<IProps> = ({ classNames, className, children }) => (
    <div className={cn(classNames.label, className)}>{children}</div>
);

export default RadioLabel;
