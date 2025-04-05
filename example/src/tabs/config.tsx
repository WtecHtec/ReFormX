import { IFormConfig } from "../../../src/types/form";

export const formConfig: IFormConfig = {
  groups: [
    {
      layout: "tabs",
      items:[],
      tabs: [
        {
          title: "基本信息",
          items: [
            {
              type: "input",
              name: "username",
              label: "用户名",
              rules: [{ required: true, message: "请输入用户名" }]
            },
            {
              type: "input",
              name: "email",
              label: "邮箱",
              rules: [{ required: true, message: "请输入邮箱" }]
            }
          ]
        },
        {
          title: "扩展信息",
          items: [
            {
              type: "textarea",
              name: "bio",
              label: "个人简介"
            },
            {
              type: "upload",
              name: "avatar",
              label: "头像",
              extraProps: {
                action: "/api/upload",
                accept: "image/*"
              }
            }
          ]
        },
        {
          title: "权限设置",
          items: [
            {
              type: "checkboxGroup",
              name: "permissions",
              label: "权限列表",
              options: [
                { label: "查看", value: "view" },
                { label: "编辑", value: "edit" },
                { label: "删除", value: "delete" }
              ]
            }
          ]
        }
      ]
    }
  ]
};