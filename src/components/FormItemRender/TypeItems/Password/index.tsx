import { Input } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const PasswordItem = ({ item }: DynamicFormItemProps) => {
    return (
        <Input.Password
            placeholder={item?.placeholder}
            {...(item?.extraProps || {})}
        />
    );
};

export default PasswordItem;