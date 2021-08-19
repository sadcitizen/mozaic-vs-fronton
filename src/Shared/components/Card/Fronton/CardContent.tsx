import CardContent, { ICardContentClassNames, ICardContentProps } from '../CardContent';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Card.module.css';

export default withClassNames<ICardContentProps, ICardContentClassNames>(CardContent, {
    content: styles.content
});
