import React, { FC } from 'react';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardBodyClassNames {
    container: string;
}

export interface ICardBodyProps {}

interface IProps extends ICardBodyProps, IClassNames<ICardBodyClassNames> {}

const CardBody: FC<IProps> = ({ classNames, children }) => (
    <div className={classNames.container}>
        { children }
    </div>
);

export default CardBody;
