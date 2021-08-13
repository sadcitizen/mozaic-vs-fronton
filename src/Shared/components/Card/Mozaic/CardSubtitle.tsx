import React, { FC } from 'react';
import CardSubtitle, { ICardSubtitleClassNames, ICardSubtitleProps } from '../CardSubtitle';

interface IMozaicCardTitleProps extends Omit<ICardSubtitleProps, 'classNames'> {}

const classNames: ICardSubtitleClassNames = {
    subtitle: 'mc-card__subtitle'
};

const MozaicCardSubtitle: FC<IMozaicCardTitleProps> = props => <CardSubtitle classNames={classNames} {...props} />;

export default MozaicCardSubtitle;
