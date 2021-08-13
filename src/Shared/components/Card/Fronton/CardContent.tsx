import React, { FC } from 'react';
import CardContent, { ICardContentClassNames, ICardContentProps } from '../CardContent';
import styles from './CardContent.module.css';

interface IFrontonCardContentProps extends Omit<ICardContentProps, 'classNames'> {}

const classNames: ICardContentClassNames = {
    container: styles.container
};

const FrontonCardContent: FC<IFrontonCardContentProps> = props => <CardContent classNames={classNames} {...props} />;

export default FrontonCardContent;
