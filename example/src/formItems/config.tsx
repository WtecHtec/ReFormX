import { IFormConfig } from "../../../src/types/form";
export const formConfig: IFormConfig = {
  groups: [
    {
      layout: "custom",
      columns: 3,
      items: [
        {
          name: 'avatar',
          label: '头像',
          type: 'upload',
          defaultValue: [
            {
              uid: '-1',
              name: 'image.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
          ],
          extraProps: {
              action: '/upload',
              accept: 'image/*',
              fileList: [
                {
                  uid: '-1',
                  name: 'image.png',
                  status: 'done',
                  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
              ]
          }
      },
        { type: "password", name: "pwd_company", label: "密码", rules: [{ required: true, message: "请输入密码" }]  },
        { type: "input", name: "company", label: "公司" },
        { type: "checkbox", name: "checkbox", valueLabel: "checkbox", label: "" },
        {
          type: "select", name: "role", label: "角色",
          options: [{ label: "管理员11", value: "admin" }, { label: "用户", value: "user" }]
        },
        {
          name: 'birthday',
          label: '生日',
          type: 'datePicker'
        },
        {
          name: 'workTime',
          label: '工作时间',
          type: 'timePicker'
        },
        {
          name: 'gender',
          label: '性别',
          type: 'radio',
          options: [
            { label: '男', value: 'male' },
            { label: '女', value: 'female' }
          ]
        },
        {
          name: 'active',
          label: '是否启用',
          type: 'switch'
        },
        {
          name: 'description',
          label: '描述',
          type: 'textarea'
        },
        {
          name: 'age',
          label: '年龄',
          type: 'inputNumber'
        },
        {
          name: 'hobbies',
          label: '兴趣爱好',
          type: 'checkboxGroup',
          options: [
            { label: '阅读', value: 'reading' },
            { label: '游戏', value: 'gaming' },
            { label: '运动', value: 'sports' }
          ]
        },
        {
          name: 'progress',
          label: '进度',
          type: 'slider',
          extraProps: {
            min: 0,
            max: 100
          }
        },
        {
          name: 'themeColor',
          label: '主题色',
          type: 'colorPicker',
          defaultValue: '#189000'
        },
        {
          name: 'score',
          label: '评分',
          type: 'rate'
        },
        {
          name: 'area',
          label: '地区',
          type: 'cascader',
          options: [
            {
              value: 'zhejiang',
              label: '浙江',
              children: [
                {
                  value: 'hangzhou',
                  label: '杭州'
                }
              ]
            }
          ]
        },
      ],
    },
  ],
};

