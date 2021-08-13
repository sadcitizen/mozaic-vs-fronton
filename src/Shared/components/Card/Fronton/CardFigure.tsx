import React, { FC } from 'react';
import CardFigure, { ICardFigureClassNames, ICardFigureProps } from '../CardFigure';
import styles from './CardFigure.module.css';

interface IMozaicCardFigureProps extends Omit<ICardFigureProps, 'classNames'> {}

const classNames: ICardFigureClassNames = {
    container: styles.container,
    image: styles.image
};

const MozaicCardFigure: FC<IMozaicCardFigureProps> = props => <CardFigure classNames={classNames} {...props} />;

export default MozaicCardFigure;
