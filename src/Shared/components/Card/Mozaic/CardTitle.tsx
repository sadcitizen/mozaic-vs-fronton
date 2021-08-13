import React, { FC } from 'react';
import CardTitle, { ICardTitleClassNames, ICardTitleProps } from '../CardTitle';

const classNames: ICardTitleClassNames = {
    title: 'mc-card__title'
};

const MozaicCardTitle: FC<ICardTitleProps> = props => <CardTitle classNames={classNames} {...props} />;

export default MozaicCardTitle;
