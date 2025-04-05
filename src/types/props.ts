import { FormInstance } from "antd";
import { IFormConfig, IFormItemConfig, TRenderNode } from "./form";
interface ICustomType {
    formItem: boolean;
    render: TRenderNode;
}

// 动态表单组件的 props
export interface DynamicFormProps {
    form?: FormInstance; // antd form 实例
    config: IFormConfig; // 表单项配置
    extState?: Record<string, any>; // 额外状态存储
    onSubmit?: (values: Record<string, any>) => void; // 
    renderSubmit?: TRenderNode; // 自定义提交区域
    customTypes?: Record<string, ICustomType>; // 自定义表单项
    footterStyle?: React.CSSProperties; // 自定义表单项
    initialValues?: Record<string, any>; // 初始值
    isReset?: boolean; // 是否重置表单
}

// 表单项组件的 props
export interface  DynamicFormItemProps {
    item: IFormItemConfig | any;
    loadingFields: Record<string, boolean>;
    optionsData: Record<string, any>;
    form: FormInstance;
    extraState: any;
    currentStep?: number;
    updateState: (key: string, value: any) => void;
    forceUpdate: () => void;
    customTypes?: Record<string, ICustomType>; // 自定义表单项
} 