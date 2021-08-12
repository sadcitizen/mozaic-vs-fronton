import React, { FC } from 'react';

export interface ICardBodyClassNames {
    container: string;
}

export interface ICardBodyProps {
    classNames: ICardBodyClassNames;
}

const CardBody: FC<ICardBodyProps> = ({ classNames, children }) => (
    <div className={classNames.container}>
        { children }
    </div>
);

export default CardBody;
