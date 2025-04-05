import { IFormConfig } from "../../../src/types/form";

export const formConfig: IFormConfig = {
  groups: [
    {
      layout: "custom",
      items: [
        {
          type: "select",
          name: "questionType",
          label: "问题类型",
          options: [
            { label: "单行文本", value: "text" },
            { label: "多选", value: "checkbox" },
            { label: "单选", value: "radio" }
          ],
          dependencies: [],
          visible: () => true
        },
        {
          type: "input",
          name: "textQuestion",
          label: "问题内容",
          visible: (values) => values.questionType === "text",
          visibleDeps: ["questionType"]
        },
        {
          type: "checkboxGroup",
          name: "checkboxOptions",
          label: "选项列表",
          options: [
            { label: "选项1", value: "1" },
            { label: "选项2", value: "2" },
            { label: "选项3", value: "3" }
          ],
          visible: (values) => values.questionType === "checkbox",
          visibleDeps: ["questionType"]
        },
        {
          type: "radio",
          name: "radioOptions",
          label: "选项列表",
          options: [
            { label: "选项A", value: "A" },
            { label: "选项B", value: "B" },
            { label: "选项C", value: "C" }
          ],
          visible: (values) => values.questionType === "radio",
          visibleDeps: ["questionType"]
        }
      ]
    }
  ]
};