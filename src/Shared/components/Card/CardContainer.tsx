import React, { FC } from 'react';

export interface ICardContainerClassNames {
    container: string;
}

export interface ICardContainerProps {
    classNames: ICardContainerClassNames;
}

const CardContainer: FC<ICardContainerProps> = ({ classNames, children }) => (
    <div className={classNames.container}>
        { children }
    </div>
);

export default CardContainer;
