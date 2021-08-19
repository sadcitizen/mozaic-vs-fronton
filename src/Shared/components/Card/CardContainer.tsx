import React, { FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardContainerClassNames {
    container: string;
}

export interface ICardContainerProps {
    className?: string
}

interface IProps extends ICardContainerProps, IClassNames<ICardContainerClassNames> {}

const CardContainer: FC<IProps> = ({ classNames, className, children }) => (
    <div className={cn(classNames.container, className)}>{children}</div>
);

export default CardContainer;
