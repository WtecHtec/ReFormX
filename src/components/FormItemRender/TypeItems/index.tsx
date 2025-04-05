import CascaderItem from "./Cascader";
import CheckboxItem from "./CheckBox";
import CheckboxGroupItem from "./CheckboxGroup";
import ColorPickerItem from "./ColorPicker";
import DatePickerItem from "./DatePicker";
import InputItem from "./Input";
import InputNumberItem from "./InputNumber";
import PasswordItem from "./Password";
import RadioItem from "./Radio";
import RateItem from "./Rate";
import SelectItem from "./Select";
import SliderItem from "./Slider";
import SwitchItem from "./Switch";
import TextAreaItem from "./TextArea";
import TimePickerItem from "./TimePicker";
import UploadItem from "./Upload";


const TypeItems = {
    input: InputItem,
    checkbox: CheckboxItem,
    select: SelectItem,
    datePicker: DatePickerItem,
    timePicker: TimePickerItem,
    radio: RadioItem,
    switch: SwitchItem,
    textarea: TextAreaItem,
    inputNumber: InputNumberItem,
    password: PasswordItem,
    checkboxGroup: CheckboxGroupItem,
    slider: SliderItem,
    colorPicker: ColorPickerItem,
    rate: RateItem,
    cascader: CascaderItem,
    upload: UploadItem,
}

export default TypeItems