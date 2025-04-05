
import { IFormConfig } from "../../../../src/types/form";
import { Button, Form, Space } from 'antd';


const CustomTags = ({ value, onChange} : { value?: any, onChange?: any}) => {
    const tags = value || [];
    console.log( "CustomTags::", tags);
    return   <Space wrap>
    {['热门', '推荐', '新品'].map(tag => (
        <Button
            key={tag}
            type={tags.includes(tag) ? 'primary' : 'default'}
            onClick={() => {
                const newTags = tags.includes(tag)
                    ? tags.filter(t => t !== tag)
                    : [...tags, tag];
                    onChange?.(newTags);
            }}
        >
            {tag}
        </Button>
    ))}
    </Space>
}



            export const formConfig: IFormConfig = {
                groups: [
            {
                layout: "custom",
            items: [
            {
                type: "custom",
            name: "price",
            label: "价格",
            render: ({form, forceUpdate, item}) => {
            const price = form.getFieldValue('price') || 0;
            return (
            <Form.Item label={String((item as any)?.label) || ''} name={(item as any)?.name}>
                <Space>
                    <Button
                        onClick={() => {
                            form.setFields([{
                                name: 'price',
                                value: price - 1
                            }]);
                            forceUpdate?.();
                        }}
                        disabled={price <= 0}
                    >-</Button>
                    <span>{price}</span>
                    <Button
                        onClick={() => {
                            form.setFieldValue('price', price + 1)
                            forceUpdate?.();
                        }}
                    >+</Button>
                </Space>
            </Form.Item>
            );
          }
        },
            {
                type: "custom",
            name: "tags",
            label: "标签",
            render: ({form, forceUpdate, item}) => {
            const tags = form.getFieldValue('tags') || [];
            return (
            <Form.Item label={String((item as any)?.label) || ''} name={(item as any)?.name}>
                <CustomTags />
                {/* <Space wrap>
                    {['热门', '推荐', '新品'].map(tag => (
                        <Button
                            key={tag}
                            type={tags.includes(tag) ? 'primary' : 'default'}
                            onClick={() => {
                                const newTags = tags.includes(tag)
                                    ? tags.filter(t => t !== tag)
                                    : [...tags, tag];
                                form.setFieldValue('tags', newTags);
                                forceUpdate?.();
                            }}
                        >
                            {tag}
                        </Button>
                    ))}
                </Space> */}
            </Form.Item>
            );
          }
        }
            ]
    }
            ]
};