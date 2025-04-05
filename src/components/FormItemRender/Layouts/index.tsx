import CollapseLayout from "./collapse";
import GridLayout from "./grid";
import InlineLayout from "./inline";
import StepLayout from "./step";
import TabsLayout from "./tabs";

const layouts = {
    'inline': InlineLayout,
    'grid': GridLayout,
    'tabs': TabsLayout,
    'collapse': CollapseLayout,
    'step': StepLayout,
} as const;

export default layouts;