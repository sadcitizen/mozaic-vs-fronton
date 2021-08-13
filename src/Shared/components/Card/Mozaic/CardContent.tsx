import React, { FC } from 'react';
import CardContent, { ICardContentClassNames, ICardContentProps } from '../CardContent';

interface IMozaicCardContentProps extends Omit<ICardContentProps, 'classNames'> {}

const classNames: ICardContentClassNames = {
    container: 'mc-card__content'
};

const MozaicCardContent: FC<IMozaicCardContentProps> = props => <CardContent classNames={classNames} {...props} />;

export default MozaicCardContent;
