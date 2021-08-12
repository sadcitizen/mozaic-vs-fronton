import React from 'react';
import cn from 'classnames';

export interface ICardFigureProps {
    className?: string;
    src: string;
    alt?: string;
}

export interface ICardFigureClassNames {
    container: string;
    image: string;
}

const classNames: ICardFigureClassNames = {
    container: 'mc-card__visual',
    image: 'mc-card__img'
};

const CardFigure = ({ className, src, alt }: ICardFigureProps): JSX.Element => (
    <figure className={cn(classNames.container, className)}>
        <img className={classNames.image} src={src} alt={alt} />
    </figure>
);

export default CardFigure;
