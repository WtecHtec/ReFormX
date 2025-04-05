import { IFormConfig } from "../../../src/types/form";

export const formConfig: IFormConfig = {
  stepStyle: {
    marginBottom: 24,
    textAlign: 'center',
  },
  groups: [
    {
      layout: "step",
      stepIndex: 0,
      step: { 
        title: "基本信息", 
        nextText: "下一步",
        onNext: ({ form }) => {
          console.log('第一步表单数据:', form.getFieldsValue());
        }
      },
      items: [
        {
          type: "input",
          name: "name",
          label: "姓名",
          rules: [{ required: true, message: "请输入姓名" }]
        },
        {
          type: "input",
          name: "phone",
          label: "电话",
          rules: [{ required: true, message: "请输入电话" }]
        }
      ]
    },
    {
      layout: "step",
      stepIndex: 1,
      step: { 
        title: "公司信息",
        prevText: "上一步",
        nextText: "下一步"
      },
      items: [
        {
          type: "input",
          name: "company",
          label: "公司名称",
          rules: [{ required: true, message: "请输入公司名称" }]
        }
      ]
    },
    {
      layout: "step",
      stepIndex: 2,
      step: { 
        title: "确认信息",
        prevText: "上一步",
        nextText: "提交"
      },
      items: [
        {
          type: "textarea",
          name: "remark",
          label: "备注信息"
        }
      ]
    }
  ]
};