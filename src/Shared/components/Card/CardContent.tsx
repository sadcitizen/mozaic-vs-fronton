import React, { FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardContentClassNames {
    content: string;
}

export interface ICardContentProps {
    className?: string;
}

interface IProps extends ICardContentProps, IClassNames<ICardContentClassNames> {}

const CardContent: FC<IProps> = ({ classNames, className, children }) => (
    <article className={cn(classNames.content, className)}>{children}</article>
);

export default CardContent;
