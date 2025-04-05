import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { DynamicFormItemProps } from "../../../../types/props";

const UploadItem = ({ item }: DynamicFormItemProps) => {
    return (
        <Upload {...(item?.extraProps || {})}>
            <Button icon={<UploadOutlined />}>
                {item.placeholder || "点击上传"}
            </Button>
        </Upload>
    );
};

export default UploadItem;