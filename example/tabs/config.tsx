import { IFormConfig } from "../../src/types/form";
export const formConfig: IFormConfig = {
    groups: [
      {
        layout: "tabs",
        tabs: [
            { title: "个人信息", items: [{ type: "input", name: "phone", label: "手机号" }] },
            { title: "工作信息", items: [{ type: "input", name: "company", label: "公司" }] },
            { title: "角色信息", items: [{ type: "select", name: "role", label: "角色", 
             
                fetchOptions: async () => {
                await new Promise((r) => setTimeout(r, 2000)); // 模拟 API 请求
                  return [{ label: "管理员11", value: "admin" }, { label: "用户", value: "user" }]
              }  }], },
          ],
        items: [],
      }
    ],
  };
  
