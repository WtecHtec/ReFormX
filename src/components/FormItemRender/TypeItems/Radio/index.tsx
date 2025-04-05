import { Radio } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const RadioItem = ({ item, optionsData }: DynamicFormItemProps) => {
    return (
        <Radio.Group {...(item?.extraProps || {})}>
            {((optionsData[item.name] || item.options) as any[])?.map((opt) => (
                <Radio key={opt.value} value={opt.value}>
                    {opt.label}
                </Radio>
            ))}
        </Radio.Group>
    );
};

export default RadioItem;