import { Rate } from "antd";
import { DynamicFormItemProps } from "../../../../types/props";

const RateItem = ({ item }: DynamicFormItemProps) => {
    return <Rate {...(item?.extraProps || {})} />;
};

export default RateItem;