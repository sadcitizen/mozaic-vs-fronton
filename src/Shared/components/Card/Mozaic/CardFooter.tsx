import CardFooter, { ICardFooterClassNames, ICardFooterProps } from '../CardFooter';
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<ICardFooterProps, ICardFooterClassNames>(CardFooter, {
    container: 'mc-card__footer'
});
