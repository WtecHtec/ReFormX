import { formConfig } from "./config";
import { stringifyConfig } from "../../../utils";
import { DynamicForm } from "reformx"

export default function InitialValuesApp() {

    const initialValues = {
        username: '张三',
        password: '13800138000',
       
       
      };
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <h3>配置信息</h3>
                <pre style={{ 
                    background: '#f5f5f5', 
                    padding: '15px', 
                    borderRadius: '4px',
                    overflow: 'auto',
                    maxHeight: '300px'
                }}>
                  {stringifyConfig(formConfig)}
                </pre>
            </div>
            <DynamicForm 
                initialValues={initialValues}
                config={formConfig} 
                onSubmit={(values) => console.log("提交数据:", values)} 
            />
        </div>
    );
}