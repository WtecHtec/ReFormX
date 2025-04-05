import React, { useEffect, useState } from "react";
import { Button, Form, Steps } from "antd";
import formLayout from "./FormItemRender/Layouts";
import renderFormItem from "./FormItemRender";
import { DynamicFormProps } from "../types/props";
import { TLayoutKey } from "./FormItemRender/Layouts/types";
import { IFormItemConfig } from "../types/form";


const { Step } = Steps;


const DynamicForm: React.FC<DynamicFormProps> = (props) => {
  const { form: propForm, config, extState, onSubmit, customTypes , footterStyle, initialValues, renderSubmit, isReset} = props || {};
  let [form] = Form.useForm();
  form = propForm || form;
  
  // 额外状态
  const [extraState, setExtraState] = useState<Record<string, any>>(extState || {});
  // 选择器数据、用于动态加载
  const [optionsData, setOptionsData] = useState<Record<string, any[]>>({});
  // 加载中的字段
  const [loadingFields, setLoadingFields] = useState<Record<string, boolean>>({});
  // 记录步骤
  const [currentStep, setCurrentStep] = useState(0);
  // 强制刷新
  const [ _, setTick] = useState(0)

  const cacheRef = React.useRef<Record<string, any>>({
    formValues: {},
    extraState: {},
  });

  // 额外状态更新
  const updateState = (key: string, value: any) => {
    setExtraState((prev) => ({ ...prev, [key]: value }));
  };

  const forceUpdate = () => {
    setTick(tick => tick + 1)
  };

  const fetchOptions = async (item: IFormItemConfig) => {
    if (!item.fetchOptions) return;
    setLoadingFields((prev) => ({ ...prev, [item.name]: true }));

    try {
      const values = form.getFieldsValue();
      const data = await item.fetchOptions({ values, form, extraState, updateState, currentStep });
      setOptionsData((prev) => ({ ...prev, [item.name]: data }));
    } finally {
      setLoadingFields((prev) => ({ ...prev, [item.name]: false }));
    }
  };
  // 加载选择器数据
  useEffect(() => {
    console.log("加载选择器数据");
    config.groups.forEach((group) => {
      group.items.forEach(async (item) => {
        fetchOptions(item);
      })
      group.tabs?.forEach(async (tab) =>
        tab.items.forEach(async (item) => {
          fetchOptions(item);
        })
      );
    });
  }, [config.groups]);


  // 加载默认值
  useEffect(() => {
    const acc: Record<string, any> = {};
    config.groups.forEach((group) => {
      group.items.forEach(async (item) => {
        if (item.defaultValue !== undefined) acc[item.name] = item.defaultValue;
      })
      group.tabs?.forEach(async (tab) =>
        tab.items.forEach(async (item) => {
          if (item.defaultValue !== undefined) acc[item.name] = item.defaultValue;
        })
      );
    });
    form.setFieldsValue({...acc}); 
  }, [config.groups]);

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues])


  // 监听扩展字段变化
  useEffect(() => {
    const oldExtraState = cacheRef.current.extraState;
    const changedExtraState = Object.keys(extraState).reduce((acc, key) => {
      if (extraState[key] !== oldExtraState[key]) {
        acc[key] = extraState[key];
      }
      return acc;
    }, {} as Record<string, any>);
    if (Object.keys(changedExtraState).length > 0) {
      handleValuesChange(changedExtraState, form.getFieldsValue());
    }
    
    cacheRef.current.extraState = {...extraState};
  }, [extraState])

  useEffect(() => {
    if (extState) {
      setExtraState(extState);
    }
  }, [extState, setExtraState])

  const handleValuesChange = (changedValues: any, allValues: any) => {
    console.log("handleValuesChange",changedValues, allValues);
    config.groups.forEach((group) => {
      group.items.forEach((item) => {

        if (item.fetchOptions && item.dependencies?.some((dep) => changedValues.hasOwnProperty(dep) &&  (allValues[dep] !== undefined|| extraState[dep]!== undefined ) )) {
          fetchOptions(item);
        }
        if (item.visible && item.visibleDeps?.some((dep) => changedValues.hasOwnProperty(dep) &&  (allValues[dep] !== undefined|| extraState[dep]!== undefined ) )) {
          forceUpdate()
        }
      });
      group.tabs?.forEach(async (tab) =>
        tab.items.forEach(async (item) => {
          if (item.fetchOptions && item.dependencies?.some((dep) => changedValues.hasOwnProperty(dep) && (allValues[dep] !== undefined|| extraState[dep]!== undefined ) )) {
            fetchOptions(item);
          }
          if (item.visible && item.visibleDeps?.some((dep) => changedValues.hasOwnProperty(dep) &&  (allValues[dep] !== undefined|| extraState[dep]!== undefined ) )) {
            forceUpdate()
          }
        })
      );
    });
   
  };


  const renderStepPrev = () => {
    if (currentStep > 0) {
      const { step } = config.groups.filter((g) => g.layout === "step")[currentStep]
      if (!step || !step?.prevText) return null;
      return <Button onClick={() => {
        setCurrentStep((prev) => prev - 1);
        step?.onPrev?.({ form, extraState, updateState, optionsData, loadingFields, currentStep, forceUpdate });
      }}>{step?.prevText || "上一步"}</Button>
    }
    return null;
  };

  const renderStepNext = () => {
    if (currentStep <= config.groups.filter((g) => g.layout === "step").length - 1) {
      const { step, items } = config.groups.filter((g) => g.layout === "step")[currentStep] || {};
      if (!step || !step?.nextText) return null;
      return <Button type="primary" onClick={() => {
        if (currentStep === config.groups.filter((g) => g.layout === "step").length - 1) {
          form.submit();
        } else {
          const currentStepFields = items.map(item => item.name);
          form.validateFields(currentStepFields).then((values) => {
            form.setFieldsValue(values);
            setCurrentStep((prev) => prev + 1);
          });
        }
        step?.onNext?.({ form, extraState, updateState, optionsData, loadingFields, currentStep, forceUpdate });
      }} style={{ marginLeft: 8 }}>
        {step?.nextText || "下一步"}
      </Button>
    };
    return null;
  };

  const renderStepExtra = () => {
    const item = config.groups.filter((g) => g.layout === "step")[currentStep] || {};
    const { step } = item;
    if (!step?.extra) return null;
    return step?.extra({item, form, extraState, updateState, currentStep, forceUpdate, extra: { setCurrentStep } });
  };


  const handleRenderSubmit = () => {
    if (typeof renderSubmit === "function") {
      return renderSubmit({ item: config, form, extraState, updateState,forceUpdate });
    }
    return <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
      {config.submitText || "提交"}
    </Button>
  };



  return (
    <Form form={form} layout="vertical" onFinish={(values) => onSubmit?.(values, { form, extraState, updateState, forceUpdate})} onValuesChange={handleValuesChange}>
      {/* 渲染步骤条 */}
      {config.groups.some((g) => g.layout === "step") && (
        <Steps current={currentStep}>
          {config.groups
            .filter((g) => g.layout === "step")
            .map((g, index) => (
              <Step key={index} title={g?.step?.title || ""} />
            ))}
        </Steps>
      )}
      {/* 渲染表单 */}
      {config.groups.map((group, groupIndex) => {
        if (typeof formLayout[group.layout as TLayoutKey] === "function") {
          return formLayout[group.layout as TLayoutKey]({ groupIndex, group, formItem: { item: group, form, extraState, updateState, optionsData, loadingFields, currentStep, forceUpdate, customTypes } });
        }
        return <>{group.items.map((item) => renderFormItem({ item, form, extraState, updateState, optionsData, loadingFields, currentStep, forceUpdate, customTypes }))}</>
      })}

      {/* 步骤表单按钮 */}
      {config.groups.some((g) => g.layout === "step") && (
        <div style={{ marginTop: 16, ...(config.stepStyle || {}) }}>
          {renderStepPrev()}
          {renderStepNext()}
          {renderStepExtra()}
        </div>
      )}
      {/* 普通表单按钮 */}
      {!config.groups.some((g) => g.layout === "step") && (
        <div style={{ marginTop: 16, ...(footterStyle || {}) }}>
          { isReset &&   <Button onClick={() => form.resetFields()}>重置</Button>}
          {handleRenderSubmit()}
        </div>
      )}
    </Form>
  );
};

export default DynamicForm;