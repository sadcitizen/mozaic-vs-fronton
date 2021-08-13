import React, { FC } from 'react';
import CardTitle, { ICardTitleClassNames, ICardTitleProps } from '../CardTitle';
import styles from './CardTitle.module.css';

interface IFrontonCardTitleProps extends Omit<ICardTitleProps, 'classNames'> {}

const classNames: ICardTitleClassNames = {
    title: styles.title
};

const FrontonCardTitle: FC<IFrontonCardTitleProps> = props => <CardTitle classNames={classNames} {...props} />;

export default FrontonCardTitle;
