import renderFormItem from "..";
import { LayoutProps } from "./types";


const StepLayout = ({ group, formItem }: LayoutProps) => {
    // 只渲染当前步骤的表单项，但保持其他步骤的表单项在 Form 中
    const style = group.stepIndex !== formItem.currentStep ? { display: 'none' } : undefined;
    return <div style={style}>{group.items.map((item) => renderFormItem({ ...formItem, item }))}</div>
}

export default StepLayout;