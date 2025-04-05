import { Checkbox } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const CheckboxGroupItem = ({ item, optionsData }: DynamicFormItemProps) => {
    const options = optionsData[item.name] || item.options || [];
    return (
        <Checkbox.Group
            options={options}
            {...(item?.extraProps || {})}
        />
    );
};

export default CheckboxGroupItem;