import React, { FC } from 'react';
import CardContainer, { ICardContainerClassNames, ICardContainerProps } from '../CardContainer';

interface IMozaicCardContainerProps extends Omit<ICardContainerProps, 'classNames'> {}

const classNames: ICardContainerClassNames = {
    container: 'mc-card',
};

const MozaicCardContainer: FC<IMozaicCardContainerProps> = props => <CardContainer classNames={classNames} {...props} />;

export default MozaicCardContainer;
