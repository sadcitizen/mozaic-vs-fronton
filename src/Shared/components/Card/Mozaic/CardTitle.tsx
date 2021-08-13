import React, { FC } from 'react';
import CardTitle, { ICardTitleClassNames, ICardTitleProps } from '../CardTitle';

interface IMozaicCardTitleProps extends Omit<ICardTitleProps, 'classNames'> {}

const classNames: ICardTitleClassNames = {
    title: 'mc-card__title'
};

const MozaicCardTitle: FC<IMozaicCardTitleProps> = props => <CardTitle classNames={classNames} {...props} />;

export default MozaicCardTitle;
