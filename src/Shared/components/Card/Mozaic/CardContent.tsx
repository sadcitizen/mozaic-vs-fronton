import React, { FC } from 'react';
import CardContent, { ICardContentClassNames, ICardContentProps } from '../CardContent';

const classNames: ICardContentClassNames = {
    container: 'mc-card__content'
};

const MozaicCardContent: FC<ICardContentProps> = props => <CardContent classNames={classNames} {...props} />;

export default MozaicCardContent;
