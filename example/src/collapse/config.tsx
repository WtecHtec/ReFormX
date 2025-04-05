import { IFormConfig } from "../../../src/types/form";

export const formConfig: IFormConfig = {
  groups: [
    {
      layout: "collapse",
      title: "基础设置",
      extraProps: {
        style: {
          marginBottom: "8px"
        }
      },
      items: [
        {
          type: "input",
          name: "name",
          label: "应用名称",
          rules: [{ required: true, message: "请输入应用名称" }]
        },
        {
          type: "select",
          name: "type",
          label: "应用类型",
          options: [
            { label: "Web应用", value: "web" },
            { label: "移动应用", value: "mobile" }
          ]
        }
      ]
    },
    {
      layout: "collapse",
      title: "高级设置",
      items: [
        {
          type: "input",
          name: "apiKey",
          label: "API密钥"
        },
        {
          type: "switch",
          name: "debugMode",
          label: "调试模式"
        }
      ]
    }
  ]
};
