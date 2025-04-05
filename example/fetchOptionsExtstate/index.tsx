
import { formConfig } from "./config";
import DynamicForm from "../../src/components/DynamicForm";
import { stringifyConfig } from "../utils";
import React from "react";
import { Button } from "antd";




export default function FetchByStateApp() {

    const [state, setState] = React.useState({
        selectType: 'A'
    })
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
    <Button  onClick={() => {
       let  selectType = Math.random() > 0.3 ?  'B' : 'A'
        console.log('submit', selectType)
      setState(per => {
        return {
          ...per,
          selectType,
        }
      })
    }}>刷新选择器</Button>
    <DynamicForm config={formConfig} onSubmit={handleSubmit} extState={ state } />;
  </div>;
  }