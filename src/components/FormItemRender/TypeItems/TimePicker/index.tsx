import { TimePicker } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const TimePickerItem = ({ item }: DynamicFormItemProps) => {
    return <TimePicker placeholder={item?.placeholder} {...(item?.extraProps || {})} />
};

export default TimePickerItem;