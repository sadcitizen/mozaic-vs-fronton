import React from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardFigureClassNames {
    figure: string;
    image: string;
}

export interface ICardFigureProps {
    className?: string
    src: string;
    alt?: string;
}

interface IProps extends ICardFigureProps, IClassNames<ICardFigureClassNames> {}

const CardFigure = ({ classNames, className, src, alt }: IProps): JSX.Element => (
    <figure className={cn(classNames.figure, className)}>
        <img className={classNames.image} src={src} alt={alt} />
    </figure>
);

export default CardFigure;
