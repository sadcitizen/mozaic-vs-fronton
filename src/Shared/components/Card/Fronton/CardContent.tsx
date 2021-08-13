import React, { FC } from 'react';
import CardContent, { ICardContentClassNames, ICardContentProps } from '../CardContent';
import styles from './CardContent.module.css';

const classNames: ICardContentClassNames = {
    container: styles.container
};

const FrontonCardContent: FC<ICardContentProps> = props => <CardContent classNames={classNames} {...props} />;

export default FrontonCardContent;
