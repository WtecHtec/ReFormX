import { Col, Row } from "antd"

import renderFormItem from "..";
import { LayoutProps } from "./types";


const InlineLayout = ({ groupIndex, group, formItem }: LayoutProps) => {
    return <Row key={groupIndex} gutter={16}>
        {group.items.map((item) => {
            let renderNode = renderFormItem({ ...formItem, item })
            return renderNode ? <Col span={12} key={item.name}>
                {renderNode}
            </Col> : null
        })}
    </Row>
}

export default InlineLayout;