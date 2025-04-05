import { IFormConfig } from "../../../../src/types/form";

export const formConfig: IFormConfig = {
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