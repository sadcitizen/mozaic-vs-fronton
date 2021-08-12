import React from 'react';

export interface ICardFigureClassNames {
    container: string;
    image: string;
}

export interface ICardFigureProps {
    classNames: ICardFigureClassNames;
    src: string;
    alt?: string;
}

const CardFigure = ({ classNames, src, alt }: ICardFigureProps): JSX.Element => (
    <figure className={classNames.container}>
        <img className={classNames.image} src={src} alt={alt} />
    </figure>
);

export default CardFigure;
