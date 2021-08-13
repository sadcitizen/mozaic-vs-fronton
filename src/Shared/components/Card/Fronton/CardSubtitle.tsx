import React, { FC } from 'react';
import CardSubtitle, { ICardSubtitleClassNames, ICardSubtitleProps } from '../CardSubtitle';
import styles from './CardSubtitle.module.css';

interface IFrontonCardTitleProps extends Omit<ICardSubtitleProps, 'classNames'> {}

const classNames: ICardSubtitleClassNames = {
    subtitle: styles.subtitle
};

const MozaicCardSubtitle: FC<IFrontonCardTitleProps> = props => <CardSubtitle classNames={classNames} {...props} />;

export default MozaicCardSubtitle;
