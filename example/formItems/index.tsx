
import { formConfig } from "./config";
import DynamicForm from "../../src/components/DynamicForm";
import { stringifyConfig } from "../utils";




export default function FormItemsApp() {
    const handleSubmit = (values: Record<string, any>) => {
      console.log("表单提交数据:", values);
    };
  
    return  <div>
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
    <DynamicForm config={formConfig} onSubmit={handleSubmit} />;
  </div>;
  }