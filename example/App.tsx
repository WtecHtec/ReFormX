import { useState } from 'react';
import StepApp from './step';
import InlineApp from './inline';
import GridApp from './grid';
import TabsApp from './tabs';
import CollapseApp from './collapse';
import LinkageApp from './linkage';
import FormItemsApp from './formItems';
import FetchApp from './fetchOptions';
import FetchByStateApp from './fetchOptionsExtstate';
import CustomTypesApp from './customTypes';
export default function App() {
  const [currentDemo, setCurrentDemo] = useState('formItems');

  const demos = {
    formItems: { title: '常用表单组件', component: <FormItemsApp /> },
    step: { title: 'Step 布局', component: <StepApp /> },
    inline: { title: 'Inline 布局', component: <InlineApp /> },
    grid: { title: 'Grid 布局', component: <GridApp /> },
    tabs: { title: 'Tabs布局', component: <TabsApp /> },
    collapse: { title: 'Collapse 布局', component: <CollapseApp /> },
    linkage: { title: '表单元素联动', component: <LinkageApp /> },
    fetchData: { title: '异步数据', component: <FetchApp /> },
    fetchDataByExt: { title: '异步数据-自定义状态', component: <FetchByStateApp /> },
    customTypesApp: { title: '自定义组件', component: <CustomTypesApp />  },
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <select 
          value={currentDemo} 
          onChange={(e) => setCurrentDemo(e.target.value)}
          style={{ padding: '8px', fontSize: '16px' }}
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
  );
}