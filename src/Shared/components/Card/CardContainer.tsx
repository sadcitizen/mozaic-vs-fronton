import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardContainerClassNames {
    container: string;
}

export interface ICardContainerProps {}

interface IProps extends ICardContainerProps, IClassNames<ICardContainerClassNames> {}

const CardContainer: FC<IProps> = ({ classNames, children }) => (
    <div className={classNames.container}>{children}</div>
);

export default CardContainer;
