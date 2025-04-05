import { useState } from 'react';

import InlineApp from './inline';
import GridApp from './grid';
import TabsApp from './tabs';
import CollapseApp from './collapse';
import LinkageApp from './package/linkage';
import FormItemsApp from './formItems';
import FetchApp from './fetchOptions';
import FetchByStateApp from './fetchOptionsExtstate';
import CustomTypesApp from './package/customTypes';
import BaseAPP from './package/base';
import AsyncApp from './package/async';
import StepApp from './package/step';
import RulesApp from './package/rules';
import DynamicApp from './package/dynamic';
export default function App() {
  const [currentDemo, setCurrentDemo] = useState('formItems');

  const demos = {
    formItems: { title: '常用表单组件', component: <FormItemsApp /> },
  
    inline: { title: 'Inline 布局', component: <InlineApp /> },
    
   
  
   
    fetchData: { title: '异步数据', component: <FetchApp /> },
    fetchDataByExt: { title: '异步数据-自定义状态', component: <FetchByStateApp /> },
  
    base: { title: '基础用法', component: <BaseAPP /> },
    linkage: { title: '联动表单', component: <LinkageApp /> },
    async: { title: '异步加载', component: <AsyncApp /> },
    step: { title: '分步表单', component: <StepApp /> },

    customTypesApp: { title: '自定义表单项', component: <CustomTypesApp />  },
    rules: { title: '表单校验', component: <RulesApp /> },
    grid: { title: '网格布局', component: <GridApp /> },
    tabs: { title: '标签页布局', component: <TabsApp /> },
    collapse: { title: '折叠面板', component: <CollapseApp /> },
    dynamic: { title: '动态表单', component: <DynamicApp /> },
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <select 
          value={currentDemo} 
          onChange={(e) => setCurrentDemo(e.target.value)}
          style={{ 
            padding: '8px', 
            fontSize: '16px',
            border: '1px solid #d9d9d9',
            borderRadius: '6px',
            outline: 'none'
          }}
        >
          {Object.entries(demos).map(([key, { title }]) => (
            <option key={key} value={key}>{title}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h1>{demos[currentDemo as keyof typeof demos].title}</h1>
      </div>

      {demos[currentDemo as keyof typeof demos].component}
    </div>
  )
}