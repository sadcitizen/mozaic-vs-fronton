import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardTitleClassNames {
    title: string;
}

export interface ICardTitleProps {}

interface IProps extends ICardTitleProps, IClassNames<ICardTitleClassNames> {}

const CardTitle: FC<IProps> = ({ classNames, children }) => <h1 className={classNames.title}>{children}</h1>;

export default CardTitle;
