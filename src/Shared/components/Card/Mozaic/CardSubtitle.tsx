import CardSubtitle, { ICardSubtitleClassNames, ICardSubtitleProps } from '../CardSubtitle';
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<ICardSubtitleProps, ICardSubtitleClassNames>(CardSubtitle, {
    subtitle: 'mc-card__subtitle'
});
