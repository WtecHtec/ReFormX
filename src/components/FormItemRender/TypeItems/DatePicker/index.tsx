import { DatePicker } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const DatePickerItem = ({ item }: DynamicFormItemProps) => {
    return <DatePicker placeholder={item?.placeholder} {...(item?.extraProps || {})} />
};

export default DatePickerItem;