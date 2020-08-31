import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

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
