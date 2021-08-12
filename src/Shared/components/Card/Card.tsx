import React from 'react';
import CardFigure, { ICardFigureClassNames } from './CardFigure';
import CardFooter, { ICardFooterClassNames } from './CardFooter';

const cardFigureClassNames: ICardFigureClassNames = {
    container: 'mc-card__visual',
    image: 'mc-card__img'
};

const cardFooterClassNames: ICardFooterClassNames = {
    container: "mc-card__footer"
};


const Card = (): JSX.Element => (
    <div className="mc-card">
        <CardFigure
            classNames={cardFigureClassNames}
            src="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=640"
            alt="Card"
        />
        <article className="mc-card__content">
            <h1 className="mc-card__title">Card title</h1>
            <h2 className="mc-card__subtitle">There can be a subtitle here.</h2>
            <div className="mc-card__body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
            <CardFooter classNames={cardFooterClassNames}>
                <a href="/" className="mc-link mc-link--m">
                    Default link
                </a>
            </CardFooter>
        </article>
    </div>
);

export default Card;
