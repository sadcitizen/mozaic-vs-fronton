import React, { FC } from 'react';
import CardContainer, { ICardContainerClassNames, ICardContainerProps } from './CardContainer';
import styles from './FrontonCardContainer.module.css';

interface IMozaicCardContainerProps extends Omit<ICardContainerProps, 'classNames'> {}

const classNames: ICardContainerClassNames = {
    container: styles.container,
};

const MozaicCardContainer: FC<IMozaicCardContainerProps> = props => <CardContainer classNames={classNames} {...props} />;

export default MozaicCardContainer;
