import { IFormConfig } from "../../../../src/types/form";

export const formConfig: IFormConfig = {
  groups: [
    {
      layout: "custom",
      items: [
        {
          type: "select",
          name: "province",
          label: "省份",
          fetchOptions: async () => {
            // 模拟异步请求
            await new Promise(resolve => setTimeout(resolve, 1000));
            return [
              { label: "浙江", value: "zj" },
              { label: "江苏", value: "js" }
            ];
          }
        },
        {
          type: "select",
          name: "city",
          label: "城市",
          dependencies: ["province"],
          fetchOptions: async ({ values }) => {
            // 模拟基于省份的城市数据
            await new Promise(resolve => setTimeout(resolve, 1000));
            const cityMap = {
              zj: [
                { label: "杭州", value: "hz" },
                { label: "宁波", value: "nb" }
              ],
              js: [
                { label: "南京", value: "nj" },
                { label: "苏州", value: "sz" }
              ]
            };
            return cityMap[values.province] || [];
          }
        }
      ]
    }
  ]
};