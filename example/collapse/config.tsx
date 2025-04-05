import { IFormConfig } from "../../src/types/form";
export const formConfig: IFormConfig = {
    groups: [
      {
        layout: "collapse",
        title: "高级设置",
        items: [
          { type: "input", name: "apiKey", label: "API Key" },
          { type: "input", name: "secret", label: "Secret Key" },
        ],
      },
    ],
  };
  
