import React, { FC } from 'react';
import CardFigure, { ICardFigureClassNames, ICardFigureProps } from '../CardFigure';

const classNames: ICardFigureClassNames = {
    container: 'mc-card__visual',
    image: 'mc-card__img'
};

const MozaicCardFigure: FC<ICardFigureProps> = props => <CardFigure classNames={classNames} {...props} />;

export default MozaicCardFigure;
