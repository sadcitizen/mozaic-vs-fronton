import React, { FC } from 'react';

export interface ICardSubtitleClassNames {
    subtitle: string;
}

export interface ICardSubtitleProps {
    classNames: ICardSubtitleClassNames;
}

const CardSubtitle: FC<ICardSubtitleProps> = ({ classNames, children }) => <h2 className={classNames.subtitle}>{children}</h2>;

export default CardSubtitle;
