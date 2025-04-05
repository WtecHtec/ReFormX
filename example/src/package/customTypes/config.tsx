import { IFormConfig } from "../../../../src/types/form";

const formConfig: IFormConfig = {
    groups: [{
        layout: 'grid',
        items: [{
            type: 'imageUpload',
            name: 'photos',
            label: '图片上传',
            defaultValue: ['https://example.com/default.jpg'],
            extraProps: {
                maxCount: 5, // 最大上传数量
                action: 'https://your-upload-url', // 上传地址
                // 其他 Upload 组件的属性
            }
        }]
    }],
}

export default formConfig;