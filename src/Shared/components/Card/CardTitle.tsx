import React, { FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardTitleClassNames {
    title: string;
}

export interface ICardTitleProps {
    className?: string;
}

interface IProps extends ICardTitleProps, IClassNames<ICardTitleClassNames> {}

const CardTitle: FC<IProps> = ({ classNames, className, children }) => (
    <h1 className={cn(classNames.title, className)}>{children}</h1>
);

export default CardTitle;
