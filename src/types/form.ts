import { FormInstance } from "antd";

export interface IRenderNodeParams {
    item: IFormItemConfig | FormGroupConfig | IFormConfig;
    form: FormInstance;
    extraState: any;
    updateState: (key: any, value: any) => void;
    currentStep?: number;
    values?: any;
    extra?: Record<string, any>;
    forceUpdate?: () => void;
}

export type TRenderNode = (datas: IRenderNodeParams) => React.ReactNode;



// 表单配置
export interface IFormConfig {
    groups: FormGroupConfig[]; // 表单分组
    submitText?: string;
    renderSubmit?: TRenderNode; // 自定义提交区域
    customTypes?: Record<string, TRenderNode>; // 自定义表单项
    stepStyle?: React.CSSProperties; // 自定义表单项
}

// 表单元素配置
export interface IFormItemConfig {
    type: string;
    name: string;
    label: string;
    valueLabel?: string;
    placeholder?: string;
    rules?: any[];
    defaultValue?: any;
    options?: { label: string; value: any }[] | any[];
    fetchOptions?: (value?: any) => Promise<any>;
    dependencies?: string[]; // 依赖的表单字段
    render?: TRenderNode;
    visible?: (values: any, extraState: any, extra?: any) => boolean;
    visibleDeps?: string[]; // 依赖的表单字段
    extraProps?: Record<string, any>;
    extraFormItemProps?: Record<string, any>;
}



export interface IStepProps {
    title: string;
    prevText?: string;
    nextText?: string;
    onPrev?: (data: any) => void;
    onNext?: (data: any) => void;
    extra?: TRenderNode;
}
// FormGroup 配置
export interface FormGroupConfig {
    layout: "grid" | "tabs" | "inline" | "collapse" | "step" | "custom" ;
    stepIndex?: number; // 仅 step 模式下有效
    step?: IStepProps; // 仅 step 模式下有效
    columns?: number; // 仅 grid 模式下有效
    items: IFormItemConfig[];
    title?: string;
    tabs?: { title: string; items: IFormItemConfig[] }[];
    extraProps?: Record<string, any>;
}


