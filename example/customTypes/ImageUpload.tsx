import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useState, useEffect } from 'react';
import { DynamicFormItemProps } from '../../src/types/props';



const ImageUpload = ({ item, form }: DynamicFormItemProps) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    // 处理默认值
    useEffect(() => {
        if (item.defaultValue) {
            const defaultFiles = Array.isArray(item.defaultValue) 
                ? item.defaultValue 
                : [item.defaultValue];
            
            const initialFileList = defaultFiles.map((url: string, index: number) => ({
                uid: `-${index}`,
                name: `image-${index}`,
                status: 'done',
                url: url,
            }));
            
            setFileList(initialFileList);
        }
    }, [item.defaultValue]);

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        
        // 更新表单值
        const urls = newFileList
            .filter(file => file.status === 'done')
            .map(file => file.url || file.response?.url);
            
        form.setFieldValue(item.name, urls);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>上传</div>
        </div>
    );

    return (
        <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            {...(item?.extraProps || {})}
        >
            {fileList.length >= (item?.extraProps?.maxCount || 999) ? null : uploadButton}
        </Upload>
    );
};

export default ImageUpload;