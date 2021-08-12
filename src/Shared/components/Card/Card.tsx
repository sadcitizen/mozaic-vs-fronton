import React from 'react';
import CardContainer, { ICardContainerClassNames } from './CardContainer';
import CardFigure, { ICardFigureClassNames } from './CardFigure';
import CardFooter, { ICardFooterClassNames } from './CardFooter';
import CardTitle, { ICardTitleClassNames } from './CardTitle';
import CardSubtitle, { ICardSubtitleClassNames } from './CardSubtitle';
import CardBody, { ICardBodyClassNames } from './CardBody';
import CardContent, { ICardContentClassNames } from './CardContent';

const cardContainerClassNames: ICardContainerClassNames = {
    container: 'mc-card',
};

const cardFigureClassNames: ICardFigureClassNames = {
    container: 'mc-card__visual',
    image: 'mc-card__img'
};

const cardFooterClassNames: ICardFooterClassNames = {
    container: 'mc-card__footer'
};

const cardTitleClassNames: ICardTitleClassNames = {
    title: 'mc-card__title'
};

const cardSubtitleClassNames: ICardSubtitleClassNames = {
    subtitle: 'mc-card__subtitle'
};

const cardContentClassNames: ICardContentClassNames = {
    container: 'mc-card__content'
};

const cardBodyClassNames: ICardBodyClassNames = {
    container: 'mc-card__body'
};

const Card = (): JSX.Element => (
    <CardContainer classNames={cardContainerClassNames}>
        <CardFigure
            classNames={cardFigureClassNames}
            src="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=640"
            alt="Card"
        />
        <CardContent classNames={cardContentClassNames}>
            <CardTitle classNames={cardTitleClassNames}>Card title</CardTitle>
            <CardSubtitle classNames={cardSubtitleClassNames}>There can be a subtitle here.</CardSubtitle>
            <CardBody classNames={cardBodyClassNames}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </CardBody>
            <CardFooter classNames={cardFooterClassNames}>
                <a href="/">Default link</a>
            </CardFooter>
        </CardContent>
    </CardContainer>
);

export default Card;
