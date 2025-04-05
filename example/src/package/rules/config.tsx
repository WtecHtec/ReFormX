import { IFormConfig } from "../../../../src/types/form";

export const formConfig: IFormConfig = {
  groups: [
    {
      layout: "custom",
      items: [
        {
          type: "input",
          name: "email",
          label: "邮箱",
          rules: [
            { required: true, message: "请输入邮箱" },
            { type: "email", message: "请输入正确的邮箱格式" }
          ]
        },
        {
          type: "input",
          name: "password",
          label: "密码",
          rules: [
            { required: true, message: "请输入密码" },
            { min: 6, message: "密码长度不能小于6位" },
            { 
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,}$/,
              message: "密码必须包含大小写字母和数字" 
            }
          ]
        },
        {
          type: "input",
          name: "confirmPassword",
          label: "确认密码",
          rules: [
            { required: true, message: "请确认密码" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次输入的密码不一致'));
              },
            }),
          ]
        }
      ]
    }
  ]
};