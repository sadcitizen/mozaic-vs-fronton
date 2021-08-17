import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface IRadioContainerClassNames {
    container: string;
}

export interface IRadioContainerProps {}

interface IProps extends IRadioContainerProps, IClassNames<IRadioContainerClassNames> {}

const RadioContainer: FC<IProps> = ({ classNames, children }) => (
    <div className={classNames.container}>{children}</div>
);

export default RadioContainer;
