import React, { FC } from 'react';
import CardBody, { ICardBodyClassNames, ICardBodyProps } from '../CardBody';
import styles from './CardBody.module.css';

interface IFrontonCardBodyProps extends Omit<ICardBodyProps, 'classNames'> {}

const classNames: ICardBodyClassNames = {
    container: styles.container
};

const FrontonCardBody: FC<IFrontonCardBodyProps> = props => <CardBody classNames={classNames} {...props} />;

export default FrontonCardBody;
