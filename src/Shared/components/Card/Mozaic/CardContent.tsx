import CardContent, { ICardContentClassNames, ICardContentProps } from '../CardContent';
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<ICardContentProps, ICardContentClassNames>(CardContent, {
    content: 'mc-card__content'
});
