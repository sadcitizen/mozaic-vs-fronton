import React, { FC } from 'react';
import CardFigure, { ICardFigureClassNames, ICardFigureProps } from '../CardFigure';
import styles from './CardFigure.module.css';

const classNames: ICardFigureClassNames = {
    container: styles.container,
    image: styles.image
};

const MozaicCardFigure: FC<ICardFigureProps> = props => <CardFigure classNames={classNames} {...props} />;

export default MozaicCardFigure;
