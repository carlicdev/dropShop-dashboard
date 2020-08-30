import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

import Products from '../Products/Products';
import Orders from '../Orders/Orders';
import MyClients from '../MyClients/MyClients'

const { Content, Header } = Layout;


const Main = () => {
    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background' style={{ padding: 2}}>
            </Header>
            <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
            <Switch>
                <Route exact path='/products' component={Products} />
                <Route exact path='/orders' component={Orders} />
                <Route exact path='/myclients' component={MyClients} />
            </Switch>
            </Content>
        </Layout>
    )
}

export default Main
