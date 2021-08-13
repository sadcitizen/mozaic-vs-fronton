import React, { FC } from 'react';
import CardFigure, { ICardFigureClassNames, ICardFigureProps } from '../CardFigure';

interface IMozaicCardFigureProps extends Omit<ICardFigureProps, 'classNames'> {}

const classNames: ICardFigureClassNames = {
    container: 'mc-card__visual',
    image: 'mc-card__img'
};

const MozaicCardFigure: FC<IMozaicCardFigureProps> = props => <CardFigure classNames={classNames} {...props} />;

export default MozaicCardFigure;
