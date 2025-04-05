
# ReFormX

ReFormX 是一个基于 React 和 Ant Design 的动态表单解决方案，通过简单的配置即可生成功能强大的表单。

## 特性

- 🚀 配置驱动，快速开发
- 📦 丰富的表单项类型
- 🎨 灵活的布局方式（Grid、Tabs、Steps等）
- 🔗 强大的联动能力
- 🛠 支持自定义组件

## 安装

```bash
npm install reformx
```

## 基础使用

```tsx
import { DynamicForm } from 'reformx';

const config = {
  groups: [
    {
      layout: "custom",
      items: [
        {
          type: "input",
          name: "username",
          label: "用户名",
          rules: [{ required: true, message: "请输入用户名" }]
        },
        {
          type: "password",
          name: "password",
          label: "密码",
          rules: [{ required: true, message: "请输入密码" }]
        }
      ]
    }
  ]
};

export default function BasicForm() {
  const handleSubmit = (values) => {
    console.log('表单数据:', values);
  };

  return <DynamicForm config={config} onSubmit={handleSubmit} />;
}
```

## 布局类型

### 网格布局
```tsx
{
  layout: "grid",
  columns: 3,  // 3列布局
  items: [...]
}
```

### 标签页布局
```tsx
{
  layout: "tabs",
  tabs: [
    {
      title: "基本信息",
      items: [...]
    },
    {
      title: "扩展信息",
      items: [...]
    }
  ]
}
```

### 步骤表单
```tsx
{
  layout: "step",
  step: {
    title: "第一步",
    nextText: "下一步",
    prevText: "上一步"
  },
  items: [...]
}
```

## 表单联动

### 显示隐藏联动
```tsx
{
  type: "input",
  name: "other",
  label: "其他选项",
  visible: (values) => values.type === 'other',
  visibleDeps: ["type"]
}
```

### 选项联动
```tsx
{
  type: "select",
  name: "city",
  label: "城市",
  dependencies: ["province"],
  fetchOptions: async ({ values }) => {
    const cities = await fetchCitiesByProvince(values.province);
    return cities;
  }
}
```

## 自定义组件

```tsx
const MyCustomComponent = ({ form, item }) => {
  return (
    <div>
      <input
        value={form.getFieldValue(item.name)}
        onChange={(e) => form.setFieldValue(item.name, e.target.value)}
      />
    </div>
  );
};

const config = {
  customTypes: {
    myCustom: {
      formItem: true,
      render: MyCustomComponent
    }
  },
  groups: [
    {
      layout: "custom",
      items: [
        {
          type: "myCustom",
          name: "customField",
          label: "自定义组件"
        }
      ]
    }
  ]
};
```

## API

### DynamicForm Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| config | 表单配置 | IFormConfig | - |
| onSubmit | 提交回调 | (values: any) => void | - |
| form | Form 实例 | FormInstance | - |
| initialValues | 初始值 | object | - |
| customTypes | 自定义组件类型 | object | - |
| footterStyle | 底部样式 | CSSProperties | - |
| isReset | 是否显示重置按钮 | boolean | false |

### FormConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| groups | 表单分组配置 | FormGroupConfig[] | - |
| submitText | 提交按钮文本 | string | '提交' |
| stepStyle | 步骤条样式 | CSSProperties | - |


# ReFormX 类型定义文档

## IRenderNodeParams 接口参数
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| item | IFormItemConfig \| FormGroupConfig \| IFormConfig | 是 | 表单项配置、表单组配置或表单配置 |
| form | FormInstance | 是 | antd 表单实例 |
| extraState | any | 是 | 额外的状态数据 |
| updateState | (key: any, value: any) => void | 是 | 更新状态的函数 |
| currentStep | number | 否 | 当前步骤（分步表单使用） |
| values | any | 否 | 表单值 |
| extra | Record<string, any> | 否 | 额外的配置参数 |
| forceUpdate | () => void | 否 | 强制更新函数 |

## IFormConfig 表单配置
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| groups | FormGroupConfig[] | 是 | 表单分组配置数组 |
| submitText | string | 否 | 提交按钮文本 |
| renderSubmit | TRenderNode | 否 | 自定义提交区域渲染函数 |
| customTypes | Record<string, TRenderNode> | 否 | 自定义表单项类型映射 |
| stepStyle | React.CSSProperties | 否 | 步骤条样式 |

## IFormItemConfig 表单项配置
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| type | string | 是 | 表单项类型 |
| name | string | 是 | 表单项字段名 |
| label | string | 是 | 表单项标签 |
| valueLabel | string | 否 | 值的标签 |
| placeholder | string | 否 | 占位文本 |
| rules | any[] | 否 | 校验规则 |
| defaultValue | any | 否 | 默认值 |
| options | { label: string; value: any }[] \| any[] | 否 | 选项数组 |
| fetchOptions | (value?: any) => Promise<any> | 否 | 异步获取选项的函数 |
| dependencies | string[] | 否 | 依赖的其他表单字段 |
| render | TRenderNode | 否 | 自定义渲染函数 |
| visible | (values: any, extraState: any, extra?: any) => boolean | 否 | 控制显示隐藏的函数 |
| visibleDeps | string[] | 否 | 显示隐藏依赖的字段 |
| extraProps | Record<string, any> | 否 | 额外的属性配置 |
| extraFormItemProps | Record<string, any> | 否 | Form.Item 的额外属性 |

## IStepProps 步骤配置
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| title | string | 是 | 步骤标题 |
| prevText | string | 否 | 上一步按钮文本 |
| nextText | string | 否 | 下一步按钮文本 |
| onPrev | (data: any) => void | 否 | 点击上一步的回调 |
| onNext | (data: any) => void | 否 | 点击下一步的回调 |
| extra | TRenderNode | 否 | 额外的渲染内容 |

## FormGroupConfig 表单分组配置
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| layout | "grid" \| "tabs" \| "inline" \| "collapse" \| "step" \| "custom" | 是 | 布局类型 |
| stepIndex | number | 否 | 步骤索引（仅 step 布局） |
| step | IStepProps | 否 | 步骤配置（仅 step 布局） |
| columns | number | 否 | 列数（仅 grid 布局） |
| items | IFormItemConfig[] | 是 | 表单项配置数组 |
| title | string | 否 | 分组标题 |
| tabs | { title: string; items: IFormItemConfig[] }[] | 否 | 标签页配置（仅 tabs 布局） |
| extraProps | Record<string, any> | 否 | 额外的属性配置 |


# 其他

## 依赖checkbox表单联动时
额外配置
```js
extraFormItemProps: {
    valuePropName: "checked",
 }
```
## 自定义组件
组件提供 “TRenderNode” 类型，可用于自定义组件渲染。可以获取当前表单实例，更新表单状态等。
```js
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

```
item 表单配置项。
forceUpdate 用于强制更新表单。
updateState 用于更新拓展的状态变量。

这个配置可以用于自定义提交区域、自定义表单项目、步骤布局的操作区域等。



## License

