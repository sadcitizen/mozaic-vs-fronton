import React, { FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardFooterClassNames {
    footer: string;
}

export interface ICardFooterProps {
    className?: string
}

interface IProps extends ICardFooterProps, IClassNames<ICardFooterClassNames> {}

const CardFooter: FC<IProps> = ({ classNames, className, children }) => (
    <footer className={cn(classNames.footer, className)}>
        { children }
    </footer>
);

export default CardFooter;
