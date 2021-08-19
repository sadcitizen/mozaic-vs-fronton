import RadioIndicatorOff, { IRadioIndicatorOffProps, IRadioIndicatorOffClassNames } from '../RadioIndicatorOff';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Radio.module.css';

export default withClassNames<IRadioIndicatorOffProps, IRadioIndicatorOffClassNames>(RadioIndicatorOff, {
    indicator: styles.indicator
});
