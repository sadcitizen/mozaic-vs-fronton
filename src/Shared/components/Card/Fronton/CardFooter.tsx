import CardFooter, { ICardFooterClassNames, ICardFooterProps } from '../CardFooter';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Card.module.css';

export default withClassNames<ICardFooterProps, ICardFooterClassNames>(CardFooter, {
    footer: styles.footer
});
