import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardSubtitleClassNames {
    subtitle: string;
}

export interface ICardSubtitleProps {}

interface IProps extends ICardSubtitleProps, IClassNames<ICardSubtitleClassNames> {}

const CardSubtitle: FC<IProps> = ({ classNames, children }) => <h2 className={classNames.subtitle}>{children}</h2>;

export default CardSubtitle;
