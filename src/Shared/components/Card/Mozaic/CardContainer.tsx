import React, { FC } from 'react';
import CardContainer, { ICardContainerClassNames, ICardContainerProps } from '../CardContainer';

const classNames: ICardContainerClassNames = {
    container: 'mc-card',
};

const MozaicCardContainer: FC<ICardContainerProps> = props => <CardContainer classNames={classNames} {...props} />;

export default MozaicCardContainer;
