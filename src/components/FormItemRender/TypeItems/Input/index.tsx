import { Input } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";


const InputItem = ({ item }: DynamicFormItemProps) => {
    return <Input placeholder={item?.placeholder} {...(item?.extraProps || {})} />
}
export default InputItem;