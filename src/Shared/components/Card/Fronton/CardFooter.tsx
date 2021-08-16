import CardFooter, { ICardFooterClassNames, ICardFooterProps } from '../CardFooter';
import withClassNames from '../../../hocs/withClassNames';
import styles from './CardFooter.module.css';

export default withClassNames<ICardFooterProps, ICardFooterClassNames>(CardFooter, {
    container: styles.container
});
