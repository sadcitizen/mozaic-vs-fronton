import RadioIndicatorOff, { IRadioIndicatorOffProps, IRadioIndicatorOffClassNames } from '../RadioIndicatorOff';
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<IRadioIndicatorOffProps, IRadioIndicatorOffClassNames>(RadioIndicatorOff, {
    indicator: 'mc-radio__indicator'
});
