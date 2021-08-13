import React, { FC } from 'react';
import CardBody, { ICardBodyClassNames, ICardBodyProps } from '../CardBody';
import styles from './CardBody.module.css';

interface IMozaicCardBodyProps extends Omit<ICardBodyProps, 'classNames'> {}

const classNames: ICardBodyClassNames = {
    container: styles.container
};

const MozaicCardBody: FC<IMozaicCardBodyProps> = props => <CardBody classNames={classNames} {...props} />;

export default MozaicCardBody;
