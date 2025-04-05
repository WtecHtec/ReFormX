import { ColorPicker } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const ColorPickerItem = ({ item }: DynamicFormItemProps) => {
    return <ColorPicker {...(item?.extraProps || {})} />;
};

export default ColorPickerItem;