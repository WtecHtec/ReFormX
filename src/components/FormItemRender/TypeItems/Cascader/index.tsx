import { Cascader } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const CascaderItem = ({ item, optionsData }: DynamicFormItemProps) => {
    const options = optionsData[item.name] || item.options || [];
    return (
        <Cascader
            options={options}
            placeholder={item?.placeholder}
            {...(item?.extraProps || {})}
        />
    );
};

export default CascaderItem;