import React, { FC } from 'react';
import CardBody, { ICardBodyClassNames, ICardBodyProps } from '../CardBody';

interface IMozaicCardBodyProps extends Omit<ICardBodyProps, 'classNames'> {}

const classNames: ICardBodyClassNames = {
    container: 'mc-card__body'
};

const MozaicCardBody: FC<IMozaicCardBodyProps> = props => <CardBody classNames={classNames} {...props} />;

export default MozaicCardBody;
