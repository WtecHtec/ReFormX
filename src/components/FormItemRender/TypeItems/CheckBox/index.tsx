
import { Checkbox } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";


const CheckboxItem = ({ item }: DynamicFormItemProps) => {
    return <Checkbox placeholder={item?.placeholder} {...(item?.extraProps || {})} > {item.valueLabel} </Checkbox>
}
export default CheckboxItem;