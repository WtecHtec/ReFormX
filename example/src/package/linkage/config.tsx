import { IFormConfig } from "../../../../src/types/form";

export const formConfig: IFormConfig = {
  groups: [
    {
      layout: "custom",
      items: [
        {
          type: "checkbox",
          name: "showAdvanced",
          label: "",
          valueLabel: "显示高级选项",
          extraFormItemProps: {
            valuePropName: "checked",
          }
        },
        {
          type: "input",
          name: "advanced",
          label: "高级配置",
          visible: (values) => values.showAdvanced,
          visibleDeps: ["showAdvanced"]
        }
      ]
    }
  ]
};