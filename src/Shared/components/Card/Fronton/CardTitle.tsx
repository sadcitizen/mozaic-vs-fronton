import React, { FC } from 'react';
import CardTitle, { ICardTitleClassNames, ICardTitleProps } from '../CardTitle';
import styles from './CardTitle.module.css';

const classNames: ICardTitleClassNames = {
    title: styles.title
};

const FrontonCardTitle: FC<ICardTitleProps> = props => <CardTitle classNames={classNames} {...props} />;

export default FrontonCardTitle;
