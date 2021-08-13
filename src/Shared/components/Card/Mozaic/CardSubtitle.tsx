import React, { FC } from 'react';
import CardSubtitle, { ICardSubtitleClassNames, ICardSubtitleProps } from '../CardSubtitle';

const classNames: ICardSubtitleClassNames = {
    subtitle: 'mc-card__subtitle'
};

const MozaicCardSubtitle: FC<ICardSubtitleProps> = props => <CardSubtitle classNames={classNames} {...props} />;

export default MozaicCardSubtitle;
