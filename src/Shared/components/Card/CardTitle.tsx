import React, { FC } from 'react';

export interface ICardTitleClassNames {
    title: string;
}

export interface ICardTitleProps {
    classNames: ICardTitleClassNames;
}

const CardTitle: FC<ICardTitleProps> = ({ classNames, children }) => <h1 className={classNames.title}>{children}</h1>;

export default CardTitle;
