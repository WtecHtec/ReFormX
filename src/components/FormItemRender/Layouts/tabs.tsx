import { Tabs } from "antd"
import { LayoutProps } from "./types";
import renderFormItem from "..";
const { TabPane } = Tabs;
const TabsLayout = ({ groupIndex, group, formItem }: LayoutProps) => {
    console.log(group)
    return <Tabs key={groupIndex} defaultActiveKey="0">
        {
            group.tabs?.map((tab, index) => {
                return  <TabPane tab={tab.title} key={index.toString()}>
                {tab.items.map((item) => renderFormItem({ ...formItem, item }))}
                     </TabPane>
            })
        }
       
    </Tabs>
}

export default TabsLayout;