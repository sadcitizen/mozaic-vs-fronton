import RadioIndicatorOn, { IRadioIndicatorOnProps, IRadioIndicatorOnClassNames } from '../RadioIndicatorOn';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Radio.module.css';

export default withClassNames<IRadioIndicatorOnProps, IRadioIndicatorOnClassNames>(RadioIndicatorOn, {
    indicator: styles.indicator
});
