import React, { FC } from 'react';
import CardFooter, { ICardFooterClassNames, ICardFooterProps } from '../CardFooter';

const classNames: ICardFooterClassNames = {
    container: 'mc-card__footer'
};

const MozaicCardFooter: FC<ICardFooterProps> = props => <CardFooter classNames={classNames} {...props} />;

export default MozaicCardFooter;
