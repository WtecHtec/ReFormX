import { IFormConfig } from "../../src/types/form";
export const formConfig: IFormConfig = {
    groups: [
      {
        layout: "grid",
        columns: 3,
        items: [
          { type: "input", name: "company", label: "公司" },
          { type: "input", name: "company", label: "公司" },
         
          { type: "select", name: "role", label: "角色",
            dependencies:["company"], fetchOptions: async () => {
            await new Promise((r) => setTimeout(r, 1000)); // 模拟 API 请求
              return [{ label: "管理员11", value: "admin" }, { label: "用户", value: "user" }]
          }  },
        ],
      },
    ],
  };
  
