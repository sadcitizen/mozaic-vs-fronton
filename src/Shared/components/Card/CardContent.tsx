import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardContentClassNames {
    container: string;
}

export interface ICardContentProps {}

interface IProps extends ICardContentProps, IClassNames<ICardContentClassNames> {}

const CardContent: FC<IProps> = ({ classNames, children }) => (
    <article className={classNames.container}>{children}</article>
);

export default CardContent;
