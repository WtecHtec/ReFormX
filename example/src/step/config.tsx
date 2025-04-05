import { Button } from "antd";
import { IFormConfig } from "../../../src/types/form";


export const formConfig: IFormConfig = {
    stepStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    groups: [
      {
        layout: "step",
        stepIndex: 0,
        step:  { title: "基本信息", nextText: "继续", 
          extra:(data) => {
            const { form, extra } = data
            return <Button 
            style={{ marginLeft: 8 }}
            onClick={() => {
              form.validateFields().then((values) => {
                extra?.setCurrentStep((prev: number) => prev + 1);
              });
             
            }}> 下一步</Button>
        } },
        items: [{ type: "input", name: "name", label: "姓名", rules: [{ required: true, message: "请输入姓名" }] }],
      },
      {
        layout: "step",
        stepIndex: 1,
        step:  { title: "详细信息", prevText: "返回", nextText: "下一步" },
        items: [{ type: "input", name: "email", label: "邮箱", rules: [{ required: true, message: "请输入邮箱" }] }],
      },
      {
        layout: "step",
        stepIndex: 2,
        step: { title: "完成", prevText: "上一步", nextText: "提交" },
        items: [{ type: "input", name: "summary", label: "总结" }],
      },
    ],
  };
  
 