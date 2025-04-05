import { Input } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const { TextArea } = Input;

const TextAreaItem = ({ item }: DynamicFormItemProps) => {
    return <TextArea placeholder={item?.placeholder} {...(item?.extraProps || {})} />;
};

export default TextAreaItem;