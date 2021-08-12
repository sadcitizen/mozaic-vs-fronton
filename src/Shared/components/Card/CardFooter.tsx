import React, { FC } from 'react';

export interface ICardFooterClassNames {
    container: string;
}

export interface ICardFooterProps {
    classNames: ICardFooterClassNames;
}

const CardFooter: FC<ICardFooterProps> = ({ classNames, children }) => (
    <footer className={classNames.container}>
        { children }
    </footer>
);

export default CardFooter;
