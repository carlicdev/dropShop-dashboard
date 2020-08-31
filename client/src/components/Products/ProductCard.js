import React from 'react';
import { Card, Col } from 'antd';

const ProductCard = (props) => {
    const { title, lead } = props;
    return (
        <Col span={8}>
            <Card title={title} style={{textAlign:'center'}}>
                <h2>{lead}</h2>
            </Card>
        </Col>
    )
}

export default ProductCard
