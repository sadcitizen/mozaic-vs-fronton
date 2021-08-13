import React from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardFigureClassNames {
    container: string;
    image: string;
}

export interface ICardFigureProps {
    src: string;
    alt?: string;
}

interface IProps extends ICardFigureProps, IClassNames<ICardFigureClassNames> {}

const CardFigure = ({ classNames, src, alt }: IProps): JSX.Element => (
    <figure className={classNames.container}>
        <img className={classNames.image} src={src} alt={alt} />
    </figure>
);

export default CardFigure;
