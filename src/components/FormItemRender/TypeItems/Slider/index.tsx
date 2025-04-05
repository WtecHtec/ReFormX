import { Slider } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const SliderItem = ({ item }: DynamicFormItemProps) => {
    return <Slider {...(item?.extraProps || {})} />
};

export default SliderItem;