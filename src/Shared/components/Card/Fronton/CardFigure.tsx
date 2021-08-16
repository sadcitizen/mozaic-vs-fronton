import CardFigure, { ICardFigureClassNames, ICardFigureProps } from '../CardFigure';
import withClassNames from '../../../hocs/withClassNames';
import styles from './CardFigure.module.css';

export default withClassNames<ICardFigureProps, ICardFigureClassNames>(CardFigure, {
    container: styles.container,
    image: styles.image
});
