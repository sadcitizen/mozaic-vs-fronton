import React, { FC } from 'react';
import CardFooter, { ICardFooterClassNames, ICardFooterProps } from '../CardFooter';
import styles from './CardFooter.module.css';

const classNames: ICardFooterClassNames = {
    container: styles.container
};

const FrontonCardFooter: FC<ICardFooterProps> = props => <CardFooter classNames={classNames} {...props} />;

export default FrontonCardFooter;
