
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

## License

