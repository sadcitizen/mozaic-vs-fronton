import React, { FC } from 'react';
import CardBody, { ICardBodyClassNames, ICardBodyProps } from '../CardBody';
import withClassNames from '../../../hocs/withClassNames';
import styles from './CardBody.module.css';

interface IFrontonCardBodyProps extends Omit<ICardBodyProps, 'classNames'> {}

export default withClassNames<ICardBodyProps, ICardBodyClassNames>(CardBody, {
    container: styles.container
});
