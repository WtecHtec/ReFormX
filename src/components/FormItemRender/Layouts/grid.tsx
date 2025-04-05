
import { LayoutProps } from "./types";
import renderFormItem from "..";
import { Col, Row } from "antd";


const GridLayout = ({ groupIndex, group, formItem }: LayoutProps) => {

    return <Row key={groupIndex} gutter={16}>
        {group.items.map((item) => {
            let renderNode = renderFormItem({ ...formItem, item })
            return (
                renderNode ? <Col key={item.name} span={24 / (group.columns || 2)}>
                    {renderNode}
                </Col> : null
            )
        }
        )}
    </Row>
}

export default GridLayout;