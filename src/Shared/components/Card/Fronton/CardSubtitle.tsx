import CardSubtitle, { ICardSubtitleClassNames, ICardSubtitleProps } from '../CardSubtitle';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Card.module.css';

export default withClassNames<ICardSubtitleProps, ICardSubtitleClassNames>(CardSubtitle, {
    subtitle: styles.subtitle
});
