
import { Select } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const { Option } = Select;
const SelectItem = ({ item, optionsData }: DynamicFormItemProps) => {
    return <Select placeholder={item.placeholder} {...(item?.extraProps || {})}>
        {((optionsData[item.name] || item.options) as any[])?.map((opt) => (
            <Option key={opt.value} value={opt.value}>
                {opt.label}
            </Option>
        ))}
    </Select>

}
export default SelectItem;