import React, { FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardSubtitleClassNames {
    subtitle: string;
}

export interface ICardSubtitleProps {
    className?: string;
}

interface IProps extends ICardSubtitleProps, IClassNames<ICardSubtitleClassNames> {}

const CardSubtitle: FC<IProps> = ({ classNames, className, children }) => (
    <h2 className={cn(classNames.subtitle, className)}>{children}</h2>
);

export default CardSubtitle;
