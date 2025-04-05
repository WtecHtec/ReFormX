import { IFormConfig } from "../../../../src/types/form";

export const formConfig: IFormConfig = {
  groups: [
    {
      layout: "custom",
      items: [
        {
          type: "select",
          name: "deliveryType",
          label: "配送方式",
          options: [
            { label: "快递配送", value: "express" },
            { label: "上门自提", value: "self" }
          ]
        },
        {
          type: "input",
          name: "address",
          label: "配送地址",
          visible: (values) => values.deliveryType === "express",
          visibleDeps: ["deliveryType"]
        },
        {
          type: "select",
          name: "pickupStore",
          label: "自提门店",
          visible: (values) => values.deliveryType === "self",
          visibleDeps: ["deliveryType"],
          fetchOptions: async () => {
            // 模拟异步获取门店列表
            await new Promise(resolve => setTimeout(resolve, 1000));
            return [
              { label: "北京店", value: "bj" },
              { label: "上海店", value: "sh" }
            ];
          }
        },
        {
          type: "datePicker",
          name: "pickupTime",
          label: "自提时间",
          visible: (values) => values.deliveryType === "self" && values.pickupStore,
          visibleDeps: ["deliveryType", "pickupStore"],
          extraProps: {
            showTime: true,
            format: "YYYY-MM-DD HH:mm"
          }
        }
      ]
    }
  ]
};