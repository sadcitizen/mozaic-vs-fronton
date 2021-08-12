import React, { FC } from 'react';

export interface ICardContentClassNames {
    container: string;
}

export interface ICardContentProps {
    classNames: ICardContentClassNames;
}

const CardContent: FC<ICardContentProps> = ({ classNames, children }) => (
    <article className={classNames.container}>
        { children }
    </article>
);

export default CardContent;
