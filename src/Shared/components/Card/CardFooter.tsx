import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardFooterClassNames {
    container: string;
}

export interface ICardFooterProps {}

interface IProps extends ICardFooterProps, IClassNames<ICardFooterClassNames> {}

const CardFooter: FC<IProps> = ({ classNames, children }) => (
    <footer className={classNames.container}>
        { children }
    </footer>
);

export default CardFooter;
