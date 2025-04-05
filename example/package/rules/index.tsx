import { formConfig } from "./config";
import { stringifyConfig } from "../../utils";
import { DynamicForm } from "reformx"
import React from "react";
export default function RulesApp() {
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
                config={formConfig} 
                onSubmit={(values) => console.log("提交数据:", values)} 
            />
        </div>
    )
}