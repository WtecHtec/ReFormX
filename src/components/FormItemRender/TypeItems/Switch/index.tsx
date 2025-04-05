import { Switch } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const SwitchItem = ({ item }: DynamicFormItemProps) => {
    return <Switch {...(item?.extraProps || {})} />
};

export default SwitchItem;