import { IFormConfig } from "../../src/types/form";
export const formConfig: IFormConfig = {
    groups: [
      {
        layout: "custom",
        columns: 3,
        items: [
          { type: "checkbox", name: "disabled", label: '', valueLabel: "是否显示公司", defaultValue: true, extraFormItemProps: {
            valuePropName: "checked",
          }},
          { type: "input", name: "company", label: "公司", visible: (data) => {
            return !!data.disabled;
          }, visibleDeps: ["disabled"]  },

          { type: "select", name: "role", label: "角色",  defaultValue: 'admin', 
  
            fetchOptions: async () => {
            await new Promise((r) => setTimeout(r, 2000)); // 模拟 API 请求
              return [{ label: "管理员11", value: "admin" }, { label: "用户", value: "user" }]
          }  },

       
        ],
      },
    ],
  };
  
