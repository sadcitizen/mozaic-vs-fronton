import React, { FC } from 'react';
import CardContainer, { ICardContainerClassNames, ICardContainerProps } from '../CardContainer';
import styles from './CardContainer.module.css';

const classNames: ICardContainerClassNames = {
    container: styles.container,
};

const FrontonCardContainer: FC<ICardContainerProps> = props => <CardContainer classNames={classNames} {...props} />;

export default FrontonCardContainer;
