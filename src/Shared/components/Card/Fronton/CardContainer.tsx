import React, { FC } from 'react';
import CardContainer, { ICardContainerClassNames, ICardContainerProps } from '../CardContainer';
import styles from './CardContainer.module.css';

interface IFrontonCardContainerProps extends Omit<ICardContainerProps, 'classNames'> {}

const classNames: ICardContainerClassNames = {
    container: styles.container,
};

const FrontonCardContainer: FC<IFrontonCardContainerProps> = props => <CardContainer classNames={classNames} {...props} />;

export default FrontonCardContainer;
