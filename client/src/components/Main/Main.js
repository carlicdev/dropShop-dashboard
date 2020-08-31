import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Button } from 'antd';

import Products from '../Products/Products';
import Orders from '../Orders/Orders';
import MyClients from '../MyClients/MyClients'
import MyModal from '../Modal/MyModal';

const { Content, Header } = Layout;

const Main = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background' style={{ padding: 2}}>
                <Button onClick={() => setOpenModal(!openModal)}>Modal</Button>
            </Header>
            <Content style={{ margin: '0 16px' }}>
                <MyModal visible={openModal} content={'nada'}/>
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
