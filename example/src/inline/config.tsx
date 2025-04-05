import { IFormConfig } from "../../../src/types/form";
export const formConfig: IFormConfig = {
    groups: [
      {
        layout: "inline",
        items: [
          { type: "input", name: "username", label: "用户名", defaultValue: "张三" },
          { type: "input", name: "email", label: "邮箱" },
        ],
      },
    ],
  };
  
