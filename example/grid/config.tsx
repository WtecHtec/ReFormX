import { IFormConfig } from "../../src/types/form";

export const formConfig: IFormConfig = {
  groups: [
    {
      layout: "grid",
      columns: 3,
      items: [
        {
          type: "input",
          name: "field1",
          label: "字段1",
          extraFormItemProps: {
            span: 8
          }
        },
        {
          type: "input",
          name: "field2",
          label: "字段2",
          extraFormItemProps: {
            span: 8
          }
        },
        {
          type: "input",
          name: "field3",
          label: "字段3",
          extraFormItemProps: {
            span: 8
          }
        },
        {
          type: "textarea",
          name: "description",
          label: "描述",
          extraFormItemProps: {
            span: 24
          }
        }
      ]
    }
  ]
};