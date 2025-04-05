import * as React from 'react';
import {  Form, Input, Spin } from "antd";
import { DynamicFormItemProps } from "../../types/props";
import TypeItems from "./TypeItems";



const renderFormItem = ({ item, loadingFields, optionsData, form, extraState, updateState, forceUpdate, customTypes }: DynamicFormItemProps) => {
  // 隐藏的情况，直接 retur
  const values = form.getFieldsValue();
  if (item.visible && !item.visible(values, extraState, { form })) return null;
  if (item.render) return item.render({item, form, values, extraState, updateState, forceUpdate});
  let renderNode = null;
  let formItem = true
  if (typeof TypeItems[item.type as keyof typeof TypeItems] === "function") {
    renderNode = TypeItems[item.type as keyof typeof TypeItems]({ item, loadingFields, optionsData, form, extraState, updateState, forceUpdate });
  }
  console.log("renderFormItem customTypes", customTypes, item.type)
  if (!renderNode) {
    const customType = (customTypes || {})[item.type] || {}
    if (customType.render)  {
      formItem = customType.formItem || true
      renderNode =  customType.render({ item, form, extraState, updateState, forceUpdate });
    }
  }

  if (!renderNode) {
    renderNode = <Input placeholder={item.placeholder} {...(item?.extraProps || {})} />
    return null;
  }

  return <>
    {
      renderNode && formItem ? ( <Form.Item key={ item.name } label={ item.label } name={ item.name } rules={ item.rules }  dependencies={ item?.dependencies || []} {...(item?.extraFormItemProps || {})}>
      {(() => {
        if (loadingFields[item.name]) {
          return <Spin />
        }
        return renderNode;
      })()
    }
    </Form.Item >)
      :  ( renderNode || null)
    }
   </>

};
export default renderFormItem;