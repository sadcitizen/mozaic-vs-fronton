import CardTitle, { ICardTitleClassNames, ICardTitleProps } from '../CardTitle';
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<ICardTitleProps, ICardTitleClassNames>(CardTitle, {
    title: 'mc-card__title'
});
