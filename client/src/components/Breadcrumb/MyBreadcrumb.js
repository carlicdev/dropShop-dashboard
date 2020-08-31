import React from 'react';
import { Breadcrumb } from 'antd';

const MyBreadcrumb = ({history}) => {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                {
                    history.map(i => {
                        return <Breadcrumb.Item>{i}</Breadcrumb.Item>
                    })
                }
            </Breadcrumb>
        </div>
    )
}

export default MyBreadcrumb
