import React, { FC } from 'react';
import CardSubtitle, { ICardSubtitleClassNames, ICardSubtitleProps } from '../CardSubtitle';
import styles from './CardSubtitle.module.css';

const classNames: ICardSubtitleClassNames = {
    subtitle: styles.subtitle
};

const FrontonCardSubtitle: FC<ICardSubtitleProps> = props => <CardSubtitle classNames={classNames} {...props} />;

export default FrontonCardSubtitle;
