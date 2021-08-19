import CardTitle, { ICardTitleClassNames, ICardTitleProps } from '../CardTitle';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Card.module.css';

export default withClassNames<ICardTitleProps, ICardTitleClassNames>(CardTitle, {
    title: styles.title
});
