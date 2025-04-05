import { InputNumber } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const InputNumberItem = ({ item }: DynamicFormItemProps) => {
    return <InputNumber placeholder={item?.placeholder} {...(item?.extraProps || {})} />;
};

export default InputNumberItem;