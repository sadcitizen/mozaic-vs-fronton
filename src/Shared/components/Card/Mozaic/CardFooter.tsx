import React, { FC } from 'react';
import CardFooter, { ICardFooterClassNames, ICardFooterProps } from '../CardFooter';

interface IMozaicCardFooterProps extends Omit<ICardFooterProps, 'classNames'> {}

const classNames: ICardFooterClassNames = {
    container: 'mc-card__footer'
};

const MozaicCardFooter: FC<IMozaicCardFooterProps> = props => <CardFooter classNames={classNames} {...props} />;

export default MozaicCardFooter;
