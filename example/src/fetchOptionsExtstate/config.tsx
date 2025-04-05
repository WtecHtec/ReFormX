import { Button } from "antd";
import { IFormConfig } from "../../../src/types/form";

// 模拟异步请求
const mockFetch = (type: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (type === 'A') {
        resolve([
          { label: '选项A-1', value: 'a1' },
          { label: '选项A-2', value: 'a2' },
          { label: '选项A-3', value: 'a3' },
        ]);
      } else {
        resolve([
          { label: '选项B-1', value: 'b1' },
          { label: '选项B-2', value: 'b2' },
          { label: '选项B-3', value: 'b3' },
        ]);
      }
    }, 1000);
  });
};

export const formConfig: IFormConfig = {
  groups: [
    {
      layout: "custom",
      columns: 3,
      items: [
        {
          type: "select",
          name: "subType",
          label: "子类型",
          rules: [{ required: true, message: "请选择子类型" }],
          dependencies: ["selectType"],
          fetchOptions: async ({ extraState }) => {
            console.log("values", extraState);
            // if (!extraState.selectType) return [];
            const data = await mockFetch(extraState.selectType);
            return data;
          },
        },
      ],
    }
  ]
};