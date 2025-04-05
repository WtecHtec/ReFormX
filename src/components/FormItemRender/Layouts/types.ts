import layouts from ".";
import { FormGroupConfig } from "../../../types/form"
import { DynamicFormItemProps } from "../../../types/props";
export interface LayoutProps {
    groupIndex: number;
    group: FormGroupConfig;
    formItem: DynamicFormItemProps;
}

export type TLayoutKey = keyof typeof layouts
