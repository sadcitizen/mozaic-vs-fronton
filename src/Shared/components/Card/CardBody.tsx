import React, { FC } from 'react';
import cn from 'classnames';
import { IClassNames } from '../../domain/ClassNames';

export interface ICardBodyClassNames {
    body: string;
}

export interface ICardBodyProps {
    className?: string
}

interface IProps extends ICardBodyProps, IClassNames<ICardBodyClassNames> {}

const CardBody: FC<IProps> = ({ classNames, className, children }) => (
    <div className={cn(classNames.body, className)}>
        { children }
    </div>
);

export default CardBody;
