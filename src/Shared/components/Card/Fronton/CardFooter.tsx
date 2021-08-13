import React, { FC } from 'react';
import CardFooter, { ICardFooterClassNames, ICardFooterProps } from '../CardFooter';
import styles from './CardFooter.module.css';

interface IFrontonCardFooterProps extends Omit<ICardFooterProps, 'classNames'> {}

const classNames: ICardFooterClassNames = {
    container: styles.container
};

const FrontonCardFooter: FC<IFrontonCardFooterProps> = props => <CardFooter classNames={classNames} {...props} />;

export default FrontonCardFooter;
