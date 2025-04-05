import { Collapse } from "antd"
import { LayoutProps } from "./types";
import renderFormItem from "..";

const { Panel } = Collapse;
const CollapseLayout = ({ groupIndex, group, formItem }: LayoutProps) => {

    return <Collapse key={groupIndex}  {...(group?.extraProps || {})}>
        <Panel header={group.title} key={groupIndex.toString()}>
            {group.items.map((item) => renderFormItem({ ...formItem, item }))}
        </Panel>
    </Collapse>
}

export default CollapseLayout;