import React, { FC } from 'react';
import CardFooter, { ICardFooterClassNames, ICardFooterProps } from '../CardFooter';
import styles from './CardFooter.module.css';

interface IMozaicCardFooterProps extends Omit<ICardFooterProps, 'classNames'> {}

const classNames: ICardFooterClassNames = {
    container: styles.container
};

const MozaicCardFooter: FC<IMozaicCardFooterProps> = props => <CardFooter classNames={classNames} {...props} />;

export default MozaicCardFooter;
